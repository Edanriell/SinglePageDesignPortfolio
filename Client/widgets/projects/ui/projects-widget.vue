<script lang="ts" setup>
	import type { Slide } from "@shared/ui/slider/ui";
	import { Slider } from "@shared/ui/slider/ui";

	type Project = Slide;

	defineProps<{ projects: Project[] }>();
</script>

<template>
	<section class="projects">
		<h2 class="projects__title">My Work</h2>
		<Slider :slides="projects" />
	</section>
</template>

<style scoped>
	.projects {
		position: relative;
		padding-top: 50rem;
		padding-bottom: 50rem;

		@media (width >= 768px) {
			padding-top: 60rem;
			padding-bottom: 60rem;
		}

		@media (width >= 1440px) {
			padding-top: 44rem;
			padding-bottom: 44rem;
		}
	}

	.projects__title {
		font-family: var(--font-family);
		font-weight: 700;
		font-size: 24rem;
		text-align: center;
		color: var(--black);
		margin-bottom: 32rem;

		@medai (width >= 768px) {
			font-size: 32rem;
			margin-bottom: 56rem;
		}
	}
</style>
