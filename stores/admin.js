import { defineStore } from "pinia";

export const useAdminStore = defineStore("adminStore", () => {
    const supabase = useSupabaseClient();

    // Log in

    const isWrongLogin = ref(false);
    const adminLoginState = ref({
        email: "",
        pwd: "",
    });

    const logIn = async () => {
        if (!adminLoginState.value.email || !adminLoginState.value.pwd) return;

        const { error } = await supabase.auth.signInWithPassword({
            email: adminLoginState.value.email,
            password: adminLoginState.value.pwd,
        });

        if (error) {
            console.log(error);
            isWrongLogin.value = true;
            return;
        }
        await navigateTo({ name: "admin" });

        adminLoginState.value.email = ''
        adminLoginState.value.pwd = ''
    };

    // Log out

    const logOut = async () => {
        const { error } = await supabase.auth.signOut()

        if (error) {
            console.log(error)
            return
        }
        navigateTo({ name: "index" })
    }

    // Fetch genres
    const genres = ref([])

    const fetchAllGenres = async () => {
        const { data, error } = await supabase
            .from('genres')
            .select()
            .order('genre_name')

        if (error) {
            console.log(error.details, error.message)
            return
        }
        genres.value = data
    }

    return {
        // Log in
        adminLoginState,
        isWrongLogin,
        logIn,

        // Log out
        logOut,

        // Fetch genres
        genres,
        fetchAllGenres

    };
});
