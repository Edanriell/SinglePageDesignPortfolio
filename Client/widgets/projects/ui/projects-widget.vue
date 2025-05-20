<script setup>
	import { Slider } from "@shared/ui/slider/ui";

	const projects = [
		{
			imageSrc: "/images/slider/image-1.jpg",
			title: "Web Application Design",
			description:
				"Modern responsive web app with user-centered interface and intuitive navigation"
		},
		{
			imageSrc: "/images/slider/image-2.jpg",
			title: "E-commerce Platform",
			description:
				"Fully-featured online store with product catalog, shopping cart, and secure checkout"
		},
		{
			imageSrc: "/images/slider/image-3.jpg",
			title: "Mobile App Interface",
			description:
				"Cross-platform mobile application with seamless user experience and clean design"
		},
		{
			imageSrc: "/images/slider/image-4.jpg",
			title: "Brand Identity System",
			description:
				"Comprehensive branding package including logo design, color scheme, and typography"
		},
		{
			imageSrc: "/images/slider/image-5.jpg",
			title: "UI Component Library",
			description:
				"Custom component library with consistent design language for rapid development"
		}
	];
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
		}
	}
</style>
