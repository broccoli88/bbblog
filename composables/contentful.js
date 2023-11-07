import * as contentful from 'contentful'

export const useContentful = () => {

    const config = useRuntimeConfig()

    const client = contentful.createClient({
        space: config.public.space,
        accessToken: config.public.accessToken
    })

    return client
}
