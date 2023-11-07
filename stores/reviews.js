import { defineStore } from 'pinia'
import { useContentful } from '../composables/contentful';
export const useReviewsStore = defineStore('reviewsStore', () => {

    const reviews = ref(null);
    const client = useContentful()

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
