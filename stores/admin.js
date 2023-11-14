import { defineStore } from "pinia";

export const useAdminStore = defineStore("adminStore", () => {
    const supabase = useSupabaseClient();

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
        // Fetch genres
        genres,
        fetchAllGenres
    };
});
