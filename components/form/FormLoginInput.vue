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
</script>

<template>
	<div class="grid gap-2">
		<label :for="id" class="pl-5 text-clr-text">{{ label }}:</label>
		<input
			type="text"
			:placeholder="label"
			:id="id"
			v-bind="$attrs"
			@input.trim="$emit('update:modelValue', $event.target.value)"
			class="bg-clr-bg p-3 rounded-lg outline-none focus:outline-clr-text focus:outline-[1px] pl-5 placeholder:opacity-40 shadow-2xl"
		/>
	</div>
</template>

<style></style>
