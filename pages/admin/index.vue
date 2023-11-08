<script setup>
	import AdminCreateReview from "~/components/admin/AdminCreateReview.vue";

	definePageMeta({
		layout: "admin",
	});

	const currentComponent = ref("AdminCreateReview");
	const components = ref({
		AdminCreateReview,
	});
</script>

<template>
	<main class="grid grid-cols-[max-content_1fr] min-h-screen isolate">
		<aside
			class="admin-nav relative bg-clr-bg-lighter p-10 grid grid-rows-[100px_1fr]"
		>
			<p class="font-wisp text-5xl">Admin Panel</p>
			<nav class="h-[calc(100vh-140px)] shadow-xl">
				<li>
					<button class="hover:text-clr-primary duration-300">
						Create review
					</button>
				</li>
			</nav>
		</aside>
		<section class="py-10 mx-10">
			<component :is="components[currentComponent]"></component>
		</section>
	</main>
</template>

<style scoped>
	.admin-nav::after {
		content: "";
		position: absolute;
		pointer-events: none;
		inset: 0;
		z-index: -1;
		opacity: 1;
		background-image: conic-gradient(#8368be, #457474, #10c6eb);
		filter: blur(20px) opacity(0.6);
	}
</style>
