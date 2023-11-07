import { createClient } from "contentful"

export const useContentful = () => {

    const config = useRuntimeConfig()

    const client = createClient({
        space: config.public.space,
        accessToken: config.public.accessToken
    })

    return client
}
