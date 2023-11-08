import { defineStore } from "pinia";

export const useAdminStore = defineStore("adminStore", () => {
    const supabase = useSupabaseClient();

    // LOG IN

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


    return {
        adminLoginState,
        isWrongLogin,
        logIn
    };
});
