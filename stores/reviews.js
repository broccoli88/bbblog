import { defineStore } from 'pinia'

export const useReviewsStore = defineStore('reviewsStore', () => {
    const { $contentful } = useNuxtApp();
    const reviews = ref(null);

    const fetchReviews = async () => {
        const response = await $contentful.getEntries();
        reviews.value = response.items;
        console.log(reviews.value);
    };


    return { reviews, fetchReviews }
})
