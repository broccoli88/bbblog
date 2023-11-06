<script setup>
	import navLinks from "../data/nav-links.json";
</script>

<template>
	<footer class="p-5">
		<div class="wrapper footer__wrapper">
			<NuxtLink to="/" class="text-3xl self-center">3B</NuxtLink>
			<nav class="">
				<li v-for="link in navLinks" :key="link.name">
					<NuxtLink
						:to="link.link"
						class="hover:text-clr-primary duration-300 transition-colors font-wisp"
					>
						{{ link.name }}
					</NuxtLink>
				</li>
			</nav>
		</div>
	</footer>
</template>

<style scoped>
	.footer__wrapper .router-link-exact-active {
		color: var(--clr-primary);
		transition: 0.3s all ease-out;
	}
	.footer__wrapper {
		display: grid;
		grid-template-columns: min-content 1fr;
		gap: 40px;
	}
</style>
