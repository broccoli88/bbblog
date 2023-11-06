import * as contentful from 'contentful'

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    const client = contentful.createClient({
        space: config.public.space,
        accessToken: config.public.accessToken
    })

    return {
        provide: {
            contentful: client
        }
    }
})
