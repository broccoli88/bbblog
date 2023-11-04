<script setup>
	import navLinks from "@/data/nav-links.json";
	import usePreventBodyOverflow from "~/utils/usePreventBodyOverflow";

	const isMobileMenu = ref(false);
	const toggleMenu = () => (isMobileMenu.value = !isMobileMenu.value);

	watch(isMobileMenu, () => usePreventBodyOverflow(isMobileMenu.value));

	// Observer

	const navRef = ref();

	onMounted(() => {
		const { navObserver, observedEl } = useObserveNav(navRef.value);
		navObserver.observe(observedEl);
	});
</script>

<template>
	<header
		class="py-5 fixed top-0 left-0 w-full z-[999] transition-colors duration-300"
		ref="navRef"
	>
		<div
			class="wrapper nav__wrapper flex flex-wrap justify-between gap-5 max-md:px-5 isolate relative"
		>
			<NuxtLink to="/" class="text-3xl">BookBestiary</NuxtLink>
			<button class="md:hidden" @click.capture="toggleMenu">
				<TransitionScale>
					<Icon
						name="ion:ios-bookmarks"
						size="30px"
						v-if="isMobileMenu"
					/>
					<Icon name="ion:md-bookmarks" size="30px" v-else />
				</TransitionScale>
			</button>
			<nav
				class="nav__nav"
				:class="{ 'mobile-menu-active': isMobileMenu }"
			>
				<li class="nav__item" v-for="link in navLinks" :key="link.name">
					<NuxtLink :to="link.link" class="nav__link">
						{{ link.name }}</NuxtLink
					>
				</li>
			</nav>
		</div>
	</header>
</template>

<style scoped>
	.nav-bg {
		background-color: hsl(259, 35%, 9%, 0.9);
		box-shadow: 0 0 25px hsl(190, 67%, 47%, 0.4);
	}

	.nav__nav {
		--_transition: 0.3s all ease-out;

		display: flex;
		gap: 25px;
	}

	.nav__item {
		position: relative;
		list-style: none;
	}

	.nav__item,
	.nav__item::before {
		border: 1px solid var(--clr-primary);
	}

	.nav__item::before,
	.nav__item::after {
		content: "";
		position: absolute;
		pointer-events: none;
	}

	.nav__item::before {
		rotate: 2deg;
		inset: 0;
	}

	.nav__item::after {
		inset: -5px;
		z-index: -1;
		opacity: 0;
		background-image: conic-gradient(#8368be, #457474, #10c6eb);
		filter: blur(20px) opacity(0.6);
		transition: var(--_transition);
	}

	.nav__item:hover::after,
	.nav__item:focus::after {
		opacity: 1;
	}

	.nav__link {
		padding: 0.5em 1em;
		transition: var(--_transition);
		font-size: var(--fsd-link);
		white-space: nowrap;
	}

	.nav__link:hover {
		color: var(--clr-primary);
	}

	@media (max-width: 768px) {
		.nav__nav {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			clip-path: circle(0% at 100% 50%);

			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100vh;
			z-index: -1;

			transition: var(--_transition);
			background-color: var(--clr-bg2);
		}

		.mobile-menu-active {
			clip-path: circle(111.6% at 100% 50%);
		}

		.nav__link {
			font-size: var(--fsm-link);
		}
	}
</style>
