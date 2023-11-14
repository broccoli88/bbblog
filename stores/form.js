import { defineStore } from 'pinia'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, helpers } from '@vuelidate/validators'

export const useFormStore = defineStore('formStore', () => {
    const supabase = useSupabaseClient();

    const createReviewState = ref({
        book_title: "",
        book_subtitle: "",
        published_at: null,
        author: "",
        review_pt_1: "",
        review_pt_2: "",
        review_pt_3: "",
        cover_url: "",
        genres: []
    });

    const createReviewRules = {
        book_title: { required: helpers.withMessage('Podaj tytuł ksiąki gamoniu!', required) },
        published_at: { required: helpers.withMessage('Wpisz kiedy została wydana sieroto!', required) },
        book_subtitle: { minLength: minLength(0) },
        author: { required: helpers.withMessage('Jaki bęcwał ją napisał?', required) },
        review_pt_1: { required: helpers.withMessage('Weź coś wpisz...', required) },
        review_pt_2: { minLength: minLength(0) },
        review_pt_3: { minLength: minLength(0) },
        cover_url: { required: helpers.withMessage('Jak ten szajs wygląda ?', required) },
        genres: { required: helpers.withMessage('Wybierz gatunek tej srajtaśmy....znaczy się ksiąki :)', required) }
    }

    const v = useVuelidate(createReviewRules, createReviewState, { $lazy: true, $autoDirty: true })

    const pending = ref(false);

    // Image upload to subabase

    const cover = ref(null)

    const uploadCover = async (files) => {
        try {
            pending.value = true

            if (!files || files.length === 0) {
                throw new Error("You must select an image to upload.");
            }

            const file = files[0];
            const filePath = `covers/${file.name}`;

            const { error: uploadError } = await supabase.storage
                .from("book-bestiary")
                .upload(filePath, file, { returning: 'minimal' });

            if (uploadError) throw uploadError;
        } catch (error) {
            console.log(error);
        } finally {
            pending.value = false
        }
    };

    // Insert review

    const insertReview = async () => {
        const revieData = ref({
            book_title: createReviewState.value.book_title,
            book_subtitle: createReviewState.value.book_subtitle,
            published_at: createReviewState.value.published_at,
            author: createReviewState.value.author,
            review_pt_1: createReviewState.value.review_pt_1,
            review_pt_2: createReviewState.value.review_pt_2,
            review_pt_3: createReviewState.value.review_pt_3,
            cover_url: createReviewState.value.cover_url,
        })


        try {
            const { data, error } =
                await supabase
                    .from("reviews")
                    .insert(revieData.value)
                    .select();

            if (error) {
                console.log(error);
                return;
            }

            return data[0].review_id
        } catch (error) {
            console.log(error);
        }
    };

    // Insert Genre

    const isGenreEmpty = ref(false)

    const insertGenres = async (reviewId, genresArr) => {
        for (let i = 0; i < genresArr.length; i++) {
            if (!reviewId) {
                throw Error("no review id");
            }
            try {
                const { data, error } = await supabase
                    .from("review_genres")
                    .insert([
                        {
                            review_id: reviewId,
                            genre_id: genresArr[i],
                        },
                    ]);

                if (error) {
                    console.log(error);
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    // Clear fields

    const clearCreateReviewForm = () => {
        createReviewState.value.book_title = ''
        createReviewState.value.book_subtitle = ''
        createReviewState.value.published_at = null
        createReviewState.value.author = ''
        createReviewState.value.review_pt_1 = ''
        createReviewState.value.review_pt_2 = ''
        createReviewState.value.review_pt_3 = ''
        createReviewState.value.cover_url = ''
        createReviewState.value.genres = []
        isGenreEmpty.value = false
    }

    // Submit review

    const submitReview = async () => {
        try {
            const isFormCorrect = await v.value.$validate()
            if (!isFormCorrect || !createReviewState.value.genres) {
                isGenreEmpty.value = true
                return
            }

            pending.value = true

            const reviewId = await insertReview()

            await insertGenres(reviewId, createReviewState.value.genres)
            await uploadCover(cover.value)
            clearCreateReviewForm()
            v.value.$reset()

        } catch (error) {
            console.log(error)
        } finally {
            pending.value = false
        }
    };

    // Login validation

    const isLoginWrong = ref(false)
    const adminLoginState = ref({
        email: '',
        pwd: ''
    })

    const logIn = async () => {

        if (!adminLoginState.value.email || !adminLoginState.value.pwd) {
            isLoginWrong.value = true
            return
        }

        try {
            pending.value = true

            const { error } = await supabase.auth.signInWithPassword({
                email: adminLoginState.value.email,
                password: adminLoginState.value.pwd,
            });

            if (error) {
                console.log(error);
                isLoginWrong.value = true
                return;
            }
            await navigateTo({ name: "admin" });

            adminLoginState.value.email = ''
            adminLoginState.value.pwd = ''
            isLoginWrong.value = false

        } catch (error) {
            console.log(error)
        } finally {
            pending.value = false
        }
    };

    // Log out

    const logOut = async () => {

        try {
            pending.value = true

            const { error } = await supabase.auth.signOut()

            if (error) {
                console.log(error.message)
                return
            }
            navigateTo({ name: "index" })
        } catch (error) {
            console.log(error)

        } finally {
            pending.value = false
        }
    }


    return {
        pending,
        // review creation
        createReviewState,
        uploadCover,
        cover,
        submitReview,
        v,

        // admin login
        adminLoginState,
        isLoginWrong,
        isGenreEmpty,
        logIn,
        logOut

    }
})
