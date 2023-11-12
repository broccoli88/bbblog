import { defineStore } from 'pinia'

export const useFormStore = defineStore('formStore', () => {
    const supabase = useSupabaseClient();
    const state = ref({})

    // Image upload to subabase

    const pending = ref(false);

    const uploadCover = async (files) => {
        try {
            pending.value = true

            if (!files || files.length === 0) {
                throw new Error("You must select an image to upload.");
            }

            const file = files[0];
            const filePath = `covers/${file.name}`;

            const { error: uploadError } = await supabase.storage
                .from("book-bestiary")
                .upload(filePath, file, { returning: 'minimal' });

            if (uploadError) throw uploadError;
        } catch (error) {
            console.log(error);
        } finally {
            pending.value = false
        }
    };

    const clearCoverSelection = (imgPath, file, preview, confirmation) => {
        try {
            pending.value = true

            const { error } = supabase.storage
                .from('book-bestiary')
                .remove([imgPath])

            if (error) {
                console.log(error)
                return
            }

            file.disabled = false;
            file.value = null;
            preview.src = "";
            confirmation = false;

        } catch (error) {
            console.log(error)
        } finally {
            pending.value = false
        }


    };

    const submitReview = () => {


    }

    return {
        uploadCover,
        clearCoverSelection
    }
})
