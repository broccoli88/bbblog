import { defineStore } from 'pinia'
import { createClient } from 'contentful'

export const useReviewsStore = defineStore('reviewsStore', () => {

    const config = useRuntimeConfig()
    const client = createClient({
        space: config.public.space,
        accessToken: config.public.accessToken
    })

    const reviews = ref(null);


    const fetchReviews = async () => {
        try {
            const response = await client.getEntries()
            reviews.value = response.items;

        } catch (err) {
            console.log(err)
        }
    };


    return { reviews, fetchReviews }
})
