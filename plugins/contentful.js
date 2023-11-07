// import * as contentful from 'contentful'
import { createClient } from 'contentful'

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()


    const client = createClient({
        space: config.public.space,
        accessToken: config.public.accessToken
    })

    return {
        provide: {
            contentful: client
        }
    }
})
