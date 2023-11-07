import { defineStore } from 'pinia'

export const useReviewsStore = defineStore('reviewsStore', () => {
    const { $contentful } = useNuxtApp();
    const reviews = ref(null);

    const fetchReviews = async () => {
        try {
            const response = await $contentful.getEntries();
            reviews.value = response.items;

        } catch (err) {
            console.log(err)
        }
    };


    return { reviews, fetchReviews }
})
