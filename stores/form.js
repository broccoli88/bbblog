import { defineStore } from 'pinia'

export const useFormStore = defineStore('formStore', () => {
    const supabase = useSupabaseClient();
    const state = ref({
        book_title: "",
        book_subtitle: "",
        published_at: null,
        author: "",
        review_pt_1: "",
        review_pt_2: "",
        review_pt_3: "",
        cover_url: "",
    });

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
        try {
            const { data, error } =
                await supabase
                    .from("reviews")
                    .insert(state.value)
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

    const selectedGenres = ref([]);

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

    // Submit review

    const submitReview = async () => {
        try {
            pending.value = true

            const reviewId = await insertReview()

            if (!selectedGenres.value) return

            await insertGenres(reviewId, selectedGenres.value)
            await uploadCover(cover.value)

        } catch (error) {
            console.log(error)
        } finally {
            pending.value = false
        }
    };


    return {
        state,
        uploadCover,
        cover,
        selectedGenres,
        submitReview
    }
})
