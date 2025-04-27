<script lang="ts" setup>
	import { HeaderWidget } from "@widgets/header/ui";
	import { FooterWidget } from "@widgets/footer/ui";
	import { HeroWidget } from "@widgets/hero/ui";

	definePageMeta({
		layout: "default-ui-layout",
		header: HeaderWidget,
		footer: FooterWidget
	});
</script>

<template>
	<HeroWidget />
</template>
