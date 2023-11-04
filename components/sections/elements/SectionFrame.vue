<script setup></script>

<template>
	<div
		class="frame absolute inset-0 pointer-events-none border border-clr-primary"
	></div>
</template>

<style scoped>
	.frame {
		--_rotate: var(--rotate, 0.2deg);
		--_inset: var(--inset, -5px);
	}

	.frame::before {
		border: 1px solid var(--clr-primary);
	}

	.frame::before,
	.frame::after {
		content: "";
		position: absolute;
		pointer-events: none;
	}

	.frame::before {
		rotate: var(--_rotate);
		inset: 0;
		/* z-index: 1; */
	}

	.frame::after {
		inset: var(--_inset);
		z-index: -1;
		opacity: 1;
		background-image: conic-gradient(#8368be, #457474, #10c6eb);
		filter: blur(20px) opacity(0.6);
	}
</style>
