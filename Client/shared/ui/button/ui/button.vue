<script lang="ts" setup>
	withDefaults(
		defineProps<{
			type?: "button" | "submit" | "reset";
			primaryColor?: string;
			secondaryColor?: string;
		}>(),
		{
			type: "button",
			primaryColor: "#030303",
			secondaryColor: "#755cde"
		}
	);
</script>

<template>
	<button
		:style="{
			'--button-primary-color': primaryColor,
			'--button-secondary-color': secondaryColor
		}"
		:type="type"
		class="button"
	>
		<slot />
	</button>
</template>

<style scoped>
	.button {
	}
</style>
