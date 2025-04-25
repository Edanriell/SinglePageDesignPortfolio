<script lang="ts" setup>
	withDefaults(
		defineProps<{
			href?: string;
			primaryColor?: string;
			secondaryColor?: string;
			textPrimaryColor?: string;
			textSecondaryColor?: string;
		}>(),
		{
			href: "#",
			primaryColor: "#030303",
			secondaryColor: "#755cde",
			textPrimaryColor: "#fff7f0",
			textSecondaryColor: "#fff7f0"
		}
	);
</script>

<template>
	<NuxtLink
		:style="{
			'--link-primary-color': primaryColor,
			'--link-secondary-color': secondaryColor,
			'--text-primary-color': textPrimaryColor,
			'--text-secondary-color': textSecondaryColor
		}"
		:to="href"
		class="link"
	>
		<slot />
	</NuxtLink>
</template>

<style scoped>
	.link {
		border-radius: 28rem;
		margin: 8rem 28rem 8rem 27rem;
		font-family: var(--font-family);
		font-weight: 700;
		font-size: 14rem;
		line-height: 200%;
		background: var(--link-primary-color);
		min-height: 44rem;
		color: var(--text-primary-color);

		@media (width >= 768px) {
			min-height: 56rem;
			margin: 14rem 45rem 14rem 45rem;
			font-size: 16rem;
			line-height: 175%;
		}

		&:hover {
			background: var(--link-secondary-color);
			color: var(--text-secondary-color);
		}
	}
</style>
