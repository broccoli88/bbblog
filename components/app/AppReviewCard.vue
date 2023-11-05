<script setup>
	const props = defineProps({
		id: {
			type: Number,
		},
		title: {
			type: String,
		},
		author: {
			type: String,
		},
		review: {
			type: Object,
		},
		release: {
			type: String,
		},
	});

	const id = toRef(props, "id");
	const reviewLink = `reviews/${id.value}`;
</script>

<template>
	<article class="card relative bg-clr-bg border border-clr-primary">
		<SectionFrame />
		<section class="card__content grid grid-cols-2">
			<NuxtPicture src="/images/book-cover.png" class="card__img" />
			<div
				class="card__description isolate p-3 flex flex-col z-10 capitalize"
			>
				<p class="text-fsm-note md:text-fsd-note">{{ release }}</p>
				<h3>{{ title }}</h3>
				<h4 class="mb-2">the final installment</h4>
				<p class="text-fsm-note md:text-fsd-note">by: {{ author }}</p>
				<AppButtonLink class="mt-auto md:mt-8 grid" :src="reviewLink">
					check review
				</AppButtonLink>
			</div>
		</section>
	</article>
</template>

<style scoped>
	@media (min-width: 768px) {
		.card::before {
			content: "";
			position: absolute;
			inset: 0;
			border: 1px solid var(--clr-primary);
			rotate: 0.4deg;

			z-index: 1;
			background-image: linear-gradient(transparent, #21142b 75%);
			pointer-events: none;
		}

		.card__content {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 40%;
		}
	}
</style>
