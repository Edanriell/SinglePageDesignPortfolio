<script lang="ts" setup>
	import { Swiper, SwiperSlide } from "swiper/vue";
	import { A11y } from "swiper/modules";
	import type { Swiper as SwiperType } from "swiper";

	import "swiper/css";

	type Slide = {
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
		<button class="nav-btn prev-btn" @click="slidePrev">Prev</button>
		<button class="nav-btn next-btn" @click="slideNext">Next</button>
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

		@media (width >= 768px) {
			margin-top: 56rem;
		}
	}

	.prev-btn {
		background: green;
		height: 40rem;
	}

	.next-btn {
		background: aqua;
		height: 60rem;
	}
</style>
