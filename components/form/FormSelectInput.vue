<script setup>
	defineProps({
		label: {
			type: String,
			default: "",
		},
		id: {
			type: String,
			default: "",
		},

		// modelValue: String,
	});

	const adminStore = useAdminStore();
	const { genres } = storeToRefs(adminStore);
</script>

<template>
	<div class="grid gap-2">
		<label :for="id" class="pl-5 text-clr-text">{{ label }}:</label>
		<select
			name="genres"
			:id="id"
			v-bind="$attrs"
			class="bg-clr-bg py-3 rounded-lg outline-none focus:outline-clr-text focus:outline-[1px] px-5 placeholder:opacity-40 shadow-2xl"
			v-if="genres.length > 0"
		>
			<option value="select genre" disabled selected>Select genre</option>
			<option
				:value="genre"
				v-for="genre in genres"
				:key="genre.genre_id"
			>
				{{ genre.genre_name }}
			</option>
		</select>
		<p></p>
	</div>
</template>

<style></style>
