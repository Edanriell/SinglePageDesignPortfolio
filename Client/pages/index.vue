<script lang="ts" setup>
	import { HeaderWidget } from "@widgets/header/ui";
	import { FooterWidget } from "@widgets/footer/ui";

	definePageMeta({
		layout: "default-ui-layout",
		header: HeaderWidget,
		footer: FooterWidget
	});
</script>

<template>
	<h1>Main Page</h1>
</template>
