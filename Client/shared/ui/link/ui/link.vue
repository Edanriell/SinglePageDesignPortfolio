<script lang="ts" setup>
	const props = withDefaults(
		defineProps<{
			href?: string;
			shape?: "pill" | "circular";
			primaryColor?: string;
			secondaryColor?: string;
			textPrimaryColor?: string;
			textSecondaryColor?: string;
		}>(),
		{
			href: "#",
			shape: "pill",
			primaryColor: "#030303",
			secondaryColor: "#755cde",
			textPrimaryColor: "#fff7f0",
			textSecondaryColor: "#fff7f0"
		}
	);

	const linkClasses = computed(() => {
		return {
			link: true,
			"link__shape--pill": props.shape === "pill",
			"link__shape--circular": props.shape === "circular"
		};
	});
</script>

<template>
	<NuxtLink
		:class="linkClasses"
		:style="{
			'--link-primary-color': primaryColor,
			'--link-secondary-color': secondaryColor,
			'--text-primary-color': textPrimaryColor,
			'--text-secondary-color': textSecondaryColor
		}"
		:to="href"
	>
		<slot />
	</NuxtLink>
</template>

<style scoped>
	.link {
		font-family: var(--font-family);
		font-weight: 700;
		font-size: 14rem;
		line-height: 200%;
		background: var(--link-primary-color);
		color: var(--text-primary-color);
		text-transform: capitalize;

		@media (width >= 768px) {
			font-size: 16rem;
			line-height: 175%;
		}

		&:hover {
			background: var(--link-secondary-color);
			color: var(--text-secondary-color);
		}
	}

	.link__shape--pill {
		border-radius: 28rem;
		padding: 8rem 28rem 8rem 27rem;
		min-height: 44rem;

		@media (width >= 768px) {
			min-height: 56rem;
			padding: 14rem 45rem 14rem 45rem;
		}
	}

	.link__shape--circular {
		border-radius: 50%;
		padding: 24rem 25rem 24rem 25rem;
	}
</style>
