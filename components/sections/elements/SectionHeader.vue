<script setup></script>

<template>
	<header
		class="w-5/6 relative bg-clr-bg grid justify-end max-w-[400px] md:w-1/2 md:max-w-[600px] md:mx-0 left-[-3px]"
	>
		<SectionFrame class="section-header__frame" />
		<div class="relative isolate py-6 w-min px-8 md:py-10">
			<h2 class="whitespace-nowrap">
				<slot />
			</h2>
			<NuxtPicture
				src="/images/book-latest.webp"
				class="section-header__img"
			/>
		</div>
	</header>
</template>

<style scoped>
	.section-header__img {
		position: absolute;
		top: 50%;
		left: -25%;
		width: auto;
		height: 100%;

		translate: 0 -50%;
		z-index: -1;
		opacity: 0.8;
	}

	.section-header__img :deep(img) {
		object-fit: contain;
		height: 100%;
	}

	.section-header__frame {
		--rotate: 0.4deg;
	}
</style>
