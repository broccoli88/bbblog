<script setup>
	defineEmits(["change-panel"]);
	const adminStore = useAdminStore();
</script>

<template>
	<aside
		class="admin-nav bg-clr-bg-lighter p-10 grid grid-rows-[100px_1fr_min-content] h-screen relative"
	>
		<p class="font-wisp text-5xl">Admin Panel</p>
		<nav class="shadow-xl isolate flex flex-col gap-5">
			<li>
				<button
					@click="$emit('change-panel', 'AdminCreateReview')"
					class="hover:text-clr-primary duration-300"
				>
					Create review
				</button>
			</li>
			<li>
				<button
					@click="$emit('change-panel', 'AdminManageReviews')"
					class="hover:text-clr-primary duration-300"
				>
					Manage reviews
				</button>
			</li>
		</nav>

		<div class="grid gap-3">
			<AppButton @click="adminStore.logOut">Log out</AppButton>
			<AppButton @click="navigateTo({ name: 'index' })"
				>Go to main</AppButton
			>
		</div>
	</aside>
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
