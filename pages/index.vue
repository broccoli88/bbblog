<script setup>
	// const { $client } = useNuxtApp();

	// const data = await $client.getEntries();
</script>
<template>
	<main class="isolate relative grid gap-44">
		<NuxtPicture src="/images/bg-hero.webp" class="hero-bg" />
		<SectionHero />
		<TheSearchBar />
		<SectionLatestReviews />
	</main>
</template>

<style scoped>
	.hero-bg,
	.hero-bg::before {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 140vh;
	}

	.hero-bg {
		z-index: -1;
	}

	.hero-bg::before {
		content: "";
		background-image: linear-gradient(transparent, #140f1f);
	}

	.hero-bg :deep(img) {
		object-position: top;
		height: 100%;
	}
</style>
