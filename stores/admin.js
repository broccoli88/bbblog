import { defineStore } from "pinia";

export const useAdminStore = defineStore("adminStore", () => {
    const supabase = useSupabaseClient();
    const pending = ref(false);

    // Fetch genres
    const genres = ref([])


    const fetchAllGenres = async () => {
        try {
            pending.value = true
            const { data, error } = await supabase
                .from('genres')
                .select()
                .order('genre_name')

            if (error) {
                console.log(error.details, error.message)
                return
            }
            genres.value = data
        } catch (error) {
            console.log(error)
        } finally {
            pending.value = false
        }
    }

    // Last 3 reviews

    const latestReviews = ref([])

    const fetchLastReviews = async () => {
        try {
            pending.value = true
            const { data: review, error } = await supabase
                .from('reviews')
                .select('book_title, book_subtitle, cover_url, review_id, author, published_at')
                .range(0, 2)

            latestReviews.value = review

            if (error) {
                console.log(error)
                return
            }

        } catch (error) {
            console.log(error)
        } finally {
            pending.value = false
        }

    }

    // Selected review

    const currentReview = ref(null)
    const currentReviewGenres = ref([])

    const getCurrentReviewGenres = async (id) => {
        currentReviewGenres.value = []
        try {
            pending.value = true
            const { data, error } = await supabase
                .from('review_genres')
                .select('*')
                .eq('review_id', id)

            if (error) {
                console.log('Get genres review_genres error: ', error)
                return
            }

            for (let i = 0; i < data.length; i++) {
                const { data: genre, error: genreError } = await supabase
                    .from('genres')
                    .select('genre_name')
                    .eq('genre_id', data[i].genre_id)


                if (genreError) {
                    console.log('Get genres genre error: ', genreError)
                    return
                }

                currentReviewGenres.value.push(genre[0].genre_name)
            }

        } catch (error) {
            console.log('Get current review genres: ', error)
        } finally {
            pending.value = false
        }
    }

    const getCurrentReview = async (id) => {
        const currentId = parseInt(id)

        try {
            pending.value = true
            const { data, error } = await supabase
                .from('reviews')
                .select('*')
                .eq('review_id', currentId)
                .single()

            if (error) {
                console.log('Get review supabase: ', error)
                return
            }

            currentReview.value = data
            await getCurrentReviewGenres(id)
            // console.log(data)

        } catch (error) {
            console.log('Get review: ', error)
        } finally {
            pending.value = false
        }
    }





    return {
        pending,
        // Fetch genres
        genres,
        fetchAllGenres,
        latestReviews,
        fetchLastReviews,
        currentReview,
        currentReviewGenres,
        getCurrentReview

    };
});
