// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	css: ["~/assets/css/main.css"],
	modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "nuxt-icon"],
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
});
