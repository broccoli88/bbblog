<script setup>
	import navLinks from "../data/nav-links.json";
</script>

<template>
	<footer class="footer">
		<div class="wrapper footer__wrapper">
			<NuxtLink to="/" class="text-3xl self-center">3B</NuxtLink>
			<nav class="">
				<li v-for="link in navLinks" :key="link.name">
					<NuxtLink
						:to="link.link"
						class="hover:text-clr-primary duration-300 transition-colors"
					>
						{{ link.name }}
					</NuxtLink>
				</li>
			</nav>
		</div>
	</footer>
</template>

<style scoped>
	.footer {
		--inset: 5px;

		border-top: 1px solid var(--clr-primary);
		position: relative;
		padding: 20px;
		background-color: var(--clr-input);
		isolation: isolate;
		margin-top: 50px;
	}

	.footer::before {
		content: "";
		position: absolute;
		inset: 0;
		border-top: 1px solid var(--clr-primary);
		rotate: 0.2deg;
		z-index: -1;
	}

	.footer::after {
		content: "";
		position: absolute;
		pointer-events: none;
	}

	.footer::after {
		inset: var(--_inset);
		z-index: -1;
		opacity: 1;
		background-image: conic-gradient(#8368be, #457474, #10c6eb);
		filter: blur(20px) opacity(0.6);
	}

	.footer__wrapper {
		display: grid;
		grid-template-columns: min-content 1fr;
		gap: 40px;
	}
</style>
