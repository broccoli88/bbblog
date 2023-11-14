<script setup>
	const formStore = useFormStore();
	const { adminLoginState, isLoginWrong } = storeToRefs(formStore);

	definePageMeta({
		layout: "admin",
	});

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
		<AppBackBtn />
		<FormForm @submit-login="formStore.logIn">
			<template #heading> Log In</template>

			<FormLoginInput
				type="email"
				:label="adminLoginInputData.email.label"
				:id="adminLoginInputData.email.id"
				:placeholder="adminLoginInputData.email.placeholder"
				v-model="adminLoginState.email"
			/>

			<FormLoginInput
				type="password"
				:label="adminLoginInputData.pwd.label"
				:id="adminLoginInputData.pwd.id"
				:placeholder="adminLoginInputData.pwd.placeholder"
				v-model="adminLoginState.pwd"
			/>
		</FormForm>
		<p v-if="isLoginWrong" class="text-clr-error text-center mt-5">
			Coś pojebałeś/łaś :]
		</p>
	</section>
</template>

<style scoped></style>
