<script setup></script>

<template>
	<div class="app-container">
		<TheNavbar />
		<slot />
		<TheFooter />
	</div>
</template>

<style scoped>
	.app-container {
		display: grid;
		grid-template-rows: 1fr min-content;
		min-height: 100vh;
	}
</style>
