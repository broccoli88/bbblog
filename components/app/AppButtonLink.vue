<script setup></script>

<template>
	<button class="btn relative bg-clr-bg border border-clr-primary grid">
		<NuxtLink to="/" class="py-[0.2em] px-[1.5em]">
			<slot> Click </slot>
		</NuxtLink>
	</button>
</template>
