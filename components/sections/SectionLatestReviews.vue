<script setup>
	import reviews from "@/data/review.json";
	const allReviewsSrc = { name: "reviews" };
	const allReviewsTitle = "Navigate to reviews list";
</script>

<template>
	<section class="grid mb-12">
		<SectionHeader>Latest Reviews</SectionHeader>
		<div class="wrapper review-card-grid mt-16">
			<AppReviewCard
				v-for="review in reviews"
				:key="review.id"
				:review="review"
			/>
		</div>
		<AppButtonLink
			:src="allReviewsSrc"
			:title="allReviewsTitle"
			class="justify-self-center mt-11"
			>All reviews
		</AppButtonLink>
	</section>
</template>

<style>
	.review-card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
		gap: 20px;
		justify-content: center;
	}
</style>
