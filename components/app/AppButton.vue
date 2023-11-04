<script setup></script>

<template>
	<button
		class="btn relative bg-clr-bg w-full border border-clr-primary py-[0.2em]"
	>
		<slot> Click </slot>
	</button>
</template>

<style scoped>
	.btn {
		--_rotate: var(--rotate, 0.2deg);
		--_inset: var(--inset, -5px);
	}

	.btn,
	.btn::after {
		transition: 0.3s all ease-out;
	}

	.btn:hover,
	.btn:focus,
	.btn:hover::after,
	.btn:focus::after {
		color: white;
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
