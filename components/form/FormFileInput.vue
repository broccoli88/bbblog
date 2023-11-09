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

	defineEmits(["update:modelValue"]);

	const fileInput = ref();
	const fileInputPreview = ref();
	const isImgUploaded = ref(false);

	const displayCoverPreview = () => {
		if (!fileInput.value.files && !fileInput.value.files[0]) return;
		const reader = new FileReader();

		reader.onload = (e) => {
			fileInputPreview.value.src = e.target.result;
		};
		reader.readAsDataURL(fileInput.value.files[0]);
		fileInput.value.disabled = true;
		isImgUploaded.value = true;
	};

	const clearImgSelection = () => {
		fileInput.value.disabled = false;
		fileInput.value.value = null;
		fileInputPreview.value.src = "";
		isImgUploaded.value = false;
	};
</script>

<template>
	<div class="grid gap-2 relative w-min">
		<label :for="id" class="pl-5 text-clr-text">{{ label }}:</label>
		<div class="file-input-wrapper">
			<button
				@click="clearImgSelection"
				v-if="isImgUploaded"
				title="clear image selection"
				class="absolute -top-10 -right-10 z-10 p-1 border border-clr-primary rounded-full hover:bg-clr-primary duration-300"
			>
				<Icon name="ic:outline-close" size="30px" />
			</button>
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
