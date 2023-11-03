<script setup>
	import TransitionScale from "./transitions/TransitionScale.vue";
	import categories from "@/data/search-categories.json";

	const isSearchBar = ref(false);
	const color = computed(() => (isSearchBar.value ? "white" : ""));
	const toggleSearchBarFocus = () => (isSearchBar.value = !isSearchBar.value);

	const isCategoriesBar = ref(false);
	const toggleCategoriesBar = () =>
		(isCategoriesBar.value = !isCategoriesBar.value);
</script>

<template>
	<section
		class="wrapper search flex justify-between items-center py-3 px-[2vw] bg-clr-bg relative border border-clr-primary"
	>
		<nav
			class="search__nav"
			:class="{ 'categories-bar-active': isCategoriesBar }"
		>
			<ul class="search__list">
				<li
					v-for="category in categories"
					:key="category.name"
					class="grid"
				>
					<NuxtLink
						:to="category.link"
						class="hover:text-white transition-colors duration-300 px-3 py-2"
					>
						{{ category.name }}</NuxtLink
					>
				</li>
			</ul>
		</nav>
		<button
			class="flex items-center md:hidden"
			@click="toggleCategoriesBar"
		>
			<TransitionScale>
				<Icon
					name="bi:chevron-bar-contract"
					size="30px"
					v-if="isCategoriesBar"
				/>
				<Icon name="bi:chevron-bar-expand" size="30px" v-else />
			</TransitionScale>
		</button>
		<form
			class="search__search-bar bg-clr-input px-4 py-2 w-full max-w-[300px] rounded-lg flex items-center gap-3"
		>
			<button class="flex items-center">
				<Icon
					name="ph:magnifying-glass-light"
					size="25px"
					:color="color"
				/>
			</button>
			<input
				type="text"
				class="bg-transparent w-full outline-none"
				@focus="toggleSearchBarFocus"
				@blur="toggleSearchBarFocus"
			/>
		</form>
	</section>
</template>

<style scoped>
	.search::before {
		border: 1px solid var(--clr-primary);
	}

	.search::before,
	.search::after {
		content: "";
		position: absolute;
		pointer-events: none;
	}

	.search::before {
		rotate: 0.2deg;
		inset: 0;
	}

	.search::after {
		inset: -5px;
		z-index: -1;
		opacity: 1;
		background-image: conic-gradient(#8368be, #457474, #10c6eb);
		filter: blur(20px) opacity(0.6);
	}

	.search__list {
		display: flex;
		gap: 20px;
	}

	@media (max-width: 768px) {
		.search__nav {
			display: grid;
			grid-template-rows: 0fr;

			position: absolute;
			top: 100%;
			left: 0;
			width: 100%;
			z-index: 2;

			background-color: var(--clr-input);
			transition: 0.3s all ease-out;
		}

		.categories-bar-active {
			grid-template-rows: 1fr;
		}

		.search__list {
			flex-direction: column;
			gap: 0;
			text-align: center;
			overflow: hidden;
			position: relative;
		}
	}
</style>
