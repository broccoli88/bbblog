

export default defineNuxtRouteMiddleware(async (to, from) => {
    const supabse = useSupabaseClient()

    try {
        const { data: { user } } = await supabse.auth.getUser()
        if (!user) return navigateTo('/admin/login')

    } catch (err) {
        console.log(err)
        return
    }
})
