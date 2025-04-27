<script lang="ts" setup>
	import { Logotype } from "@shared/ui/logotype/ui";
	import { Link } from "@shared/ui/link/ui";
</script>

<template>
	<header class="header">
		<Logotype />
		<Link>Free Consultation</Link>
	</header>
</template>

<style>
	.header {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 16rem;
		margin: 16rem 0;

		@media (width >= 768px) {
			padding: 0 34rem;
			margin: 40rem 0;
		}

		@media (width >= 1440px) {
			padding: 0 165rem;
			margin: 34rem 0;
		}
	}
</style>
