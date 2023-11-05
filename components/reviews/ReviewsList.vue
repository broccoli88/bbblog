<template>
	<section class="review-grid">
		<SectionReviewCard
			v-for="review in reviews"
			:key="review.id"
			:id="review.id"
			:title="review.title"
			:author="review.author"
			:release="review.release"
			:review="review.review"
		/>
	</section>
</template>

<script setup></script>

<style></style>
