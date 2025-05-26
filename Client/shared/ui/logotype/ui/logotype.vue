<script lang="ts" setup>
	withDefaults(
		defineProps<{
			size?: "small" | "large";
			backgroundColor?: string;
			logotypeColor?: string;
			href?: string;
		}>(),
		{
			size: "large",
			backgroundColor: "#030303",
			logotypeColor: "#FFF7F0",
			href: "#"
		}
	);
</script>

<template>
	<a :href="href">
		<svg
			v-if="size === 'small'"
			fill="none"
			height="48"
			style="display: block"
			viewBox="0 0 48 48"
			width="48"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect :fill="backgroundColor" height="48" width="48" />
			<circle :stroke="logotypeColor" cx="24" cy="24" r="10.5" stroke-width="3" />
		</svg>
		<svg
			v-else
			fill="none"
			height="64"
			style="display: block"
			viewBox="0 0 64 64"
			width="64"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect :fill="backgroundColor" height="64" width="64" />
			<circle :stroke="logotypeColor" cx="32" cy="32" r="14" stroke-width="4" />
		</svg>
	</a>
</template>
