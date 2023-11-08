<script setup>
	defineProps({
		heading: {
			type: String,
			default: "Log In",
		},
		btn: {
			type: String,
			default: "Log In",
		},
	});
	defineEmits(["submit-login"]);
</script>

<template>
	<form
		@submit.prevent="$emit('submit-login')"
		class="bg-[#1b1528] p-5 relative"
	>
		<SectionFrame />
		<div class="isolate grid gap-5">
			<h1 class="mb-10 text-center">
				<slot name="heading">{{ heading }}</slot>
			</h1>
			<slot></slot>
			<AppButton class="my-10 text-3xl"> {{ btn }} </AppButton>
		</div>
	</form>
</template>

<style></style>
