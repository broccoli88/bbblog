<script setup>
	const reviewsStore = useReviewsStore();
	const { reviews } = storeToRefs(reviewsStore);
</script>

<template>
	<main class="wrapper">
		<AppBackBtn />
		<h1 class="mb-14">Reviews</h1>

		<section class="review-grid">
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
		</section>
	</main>
</template>

<style scoped>
	.review-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
		gap: 20px;
		justify-content: center;
	}
</style>
