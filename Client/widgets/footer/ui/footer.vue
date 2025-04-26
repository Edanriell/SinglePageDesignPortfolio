<script lang="ts" setup>
	import { Logotype } from "@shared/ui/logotype/ui";
	import { Link } from "@shared/ui/link/ui";
</script>

<template>
	<footer class="footer">
		<Logotype />
		<Link>Free Consultation</Link>
	</footer>
</template>

<style>
	.footer {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 40rem 16rem 32rem 16rem;

		@media (width >= 768px) {
			margin: 56rem 40rem;
		}

		@media (width >= 1440px) {
			margin: 56rem 165rem 64rem 165rem;
		}
	}
</style>
