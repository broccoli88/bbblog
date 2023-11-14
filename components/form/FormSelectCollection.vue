<script setup>
	defineProps({
		v: Object,
		genresValidation: Boolean,
	});
	const emits = defineEmits(["update-genre"]);

	const adminStore = useAdminStore();
	const { genres } = storeToRefs(adminStore);

	const genresList = ref([]);
	const selectedGenreList = ref([]);

	onMounted(async () => {
		if (genres.value.length === 0) await adminStore.fetchAllGenres();
		genresList.value = [...genres.value];
	});

	const sortedGenresList = computed(() =>
		genresList.value.sort((a, b) => {
			const nameA = a.genre_name.toLowerCase();
			const nameB = b.genre_name.toLowerCase();

			if (nameA < nameB) return -1;
			if (nameA > nameB) return 1;
			if (nameA === nameB) return 0;
		})
	);

	const selectGenre = (genreObj) => {
		selectedGenreList.value.push(genreObj);
		genresList.value = genresList.value.filter(
			(g) => g.genre_id !== genreObj.genre_id
		);

		emits("update-genre", selectedGenreList.value);
	};

	const deselectGenre = (genreObj) => {
		selectedGenreList.value = selectedGenreList.value.filter(
			(g) => g.genre_id !== genreObj.genre_id
		);
		genresList.value.push(genreObj);
		emits("update-genre", selectedGenreList.value);
	};
</script>
<template>
	<div>
		<label for="genre" class="pl-5 text-clr-text">Genres:</label>
		<section id="genre">
			<div class="p-5 bg-clr-bg rounded-lg flex flex-wrap gap-3 my-5">
				<span
					v-for="genre in sortedGenresList"
					:key="genre.genre_id"
					@click="selectGenre(genre)"
					class="px-5 py-3 bg-clr-secondary rounded-lg cursor-pointer text-sm whitespace-nowrap"
					>{{ genre.genre_name }}</span
				>
			</div>
			<div
				v-if="selectedGenreList.length > 0 || genresValidation"
				:class="genresValidation ? 'create-review-error' : ''"
				class="p-5 bg-clr-bg rounded-lg flex flex-wrap gap-3"
			>
				<p v-if="genresValidation">{{ v.$errors[0].$message }}</p>
				<div
					v-for="genre in selectedGenreList"
					:key="genre.genre_id"
					@click="deselectGenre(genre)"
					class="flex gap-3 px-5 py-3 bg-clr-secondary rounded-lg cursor-pointer text-sm whitespace-nowrap"
				>
					<span>{{ genre.genre_name }} </span>
					<div
						class="w-[20px] aspect-square rounded-full grid place-content-center bg-clr-bg"
					>
						<Icon name="ic:outline-close" size="15px" />
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
