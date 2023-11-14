<script setup>
	const formStore = useFormStore();
	const { createReviewState, v } = storeToRefs(formStore);

	const heading = "Create review";
	const btn = "post review";

	const adminCreateReviewInputData = reactive({
		book_title: {
			label: "Book title",
			id: "title",
			placeholder: "Enter book title",
		},
		book_subtitle: {
			label: "Book subtitle",
			id: "subtitle",
			placeholder: "Enter book subtitle",
		},
		published_at: {
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

	const updateGenre = (genreArr) => {
		createReviewState.value.genres = genreArr.map((g) => g.genre_id);
	};
	const updateCover = (imgPath) => {
		createReviewState.value.cover_url = imgPath;
	};
</script>

<template>
	<section class="isolate">
		<FormForm
			:heading="heading"
			:btn="btn"
			@submit.prevent="formStore.submitReview"
		>
			<section class="grid grid-cols-[min-content_1fr] gap-10">
				<FormFileInput
					:label="adminCreateReviewInputData.cover.label"
					:id="adminCreateReviewInputData.cover.id"
					:v="v.cover_url"
					@update-cover="updateCover"
				/>
				<div class="grid gap-5">
					<FormInput
						:label="adminCreateReviewInputData.book_title.label"
						:id="adminCreateReviewInputData.book_title.id"
						:placeholder="
							adminCreateReviewInputData.book_title.placeholder
						"
						:v="v.book_title"
						v-model="createReviewState.book_title"
					/>
					<FormInput
						:label="adminCreateReviewInputData.book_subtitle.label"
						:id="adminCreateReviewInputData.book_subtitle.id"
						:placeholder="
							adminCreateReviewInputData.book_subtitle.placeholder
						"
						:v="v.book_subtitle"
						v-model="createReviewState.book_subtitle"
					/>
					<FormInput
						type="date"
						:label="adminCreateReviewInputData.published_at.label"
						:id="adminCreateReviewInputData.published_at.id"
						:placeholder="
							adminCreateReviewInputData.published_at.placeholder
						"
						:v="v.published_at"
						v-model="createReviewState.published_at"
					/>
					<FormInput
						:label="adminCreateReviewInputData.author.label"
						:id="adminCreateReviewInputData.author.id"
						:placeholder="
							adminCreateReviewInputData.author.placeholder
						"
						:v="v.author"
						v-model="createReviewState.author"
					/>
				</div>
			</section>
			<FormSelectCollection :v="v.genres" @update-genre="updateGenre" />

			<FormTextArea
				:label="adminCreateReviewInputData.review_part_1.label"
				:id="adminCreateReviewInputData.review_part_1.id"
				:placeholder="
					adminCreateReviewInputData.review_part_1.placeholder
				"
				:v="v.review_pt_1"
				v-model="createReviewState.review_pt_1"
			/>
			<FormTextArea
				:label="adminCreateReviewInputData.review_part_2.label"
				:id="adminCreateReviewInputData.review_part_2.id"
				:placeholder="
					adminCreateReviewInputData.review_part_2.placeholder
				"
				:v="v.review_pt_2"
				v-model="createReviewState.review_pt_2"
			/>
			<FormTextArea
				:label="adminCreateReviewInputData.review_part_3.label"
				:id="adminCreateReviewInputData.review_part_3.id"
				:placeholder="
					adminCreateReviewInputData.review_part_3.placeholder
				"
				:v="v.review_pt_3"
				v-model="state.review_pt_3"
			/>
		</FormForm>
	</section>
</template>

<style></style>
