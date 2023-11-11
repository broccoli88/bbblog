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
		genres: {
			label: "Genres",
			id: "genres",
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

	const state = ref({
		cover: "",
		title: "",
		subtitle: "",
		published: null,
		author: "",
		genres: [],
		review_pt_1: "",
		review_pt_2: "",
		review_pt_3: "",
	});

	const submitReview = () => {
		console.log(state.value);
	};
</script>

<template>
	<section class="isolate">
		<FormForm :heading="heading" :btn="btn" @submit.prevent="submitReview">
			<div class="grid grid-cols-[min-content_1fr] gap-10">
				<FormFileInput
					:label="adminCreateReviewInputData.cover.label"
					:id="adminCreateReviewInputData.cover.id"
				/>
				<div class="grid gap-5">
					<FormInput
						:label="adminCreateReviewInputData.title.label"
						:id="adminCreateReviewInputData.title.id"
						:placeholder="
							adminCreateReviewInputData.title.placeholder
						"
						v-model="state.title"
					/>
					<FormInput
						:label="adminCreateReviewInputData.subtitle.label"
						:id="adminCreateReviewInputData.subtitle.id"
						:placeholder="
							adminCreateReviewInputData.subtitle.placeholder
						"
						v-model="state.subtitle"
					/>
					<FormInput
						type="date"
						:label="adminCreateReviewInputData.published.label"
						:id="adminCreateReviewInputData.published.id"
						:placeholder="
							adminCreateReviewInputData.published.placeholder
						"
						v-model="state.published"
					/>
					<FormInput
						:label="adminCreateReviewInputData.author.label"
						:id="adminCreateReviewInputData.author.id"
						:placeholder="
							adminCreateReviewInputData.author.placeholder
						"
						v-model="state.author"
					/>

					<FormSelectInput
						:label="adminCreateReviewInputData.genres.label"
						:id="adminCreateReviewInputData.genres.id"
						v-model="state.genres"
					/>
				</div>
			</div>
			<FormTextArea
				:label="adminCreateReviewInputData.review_part_1.label"
				:id="adminCreateReviewInputData.review_part_1.id"
				:placeholder="
					adminCreateReviewInputData.review_part_1.placeholder
				"
				v-model="state.review_pt_1"
			/>
			<FormTextArea
				:label="adminCreateReviewInputData.review_part_2.label"
				:id="adminCreateReviewInputData.review_part_2.id"
				:placeholder="
					adminCreateReviewInputData.review_part_2.placeholder
				"
				v-model="state.review_pt_2"
			/>
			<FormTextArea
				:label="adminCreateReviewInputData.review_part_3.label"
				:id="adminCreateReviewInputData.review_part_3.id"
				:placeholder="
					adminCreateReviewInputData.review_part_3.placeholder
				"
				v-model="state.review_pt_3"
			/>
		</FormForm>
	</section>
</template>

<style></style>
