<script setup></script>

<template>
	<section class="grid">
		<SectionHeader>Latest Reviews</SectionHeader>
		<div class="wrapper review-card-grid mt-16">
			<SectionReviewCard />
			<SectionReviewCard />
			<SectionReviewCard />
		</div>
		<AppButtonLink class="justify-self-center mt-11"
			>All reviews</AppButtonLink
		>
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
