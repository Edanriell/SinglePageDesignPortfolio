<script lang="ts" setup>
	import { Link } from "@shared/ui/link/ui";
</script>

<template>
	<section class="call-booking">
		<div class="call-booking__wrapper">
			<div class="call-booking__content">
				<h2 class="call-booking__title">Book a call with me</h2>
				<p class="call-booking__text">
					I’d love to have a chat to see how I can help you. The best first step is for us
					to discuss your project during a free consultation. Then we can move forward
					from there.
				</p>
			</div>
			<Link
				:href="linkHref"
				class="call-booking__link"
				primaryColor="#eb7565"
				secondaryColor="#f6a560"
				>Free Consultation</Link
			>
		</div>
	</section>
</template>

<style scoped>
	.call-booking {
		padding-top: 50rem;
		padding-bottom: 20rem;
		margin: 0 16rem;

		@media (width >= 768px) {
			padding-top: 60rem;
			padding-bottom: 28rem;
			margin: 0 40rem;
		}

		@media (width >= 1440px) {
			padding-top: 44rem;
			padding-bottom: 28rem;
			margin: 0 165rem;
		}
	}

	.call-booking__wrapper {
		border-radius: 10rem;
		background: var(--black);
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 24rem;
		padding: 49rem 24rem 48rem 24rem;

		@media (width >= 768px) {
			row-gap: 26rem;
			padding: 56rem 75rem 75rem 64rem;
		}

		@media (width >= 1440px) {
			row-gap: 25rem;
			padding: 81rem 95rem 80rem 65rem;
			flex-direction: row;
			justify-content: space-between;
		}
	}

	.call-booking__content {
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 24rem;

		@media (width >= 768px) {
			row-gap: 26rem;
		}

		@media (width >= 1440px) {
			row-gap: 25rem;
			margin-right: 176rem;
			align-items: flex-start;
		}
	}

	.call-booking__title {
		font-family: var(--font-family);
		font-weight: 700;
		font-size: 26rem;
		text-align: center;
		color: var(--light-cream);

		@media (width >= 768px) {
			font-size: 32rem;
		}

		@media (width >= 1440px) {
			font-size: 40rem;
			text-align: left;
		}
	}

	.call-booking__text {
		font-family: var(--font-family);
		font-weight: 500;
		font-size: 16rem;
		line-height: 162%;
		text-align: center;
		color: var(--light-cream);

		@media (width >= 768px) {
			font-size: 18rem;
			line-height: 156%;
		}

		@media (width >= 1440px) {
			text-align: left;
		}
	}

	.call-booking__link {
		@media (width >= 1440px) {
			flex: 0 0 auto;
		}
	}
</style>
