<script lang="ts" setup>
	import { Link } from "@shared/ui/link/ui";
</script>

<template>
	<section class="error">
		<div class="error__wrapper">
			<h1 class="error__title">404</h1>
			<h2 class="error__subtitle">Page Not Found</h2>
			<p class="error__description">
				Sorry, the page you're looking for doesn't exist or has been moved.
			</p>
			<ClientOnly>
				<Link href="/">Back to Home</Link>
			</ClientOnly>
		</div>
	</section>
</template>

<style scoped>
	.error {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 80vh;
		text-align: center;
		padding: 2rem;
	}

	.error__wrapper {
		max-width: 600px;
	}

	.error__title {
		font-size: 52rem;
		font-weight: 700;
		margin: 0;
		line-height: 1;
		background: linear-gradient(135deg, #755bb4, #ff8aae);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.error__subtitle {
		font-size: 28rem;
		margin: 6rem 0;
	}

	.error__description {
		font-size: 18rem;
		margin-bottom: 30rem;
		color: #666;
	}
</style>
