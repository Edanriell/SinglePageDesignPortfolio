<script lang="ts" setup>
	import { Link } from "@shared/ui/link/ui";

	withDefaults(
		defineProps<{
			imageSrc: string;
			imageAlt?: string;
			title: string;
			text: string;
			linkHref?: string;
		}>(),
		{
			imageAlt: "Amy",
			linkHref: "#"
		}
	);
</script>

<template>
	<section class="about-author">
		<figure class="about-author__wrapper">
			<div class="about-author__image-wrapper">
				<svg
					class="about-author__decorative-image-1"
					fill="none"
					height="128"
					viewBox="0 0 128 128"
					width="128"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="96" cy="32" r="28" stroke="#030303" stroke-width="8" />
					<rect fill="#EB7565" height="64" width="64" />
					<rect fill="#030303" height="8" width="8" y="64" />
					<rect fill="#030303" height="8" width="8" x="28" y="64" />
					<rect fill="#030303" height="8" width="8" x="56" y="64" />
					<rect fill="#030303" height="8" width="8" y="92" />
					<rect fill="#030303" height="8" width="8" x="28" y="92" />
					<rect fill="#030303" height="8" width="8" x="56" y="92" />
					<rect fill="#030303" height="8" width="8" y="120" />
					<rect fill="#030303" height="8" width="8" x="28" y="120" />
					<rect fill="#030303" height="8" width="8" x="56" y="120" />
					<path
						clip-rule="evenodd"
						d="M64 64L128 128V64H64Z"
						fill="#FFF7F0"
						fill-rule="evenodd"
					/>
				</svg>
				<NuxtImg
					:alt="imageAlt"
					:src="imageSrc"
					class="about-author__image"
					format="webp"
					loading="eager"
				/>
				<svg
					class="about-author__decorative-image-2"
					fill="none"
					height="128"
					viewBox="0 0 128 128"
					width="128"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect fill="#552049" height="64" rx="32" width="128" y="64" />
					<circle cx="96" cy="96" r="28" stroke="#FFF7F0" stroke-width="8" />
					<rect fill="#030303" height="8" width="8" y="28" />
					<rect fill="#030303" height="8" width="8" x="8" y="28" />
					<rect fill="#030303" height="8" width="8" x="56" y="28" />
					<path
						clip-rule="evenodd"
						d="M64 0L128 64V0H64Z"
						fill="#F6A560"
						fill-rule="evenodd"
					/>
					<rect fill="#030303" height="8" width="8" x="64" y="28" />
					<rect fill="#030303" height="8" width="8" x="112" y="28" />
					<rect fill="#030303" height="8" width="8" x="120" y="28" />
				</svg>
			</div>
			<figcaption class="about-author__content">
				<h2 class="about-author__title">
					{{ title }}
				</h2>
				<p class="about-author__text">
					{{ text }}
				</p>
				<div class="about-author__button-wrapper">
					<ClientOnly>
						<Link :href="linkHref" primaryColor="#eb7565" secondaryColor="#f6a560"
							>Free Consultation</Link
						>
					</ClientOnly>
				</div>
			</figcaption>
		</figure>
	</section>
</template>

<style scoped>
	.about-author {
		position: relative;
		padding-top: 50rem;
		padding-bottom: 50rem;
		margin-left: 16rem;
		margin-right: 16rem;

		@media (width >= 768px) {
			padding-top: 60rem;
			padding-bottom: 60rem;
			margin-left: unset;
			margin-right: 40rem;
			overflow: hidden;
		}

		@media (width >= 1440px) {
			margin-left: 165rem;
			margin-right: 165rem;
			overflow: auto;
			padding-top: 68rem;
			padding-bottom: 44rem;
		}
	}

	.about-author__wrapper {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		@media (width >= 768px) {
			flex-direction: row;
			column-gap: 70rem;
		}

		@media (width >= 1440px) {
			column-gap: 125rem;
		}
	}

	.about-author__image-wrapper {
		width: 300rem;
		height: 300rem;
		border-radius: 50%;
		background-color: var(--cyan);
		position: relative;
		overflow: hidden;
		margin-bottom: 40rem;
		flex: 0 0 auto;

		@media (width >= 768px) {
			width: 364rem;
			height: 364rem;
			margin-left: -45rem;
		}

		@media (width >= 1440px) {
			width: 445rem;
			height: 445rem;
			margin-left: unset;
		}
	}

	.about-author__image {
		position: relative;
		width: 276rem;
		height: 285rem;
		position: absolute;
		bottom: 0;
		right: 30rem;
		z-index: 2;

		@media (width >= 768px) {
			width: 336rem;
			height: 347rem;
			right: unset;
			left: 0;
		}

		@media (width >= 1440px) {
			width: 410rem;
			height: 425rem;
			left: -11rem;
		}
	}

	.about-author__decorative-image-1 {
		width: 86.54rem;
		height: 86.54rem;
		position: absolute;
		top: 70.88rem;
		left: 0;
		z-index: 1;

		@media (width >= 768px) {
			width: 105rem;
			height: 105rem;
			top: 86rem;
			left: 1rem;
		}

		@media (width >= 1440px) {
			width: 128rem;
			height: 128rem;
			top: 104rem;
			left: 0rem;
		}
	}

	.about-author__decorative-image-2 {
		width: 86.54rem;
		height: 86.54rem;
		position: absolute;
		top: 155.77rem;
		right: 0;
		z-index: 1;

		@media (width >= 768px) {
			width: 105rem;
			height: 105rem;
			top: 189rem;
		}

		@media (width >= 1440px) {
			width: 128rem;
			height: 128rem;
			top: 232rem;
		}
	}

	.about-author__content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		row-gap: 24rem;

		@media (width >= 768px) {
			align-items: flex-start;
		}

		@media (width >= 1440px) {
			row-gap: unset;
			flex-basis: 540rem;
		}
	}

	.about-author__title {
		font-family: var(--font-family);
		font-weight: 700;
		font-size: 26rem;
		text-align: center;
		color: var(--black);

		@media (width >= 768px) {
			text-align: left;
			font-size: 32rem;
		}

		@media (width >= 1440px) {
			font-size: 40rem;
			margin-bottom: 34rem;
		}
	}

	.about-author__text {
		font-family: var(--font-family);
		font-weight: 500;
		font-size: 16rem;
		line-height: 162%;
		text-align: center;
		color: var(--medium-brown);

		@media (width >= 768px) {
			font-size: 18rem;
			line-height: 156%;
			text-align: left;
		}

		@media (width >= 1440px) {
			margin-bottom: 32rem;
		}
	}

	.about-author__button-wrapper {
		display: flex;
		justify-content: center;
	}
</style>
