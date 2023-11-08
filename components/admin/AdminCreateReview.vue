<script setup>
	const heading = "Create review";
	const btn = "post review";

	const adminCreateReviewInputData = reactive({
		title: {
			label: "Book title",
			id: "title",
			placeholder: "Enter book title",
		},
		subtitle: {
			label: "Book subtitle",
			id: "subtitle",
			placeholder: "Enter book subtitle",
		},
		published: {
			label: "Published",
			id: "published",
			placeholder: "When was published ?",
		},
		author: {
			label: "Author",
			id: "author",
			placeholder: "Who wrote that crap ?",
		},
		review_part_1: {
			label: "Review part 1",
			id: "review-part-1",
			placeholder: "First part of the review",
		},
		review_part_2: {
			label: "Review part 2",
			id: "review-part-2",
			placeholder: "Second part of the review",
		},
		review_part_3: {
			label: "Review part 3",
			id: "review-part-3",
			placeholder: "Third part of the review",
		},
		cover: {
			label: "Books cover",
			id: "book-cover",
		},
	});
</script>

<template>
	<section class="isolate">
		<FormForm :heading="heading" :btn="btn">
			<FormFileInput
				:label="adminCreateReviewInputData.cover.label"
				:id="adminCreateReviewInputData.cover.id"
			/>
			<FormInput
				:label="adminCreateReviewInputData.title.label"
				:id="adminCreateReviewInputData.title.id"
				:placeholder="adminCreateReviewInputData.title.placeholder"
			/>
			<FormInput
				:label="adminCreateReviewInputData.subtitle.label"
				:id="adminCreateReviewInputData.subtitle.id"
				:placeholder="adminCreateReviewInputData.subtitle.placeholder"
			/>
			<FormInput
				type="date"
				:label="adminCreateReviewInputData.published.label"
				:id="adminCreateReviewInputData.published.id"
				:placeholder="adminCreateReviewInputData.published.placeholder"
			/>
			<FormInput
				:label="adminCreateReviewInputData.author.label"
				:id="adminCreateReviewInputData.author.id"
				:placeholder="adminCreateReviewInputData.author.placeholder"
			/>
			<FormTextArea
				:label="adminCreateReviewInputData.review_part_1.label"
				:id="adminCreateReviewInputData.review_part_1.id"
				:placeholder="
					adminCreateReviewInputData.review_part_1.placeholder
				"
			/>
			<FormTextArea
				:label="adminCreateReviewInputData.review_part_2.label"
				:id="adminCreateReviewInputData.review_part_2.id"
				:placeholder="
					adminCreateReviewInputData.review_part_2.placeholder
				"
			/>
			<FormTextArea
				:label="adminCreateReviewInputData.review_part_3.label"
				:id="adminCreateReviewInputData.review_part_3.id"
				:placeholder="
					adminCreateReviewInputData.review_part_3.placeholder
				"
			/>
		</FormForm>
	</section>
</template>

<style></style>
