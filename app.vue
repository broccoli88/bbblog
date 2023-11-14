<script setup>
	const formStore = useFormStore();
	const { pending } = storeToRefs(formStore);
</script>
<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
		<Teleport to="body">
			<TheLoader v-if="pending" />
		</Teleport>
	</div>
</template>
