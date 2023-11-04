<script setup></script>

<template>
	<header
		class="section-header text-center w-5/6 mx-auto relative bg-clr-bg grid justify-center md:justify-end"
	>
		<SectionFrame class="section-header__frame" />
		<div class="seaction-header__wrapper isolate py-6">
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
		left: 0;
		width: 50%;
		height: 100%;

		translate: 0 -50%;
		z-index: -1;
		opacity: 0.8;
	}

	.section-header__img :deep(img) {
		object-fit: contain;
	}

	.section-header__frame {
		--rotate: 0.4deg;
	}

	@media (min-width: 768px) {
		.section-header {
			width: 50%;
			max-width: 600px;
			margin-inline: 0;
			left: -3px;
		}

		.seaction-header__wrapper {
			width: min-content;
			position: relative;
			padding-block: 40px;
			padding-inline: 30px;
		}

		.section-header__img {
			left: -25%;
			width: auto;
		}
	}
</style>
