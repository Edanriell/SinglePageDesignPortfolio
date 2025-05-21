<script lang="ts" setup>
	import { Swiper, SwiperSlide } from "swiper/vue";
	import { A11y } from "swiper/modules";
	import type { Swiper as SwiperType } from "swiper";

	import { Button } from "@shared/ui/button/ui";

	import "swiper/css";

	export type Slide = {
		imageSrc: string;
		title: string;
		description: string;
	};

	defineProps<{ slides: Slide[] }>();

	const swiperInstance = ref<SwiperType | null>(null);
	const modules = [A11y];

	const onSwiper = (swiper: SwiperType) => {
		console.log(swiper);
		swiperInstance.value = swiper;

		// Debug loop settings
		console.log("Loop enabled:", swiper.params.loop);
		console.log("Loop additional slides:", swiper.params.loopAdditionalSlides);
		console.log("Original slides count:", swiper.slides ? swiper.slides.length / 3 : 0);
		console.log("Total slides in DOM:", swiper.slides ? swiper.slides.length : 0);
	};

	const slidePrev = () => {
		if (swiperInstance.value) {
			swiperInstance.value.slidePrev();
		}
	};

	const slideNext = () => {
		if (swiperInstance.value) {
			swiperInstance.value.slideNext();
		}
	};
</script>

<template>
	<swiper
		:centeredSlides="true"
		:grab-cursor="true"
		:loop="true"
		:modules="modules"
		:slidesPerView="'auto'"
		:speed="500"
		class="slider"
		@swiper="onSwiper"
	>
		<swiper-slide
			v-for="({ description, imageSrc, title }, index) in slides"
			:key="index"
			class="slider__slide slide"
		>
			<figure class="slide__inner-wrapper">
				<NuxtImg
					:alt="description"
					:src="imageSrc"
					class="slide__image"
					format="webp"
					loading="eager"
				/>
				<figcaption class="slide__content">
					<h3 class="visually-hidden">{{ title }}</h3>
					<p class="visually-hidden">{{ description }}</p>
				</figcaption>
			</figure>
		</swiper-slide>
	</swiper>
	<div class="slider__navigation-buttons-wrapper">
		<Button
			class="slider__navigation-button"
			primaryColor="#030303"
			secondaryColor="#755cde"
			shape="circular"
			@click="slidePrev"
		>
			<NuxtImg class="arrow-icon" loading="eager" src="/images/arrow-left.svg" />
		</Button>
		<Button
			class="slider__navigation-button"
			primaryColor="#030303"
			secondaryColor="#755cde"
			shape="circular"
			@click="slideNext"
			><NuxtImg class="arrow-icon" loading="eager" src="/images/arrow-right.svg"
		/></Button>
	</div>
</template>

<style scoped>
	.slider {
		position: relative;
		width: 100%;
	}

	.slider__slide {
		border-radius: 10rem;
		height: 180rem;
		background: #d8d8d8;
		max-width: 270rem;
		margin-right: 15rem;

		@media (width >= 768px) {
			max-width: 540rem;
			height: 360rem;
			margin-right: 30rem;
		}
	}

	.slide {
		overflow: hidden;
	}

	.slide__inner-wrapper {
		position: relative;
	}

	.slide__image {
		object-fit: cover;
		width: 100%;
		height: 180rem;

		@media (width >= 768px) {
			height: 360rem;
		}
	}

	.slide__content {
		position: relative;
	}

	.slider__navigation-buttons-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 32rem;
		column-gap: 16rem;

		@media (width >= 768px) {
			margin-top: 56rem;
		}
	}

	.slider__navigation-button {
		width: 64rem !important;
		height: 64rem !important;
	}

	.arrow-icon {
		width: 16rem;
		height: 17rem;
	}
</style>
