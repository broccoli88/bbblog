<script setup></script>

<template>
	<article class="card relative bg-clr-bg border border-clr-primary">
		<SectionFrame />
		<section class="card__content grid grid-cols-2">
			<NuxtPicture src="/images/book-cover.png" class="card__img" />
			<div class="card__description isolate p-3 flex flex-col z-10">
				<p class="text-fsm-note md:text-fsd-note">03/08/2023</p>
				<h3>metro 2035</h3>
				<h4 class="mb-2">the final installment</h4>
				<p class="text-fsm-note md:text-fsd-note">
					by: dmitry glukhovsky
				</p>
				<AppButtonLink class="mt-auto md:mt-8 grid">
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
