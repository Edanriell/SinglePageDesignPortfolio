<script lang="ts" setup>
	defineProps<{
		title: string;
		text: string;
	}>();
</script>

<template>
	<section class="hero">
		<h1 class="hero__title">{{ title }}</h1>
		<p class="hero__text">
			{{ text }}
		</p>
	</section>
</template>

<style scoped>
	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 16rem;
		margin-left: 16rem;
		margin-right: 16rem;
		padding-top: 16rem;
		padding-bottom: 16rem;

		@media (width >= 768px) {
			margin-left: 40rem;
			margin-right: 40rem;
			padding-top: 30rem;
			padding-bottom: 32rem;
			gap: 27rem;
		}

		@media (width >= 1440px) {
			margin-left: 165rem;
			margin-right: 165rem;
			padding-top: 32rem;
			padding-bottom: 40rem;
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
