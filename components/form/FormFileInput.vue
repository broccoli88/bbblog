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
		placeholder: {
			type: String,
			default: "",
		},
		modelValue: String,
	});

	const emits = defineEmits(["update-cover"]);

	const formStore = useFormStore();
	const { cover } = storeToRefs(formStore);

	const fileInput = ref();
	const fileInputPreview = ref();
	const isCoverSelected = ref(false);

	const displayCoverPreview = () => {
		const file = fileInput.value.files;

		if (!file && !file[0]) return;

		const reader = new FileReader();

		reader.onload = (e) => {
			fileInputPreview.value.src = e.target.result;
		};
		reader.readAsDataURL(fileInput.value.files[0]);
		isCoverSelected.value = true;

		const imgPath = `covers/${file[0].name}`;
		cover.value = file;
		emits("update-cover", imgPath);
	};

	const clearCoverSelection = () => {
		fileInput.value.value = null;
		fileInputPreview.value.src = "";
		cover.value = null;
		isCoverSelected.value = false;
	};
</script>

<template>
	<div class="grid gap-2 relative w-min">
		<label :for="id" class="pl-5 text-clr-text">{{ label }}:</label>
		<div class="file-input-wrapper">
			<div
				type="button"
				@click="clearCoverSelection"
				v-if="isCoverSelected"
				title="clear image selection"
				class="absolute -top-7 -right-7 z-10 w-7 aspect-square border border-clr-primary rounded-full hover:bg-clr-primary duration-300 grid place-content-center"
			>
				<Icon name="ic:outline-close" size="20px" />
			</div>
			<img
				src=""
				alt=""
				class="file-input-preview"
				ref="fileInputPreview"
			/>
			<input
				type="file"
				accept="image/*"
				:id="id"
				:disabled="isCoverSelected"
				class="file-input"
				@change="displayCoverPreview"
				ref="fileInput"
			/>
		</div>
	</div>
</template>

<style scoped>
	.file-input-wrapper {
		display: flex;
		flex-direction: column;
		width: 300px;
		aspect-ratio: 2 / 3;

		border: 1px solid var(--clr-primary);
		position: relative;
	}

	.file-input-preview {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;

		pointer-events: none;
	}

	.file-input::file-selector-button,
	.file-input::-webkit-file-upload-button {
		display: none;
	}

	.file-input {
		width: 100%;
		height: 100%;
		opacity: 1;
	}
</style>
