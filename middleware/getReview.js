export default defineNuxtRouteMiddleware(async (to) => {
    const adminStore = useAdminStore()

    try {
        await adminStore.getReview(to.params.id)

    } catch (error) {
        console.log('Get review middleware: ', error)
    }

})
