<script setup>
	import AdminCreateReview from "~/components/admin/AdminCreateReview.vue";
	import AdminManageReviews from "~/components/admin/AdminManageReviews.vue";

	definePageMeta({
		layout: "admin",
		middleware: ["auth"],
	});

	const currentComponent = ref("AdminCreateReview");
	const components = {
		AdminCreateReview,
		AdminManageReviews,
	};

	const changePanel = (selectedPanel) =>
		(currentComponent.value = selectedPanel);
</script>

<template>
	<main class="isolate grid grid-cols-[max-content_1fr] min-h-screen">
		<AdminAsideNav @change-panel="changePanel" />

		<section class="py-10 mx-10">
			<component :is="components[currentComponent]"></component>
		</section>
	</main>
</template>

<style scoped></style>
