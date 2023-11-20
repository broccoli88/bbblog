import { defineStore } from "pinia";

export const useAdminStore = defineStore("adminStore", () => {
    const supabase = useSupabaseClient();

    // Fetch genres
    const genres = ref([])


    const fetchAllGenres = async () => {

        try {
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
        }
    }

    // Last 3 reviews

    const latestReviews = ref([])

    const fetchLastReviews = async () => {
        try {
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
        }

    }

    // Selected review

    const currentReview = ref(null)

    const getReview = async (id) => {
        try {
            const { data, error } = await supabase
                .from('reviews')
                .select('*')
                .eq('review_id', parseInt(id))
                .single()

            if (error) {
                console.log('Get review supabase: ', error)
                return
            }

            currentReview.value = data
            // console.log(data)

        } catch (error) {
            console.log('Get review: ', error)
        }
    }



    return {
        // Fetch genres
        genres,
        fetchAllGenres,
        latestReviews,
        fetchLastReviews,
        currentReview,
        getReview

    };
});
