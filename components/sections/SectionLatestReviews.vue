<script setup>
	import reviews from "@/data/review.json";

	const adminStore = useAdminStore();
	const { latestReviews } = storeToRefs(adminStore);

	const allReviewsSrc = { name: "reviews" };
	const allReviewsTitle = "Navigate to reviews list";

	await adminStore.fetchLastReviews();
</script>

<template>
	<section class="grid mb-12">
		<SectionHeader>Latest Reviews</SectionHeader>
		<div class="wrapper review-card-grid mt-16">
			<AppReviewCard
				v-for="review in latestReviews"
				:key="review.review_id"
				:author="review.author"
				:title="review.book_title"
				:subtitle="review.book_subtitle"
				:cover="review.cover_url"
				:id="review.book_id"
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
