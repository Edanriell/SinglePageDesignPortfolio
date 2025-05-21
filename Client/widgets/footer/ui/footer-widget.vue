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
		margin-left: 16rem;
		margin-right: 16rem;
		padding-top: 20rem;
		padding-bottom: 32rem;

		@media (width >= 768px) {
			margin-left: 40rem;
			margin-right: 40rem;
			padding-top: 28rem;
			padding-bottom: 56rem;
		}

		@media (width >= 1440px) {
			margin-left: 165rem;
			margin-right: 165rem;
			padding-top: 28rem;
			padding-bottom: 64rem;
		}
	}
</style>
