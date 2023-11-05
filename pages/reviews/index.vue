<script setup>
	import reviews from "@/data/review.json";
</script>

<template>
	<main class="wrapper">
		<AppBackBtn />
		<h1 class="mb-14">Reviews</h1>

		<section class="review-grid">
			<AppReviewCard
				v-for="review in reviews"
				:key="review.id"
				:id="review.id"
				:title="review.title"
				:author="review.author"
				:release="review.release"
				:review="review.review"
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
