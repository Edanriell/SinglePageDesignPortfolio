<script lang="ts" setup>
	import { Logotype } from "@shared/ui/logotype/ui";
	import { Link } from "@shared/ui/link/ui";
	import { useWindowSize } from "@shared/lib/composables";

	const windowSize = useWindowSize();
</script>

<template>
	<header class="header">
		<ClientOnly>
			<Logotype v-if="windowSize.width && windowSize.width >= 768" size="large" />
			<Logotype v-else size="small" />
			<Link>Free Consultation</Link>
		</ClientOnly>
	</header>
</template>

<style scoped>
	.header {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-left: 16rem;
		margin-right: 16rem;
		padding-top: 16rem;
		padding-bottom: 16rem;

		@media (width >= 768px) {
			margin-left: 40rem;
			margin-right: 40rem;
			padding-top: 34rem;
			padding-bottom: 34rem;
		}

		@media (width >= 1440px) {
			margin-left: 165rem;
			margin-right: 165rem;
			padding-top: 34rem;
			padding-bottom: 34rem;
		}
	}
</style>
