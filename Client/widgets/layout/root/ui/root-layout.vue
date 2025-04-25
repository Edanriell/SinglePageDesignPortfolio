<script lang="ts" setup>
	import { Header } from "@widgets/header/ui";
</script>

<template>
	<Header />
	<main>
		<h1>Layout</h1>
		<slot />
	</main>
	<footer>
		<h2>Footer</h2>
	</footer>
</template>
