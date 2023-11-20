

export default defineNuxtRouteMiddleware(async () => {
    const supabase = useSupabaseClient()

    try {
        const { data: { user } } = await supabase.auth.getUser()
        if (!user)
            return navigateTo('/admin/login')

    } catch (err) {
        console.log(err)
        return
    }
})
