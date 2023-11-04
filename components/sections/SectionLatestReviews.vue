<script setup></script>

<template>
	<section>
		<SectionHeader>Latest Reviews</SectionHeader>
		<div class="review-card-grid">
			<SectionReviewCard />
			<SectionReviewCard />
			<SectionReviewCard />
		</div>
	</section>
</template>

<style>
	.review-card-grid {
		display: grid;
		grid-template-columns: repeat(
			auto-fit,
			minmax(min(100%, 300px), 400px)
		);
		gap: 20px;
		justify-content: center;
	}
</style>
