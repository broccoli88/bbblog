<script setup></script>

<template>
	<Transition name="scale" mode="out-in">
		<slot />
	</Transition>
</template>

<style scoped>
	.scale-enter-from,
	.scale-leave-to {
		scale: 0.3;
	}

	.scale-enter-active,
	.scale-leave-active {
		transition: 0.3s all ease-out;
	}
</style>
