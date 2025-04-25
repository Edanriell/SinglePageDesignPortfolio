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
		margin: 16rem;

		@media (width >= 768px) {
			margin: 34rem 40rem;
		}

		@media (width >= 1440px) {
			margin: 34rem 165rem;
		}
	}
</style>
