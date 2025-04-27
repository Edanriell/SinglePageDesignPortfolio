<script lang="ts" setup></script>

<template>
	<section class="hero">
		<h1 class="hero__title">Design solutions made easy</h1>
		<p class="hero__text">
			With over ten years of experience in various design disciplines, I’m your one-stop shop
			for your design needs.
		</p>
	</section>
</template>

<style scoped>
	.hero {
		padding: 0 16rem 0 16rem;
		margin: 16rem 0 16rem 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 16rem;

		@media (width >= 768px) {
			padding: 40rem 0 40rem 0;
			margin: 0 30rem 0 32rem;
			gap: 27rem;
		}

		@media (width >= 1440px) {
			padding: 165rem 0 165rem 0;
			margin: 0 32rem 0 40rem;
			gap: 23rem;
		}
	}

	.hero__title {
		font-family: var(--font-family);
		font-weight: 700;
		font-size: 36rem;
		text-align: center;
		color: var(--black);

		@media (width >= 768px) {
			font-size: 44rem;
			max-width: 690rem;
		}

		@media (width >= 1440px) {
			font-size: 56rem;
			max-width: 751rem;
		}
	}

	.hero__text {
		font-family: var(--font-family);
		font-weight: 500;
		font-size: 16rem;
		line-height: 162%;
		text-align: center;
		color: var(--medium-brown);

		@media (width >= 768px) {
			font-size: 18rem;
			line-height: 156%;
			max-width: 573rem;
		}

		@media (width >= 1440px) {
			max-width: 730rem;
		}
	}
</style>
