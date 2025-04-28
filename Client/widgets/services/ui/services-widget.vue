<script lang="ts" setup>
	type Service = {
		name: string;
		image?: string;
		style?: Record<string, string>;
	};

	withDefaults(
		defineProps<{
			services: Service[];
		}>(),
		{
			services: () => []
		}
	);
</script>

<template>
	<section class="services">
		<h2 class="visually-hidden">Provided services</h2>
		<ul class="services__services-list services-list">
			<li
				v-for="(service, index) in services"
				:key="index"
				:style="service.style"
				class="services-list__item"
			>
				<div
					v-if="service.image"
					class="services-list__item-image"
					v-html="service.image"
				></div>
				<h3 class="services-list__item-name">{{ service.name }}</h3>
			</li>
		</ul>
	</section>
</template>

<style scoped>
	.services {
		position: relative;
		margin-left: 16rem;
		margin-right: 16rem;
		padding-top: 16rem;
		padding-bottom: 50rem;

		@media (width >= 768px) {
			margin-left: 40rem;
			margin-right: 40rem;
			padding-top: 32rem;
			padding-bottom: 60rem;
		}

		@media (width >= 1440px) {
			margin-left: 165rem;
			margin-right: 165rem;
			padding-top: 40rem;
			padding-bottom: 68rem;
		}
	}

	.services__services-list {
		position: relative;
	}

	.services-list {
		display: grid;
		row-gap: 24rem;
		column-gap: 25rem;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(3, 182rem 158rem);

		@media (width >= 768px) {
			grid-template-columns: repeat(4, 1fr);
			grid-template-rows: 182rem 158rem 182rem;
		}

		@media (width >= 1440px) {
			grid-template-columns: repeat(6, 1fr);
			grid-template-rows: 182rem 158rem;
		}
	}

	.services-list__item {
		position: relative;
		border-radius: 8rem;
		padding: 24rem;
		overflow: hidden;
	}

	.services-list__item-image {
		position: absolute;
		top: 24rem;
		right: 24rem;
	}

	.services-list__item-name {
		font-family: var(--font-family);
		font-weight: 700;
		font-size: 24rem;
		color: #fff;
		display: block;
		margin-top: auto;
		position: absolute;
		bottom: 24rem;
		left: 24rem;
	}
</style>
