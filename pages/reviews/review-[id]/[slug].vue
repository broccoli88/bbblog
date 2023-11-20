<script setup>
	definePageMeta({
		middleware: ["get-current-review"],
	});

	const adminStore = useAdminStore();
	const { currentReview, currentReviewGenres } = storeToRefs(adminStore);
</script>

<template>
	<main class="wrapper">
		<AppBackBtn />
		<div class="grid gap-8 md:grid-cols-[40%,_1fr]">
			<div class="flex flex-col gap-3 md:gap-11">
				<NuxtImg :src="currentReview.cover_url" class="md:order-2" />
				<div class="flex flex-col gap-2 md:order-1">
					<h2>{{ currentReview.book_title }}</h2>
					<h3 class="mb-6">{{ currentReview.book_subtitle }}</h3>
					<p>Author: {{ currentReview.author }}</p>
					<p>Release date: {{ currentReview.published_at }}</p>
					<div class="flex gap-2 flex-wrap">
						<p>Genres:</p>
						<p
							class="genres"
							v-for="genre in currentReviewGenres"
							:key="genre"
						>
							{{ genre }}
						</p>
					</div>
				</div>
			</div>
			<div class="grid gap-3">
				<p v-if="currentReview.review_pt_1">
					{{ currentReview.review_pt_1 }}
				</p>
				<p v-if="currentReview.review_pt_2">
					{{ currentReview.review_pt_2 }}
				</p>
				<p v-if="currentReview.review_pt_3">
					{{ currentReview.review_pt_3 }}
				</p>
			</div>
		</div>
	</main>
</template>

<style scoped>
	.genres::after {
		content: ",";
	}

	.genres:last-of-type::after {
		content: "";
	}
</style>
