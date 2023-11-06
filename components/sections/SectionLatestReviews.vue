<script setup>
	const reviewsStore = useReviewsStore();
	const { reviews } = storeToRefs(reviewsStore);

	const allReviewsSrc = { name: "reviews" };
	const allReviewsTitle = "Navigate to reviews list";
</script>

<template>
	<section class="grid mb-12">
		<SectionHeader>Latest Reviews</SectionHeader>
		<div class="wrapper review-card-grid mt-16">
			<AppReviewCard
				v-for="review in reviews"
				:key="review.sys.id"
				:id="review.sys.id"
				:title="review.fields.bookTitle"
				:subtitle="review.fields.bookSubtitle"
				:author="review.fields.bookAuthor"
				:release="review.fields.bookRelease"
				:createdAt="review.fields.createdAt"
				:review1="review.fields.review1"
				:review2="review.fields.review2"
				:review3="review.fields.review3"
				:cover="review.fields.bookCover.fields.file.url"
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
