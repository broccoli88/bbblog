<script setup>
	defineProps({
		src: {
			type: [String, Object],
			default: "/",
		},
		title: {
			type: String,
			default: "link",
		},
	});
</script>

<template>
	<button>
		<NuxtLink
			:to="src"
			:title="title"
			class="btn relative bg-clr-bg border border-clr-primary grid whitespace-nowrap py-[0.2em] px-[1.5em] font-wisp"
		>
			<slot> Click </slot>
		</NuxtLink>
	</button>
</template>

<style>
	.btn {
		--_rotate: var(--rotate, 0.2deg);
		--_inset: var(--inset, -5px);
	}

	.btn,
	.btn::after {
		transition: 0.3s all ease-out;
	}

	.btn:hover,
	.btn:focus {
		color: var(--clr-primary);
	}

	.btn:hover::after,
	.btn:focus::after {
		opacity: 1;
	}

	.btn::before {
		border: 1px solid var(--clr-primary);
	}

	.btn::before,
	.btn::after {
		content: "";
		position: absolute;
		pointer-events: none;
	}

	.btn::before {
		rotate: var(--_rotate);
		inset: 0;
		/* z-index: 1; */
	}

	.btn::after {
		inset: var(--_inset);
		z-index: -1;
		opacity: 0;
		background-image: conic-gradient(#8368be, #457474, #10c6eb);
		filter: blur(20px) opacity(0.6);
	}
</style>
