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
		v: Object,
		modelValue: String,
	});

	defineEmits(["update:modelValue"]);
</script>

<template>
	<div class="grid gap-2">
		<label :for="id" class="pl-5 text-clr-text">{{ label }}:</label>
		<textarea
			cols="30"
			rows="10"
			type="text"
			:placeholder="v.$error ? v.$errors[0].$message : placeholder"
			:id="id"
			v-bind="$attrs"
			@input="$emit('update:modelValue', $event.target.value)"
			@blur="v.$touch"
			:class="v.$error ? 'create-review-error' : ''"
			class="bg-clr-bg p-3 rounded-lg outline-none focus:outline-clr-text focus:outline-[1px] pl-5 placeholder:opacity-40 resize-y"
		/>
	</div>
</template>

<style></style>
