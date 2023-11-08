// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	css: ["~/assets/css/main.css"],
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxt/image",
		"nuxt-icon",
		"@pinia/nuxt",
		"@nuxtjs/supabase",
	],
	components: [
		{
			path: "~/components",
			pathPrefix: false,
		},
	],
	runtimeConfig: {
		supabasr_url: process.env.SUPABASE_URL,
		supabasle_api_key: process.env.SUPABASE_API_KEY,
	},
	image: {
		domains: ["images.ctfassets.net"],
		quality: 80,
		format: ["png", "webp", "avif", "jpeg", "jpg"],
	},
	supabase: {
		redirect: false,
	},
});
