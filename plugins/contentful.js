import { createClient } from "contentful";

export default defineNuxtPlugin(() => {
    return {
        provide: {
            client: createClient({
                space: 'test',
                accessToken: 'test'
            })
        }
    }
})