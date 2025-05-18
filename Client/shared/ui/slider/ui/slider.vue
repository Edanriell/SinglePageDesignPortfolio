<script>
	import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

	import { Swiper, SwiperSlide } from "swiper/vue";

	import "swiper/css";
	import "swiper/css/navigation";
	import "swiper/css/pagination";
	import "swiper/css/scrollbar";

	export default {
		components: {
			Swiper,
			SwiperSlide
		},
		setup() {
			const onSwiper = (swiper) => {
				console.log(swiper);
			};
			const onSlideChange = () => {
				console.log("slide change");
			};
			return {
				onSwiper,
				onSlideChange,
				modules: [Navigation, Pagination, Scrollbar, A11y]
			};
		}
	};
</script>

<template>
	<swiper
		:modules="modules"
		:pagination="{ clickable: true }"
		:scrollbar="{ draggable: true }"
		:slides-per-view="3"
		:space-between="50"
		navigation
		@slideChange="onSlideChange"
		@swiper="onSwiper"
	>
		<swiper-slide>Slide 1</swiper-slide>
		<swiper-slide>Slide 2</swiper-slide>
		<swiper-slide>Slide 3</swiper-slide>
	</swiper>
</template>

<style></style>
