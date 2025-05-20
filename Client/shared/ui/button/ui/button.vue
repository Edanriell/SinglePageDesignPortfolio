<script lang="ts" setup>
	const props = withDefaults(
		defineProps<{
			type?: "button" | "submit" | "reset";
			shape?: "pill" | "circular";
			primaryColor?: string;
			secondaryColor?: string;
			textPrimaryColor?: string;
			textSecondaryColor?: string;
		}>(),
		{
			type: "button",
			shape: "pill",
			primaryColor: "#030303",
			secondaryColor: "#755cde",
			textPrimaryColor: "#fff7f0",
			textSecondaryColor: "#fff7f0"
		}
	);

	const buttonClasses = computed(() => {
		return {
			button: true,
			"button__shape--pill": props.shape === "pill",
			"button__shape--circular": props.shape === "circular"
		};
	});
</script>

<template>
	<button
		:class="buttonClasses"
		:style="{
			'--button-primary-color': primaryColor,
			'--button-secondary-color': secondaryColor,
			'--text-primary-color': textPrimaryColor,
			'--text-secondary-color': textSecondaryColor
		}"
		:type="type"
	>
		<slot />
	</button>
</template>

<style scoped>
	.button {
		font-family: var(--font-family);
		font-weight: 700;
		font-size: 14rem;
		line-height: 200%;
		background: var(--button-primary-color);
		color: var(--text-primary-color);
		text-transform: capitalize;

		@media (width >= 768px) {
			font-size: 16rem;
			line-height: 175%;
		}

		&:hover {
			background: var(--button-secondary-color);
			color: var(--text-secondary-color);
		}
	}

	.button__shape--pill {
		border-radius: 28rem;
		padding: 8rem 28rem 8rem 27rem;
		min-height: 44rem;

		@media (width >= 768px) {
			min-height: 56rem;
			padding: 14rem 45rem 14rem 45rem;
		}
	}

	.button__shape--circular {
		border-radius: 50%;
		padding: 24rem 25rem 24rem 25rem;
	}
</style>
