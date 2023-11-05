<script setup></script>
<template>
	<div class="app-border border border-clr-primary absolute inset-0"></div>
</template>

<style scoped>
	.app-border::before {
		content: "";
		position: absolute;
		inset: 0;
		border: 1px solid var(--clr-primary);
		rotate: 0.2deg;
	}
</style>
