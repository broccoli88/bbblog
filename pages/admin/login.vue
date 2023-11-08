<script setup>
	const adminStore = useAdminStore(),
		{ adminLoginState, isWrongLogin } = storeToRefs(adminStore);

	const adminLoginInputData = reactive({
		email: {
			label: "Email",
			id: "email",
			placeholder: "Enter email",
		},
		pwd: {
			label: "Password",
			id: "pwd",
			placeholder: "Enter password",
		},
	});
</script>

<template>
	<section
		class="grid items-center w-full max-w-screen-sm mx-auto isolate relative"
	>
		<FormForm @submit-login="adminStore.logIn">
			<template #heading> Log In</template>
			<FormInput
				type="email"
				:label="adminLoginInputData.email.label"
				:id="adminLoginInputData.email.id"
				:placeholder="adminLoginInputData.email.placeholder"
				v-model="adminLoginState.email"
			/>
			<FormInput
				type="password"
				:label="adminLoginInputData.pwd.label"
				:id="adminLoginInputData.pwd.id"
				:placeholder="adminLoginInputData.pwd.placeholder"
				v-model="adminLoginState.pwd"
			/>
			<p
				v-if="isWrongLogin"
				class="text-red-800 absolute bottom-3 left-1/2 -translate-x-1/2 text-md"
			>
				Coś pojebałeś/łaś :]
			</p>
		</FormForm>
	</section>
</template>

<style scoped></style>
