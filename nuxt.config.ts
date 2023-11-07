// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	css: ["~/assets/css/main.css"],
	modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "nuxt-icon", "@pinia/nuxt"],
	components: [
		{
			path: "~/components",
			pathPrefix: false,
		},
	],
	runtimeConfig: {
		//   contentful

		space: process.env.NUXT_CONTENTFUL_SPACE,
		accessToken: process.env.NUXT_CONTENTFUL_ACCESS_TOKEN,
	},
	image: {
		domains: ["images.ctfassets.net"],
		quality: 80,
		format: ["png", "webp", "avif", "jpeg", "jpg"],
	},
});
