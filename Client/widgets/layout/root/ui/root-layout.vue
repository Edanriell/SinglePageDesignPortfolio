<script lang="ts" setup>
	import { Header } from "@widgets/header/ui";
	import { Footer } from "@widgets/footer/ui";
</script>

<template>
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</template>
