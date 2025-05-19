<script lang="ts" setup>
	import { Swiper, SwiperSlide } from "swiper/vue";
	import { A11y } from "swiper/modules";

	import "swiper/css";

	const swiperInstance = ref(null);
	const modules = [A11y];

	const onSwiper = (swiper) => {
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
		:space-between="15"
		:speed="500"
		class="slider"
		@swiper="onSwiper"
	>
		<swiper-slide class="slider__slide">Slide 1</swiper-slide>
		<swiper-slide class="slider__slide">Slide 2</swiper-slide>
		<swiper-slide class="slider__slide">Slide 3</swiper-slide>
		<swiper-slide class="slider__slide">Slide 4</swiper-slide>
		<swiper-slide class="slider__slide">Slide 5</swiper-slide>
	</swiper>
	<div class="swiper-nav-btns">
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
	}
</style>
