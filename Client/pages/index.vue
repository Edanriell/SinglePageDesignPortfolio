<script lang="ts" setup>
	import { HeaderWidget } from "@widgets/header/ui";
	import { FooterWidget } from "@widgets/footer/ui";
	import { HeroWidget } from "@widgets/hero/ui";
	import { type Service, ServicesWidget } from "@widgets/services/ui";

	definePageMeta({
		layout: "default-ui-layout",
		header: markRaw(HeaderWidget),
		footer: markRaw(FooterWidget)
	});

	const services = [
		{
			name: "Graphic Design",
			image:
				'<svg width="128" height="192" viewBox="0 0 128 192" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
				'  <rect width="64" height="128" fill="#552049" />\n' +
				'  <circle cx="32" cy="32" r="14" stroke="#FFF7F0" stroke-width="4" />\n' +
				'  <rect x="64" y="32" width="64" height="32" rx="16" fill="#F6A560" />\n' +
				'  <path fill-rule="evenodd" clip-rule="evenodd" d="M32 160L64 192V160H32Z" fill="#61C4B7" />\n' +
				'  <path fill-rule="evenodd" clip-rule="evenodd" d="M64 128L96 160V128H64Z" fill="#61C4B7" />\n' +
				'  <circle cx="112" cy="48" r="14" stroke="#FFF7F0" stroke-width="4" />\n' +
				'  <circle cx="112" cy="48" r="14" stroke="#FFF7F0" stroke-width="4" />\n' +
				'  <rect x="64" y="14" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="68" y="14" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="92" y="14" width="4" height="4" fill="#030303" />\n' +
				'  <path fill-rule="evenodd" clip-rule="evenodd" d="M96 0L128 32V0H96Z" fill="#755CDE" />\n' +
				'  <rect x="96" y="14" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="120" y="14" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="124" y="14" width="4" height="4" fill="#030303" />\n' +
				'  <circle cx="80" cy="80" r="14" stroke="#030303" stroke-width="4" />\n' +
				'  <rect x="96" y="64" width="32" height="32" fill="#EB7565" />\n' +
				'  <path fill-rule="evenodd" clip-rule="evenodd" d="M32 96L128 192V96H32Z" fill="#FFF7F0" />\n' +
				'  <rect y="128" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="14" y="128" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="28" y="128" width="4" height="4" fill="#030303" />\n' +
				'  <rect y="142" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="14" y="142" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="28" y="142" width="4" height="4" fill="#030303" />\n' +
				'  <rect y="156" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="14" y="156" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="28" y="156" width="4" height="4" fill="#030303" />\n' +
				"</svg>",
			style: {
				backgroundColor: "#755cde",
				gridColumn: "span 2",
				gridRow: "span 2"
			}
		},
		{
			name: "UI/UX",
			image:
				'<svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
				'  <circle cx="48.9126" cy="16" r="14" stroke="#030303" stroke-width="4" />\n' +
				'  <rect x="0.912598" width="32" height="32" fill="#EB7565" />\n' +
				'  <rect x="0.912598" y="32" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="14.9126" y="32" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="28.9126" y="32" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="0.912598" y="46" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="14.9126" y="46" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="28.9126" y="46" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="0.912598" y="60" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="14.9126" y="60" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="28.9126" y="60" width="4" height="4" fill="#030303" />\n' +
				'  <path fill-rule="evenodd" clip-rule="evenodd" d="M32.9126 32L64.9126 64V32H32.9126Z" fill="#FFF7F0" />\n' +
				"</svg>",
			style: {
				backgroundColor: "#f6a560",
				gridColumn: "span 1"
			}
		},
		{
			name: "Apps",
			image:
				'<svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
				'  <rect x="0.868652" y="32" width="64" height="32" rx="16" fill="#552049" />\n' +
				'  <circle cx="48.8687" cy="48" r="14" stroke="#FFF7F0" stroke-width="4" />\n' +
				'  <rect x="0.868652" y="14" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="4.86865" y="14" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="28.8687" y="14" width="4" height="4" fill="#030303" />\n' +
				'  <path fill-rule="evenodd" clip-rule="evenodd" d="M32.8687 0L64.8687 32V0H32.8687Z" fill="#755CDE" />\n' +
				'  <rect x="32.8687" y="14" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="56.8687" y="14" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="60.8687" y="14" width="4" height="4" fill="#030303" />\n' +
				"</svg>",
			style: {
				backgroundColor: "#f39e9e",
				gridColumn: "span 1"
			}
		},
		{
			name: "Illustrations",
			image:
				'<svg width="129" height="64" viewBox="0 0 129 64" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
				'  <circle cx="112.913" cy="16" r="14" stroke="#FFF7F0" stroke-width="4" />\n' +
				'  <rect x="64.9126" width="32" height="32" fill="#755CDE" />\n' +
				'  <rect x="96.9126" y="32" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="110.913" y="32" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="124.913" y="32" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="96.9126" y="46" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="110.913" y="46" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="124.913" y="46" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="96.9126" y="60" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="110.913" y="60" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="124.913" y="60" width="4" height="4" fill="#030303" />\n' +
				'  <path fill-rule="evenodd" clip-rule="evenodd" d="M64.9126 32L96.9126 64V32H64.9126Z" fill="#F39E9E" />\n' +
				'  <rect x="32.9126" y="32" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="46.9126" y="32" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="60.9126" y="32" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="32.9126" y="56" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="46.9126" y="56" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="60.9126" y="56" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="32.9126" y="60" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="46.9126" y="60" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="60.9126" y="60" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="32.9126" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="46.9126" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="60.9126" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="32.9126" y="4" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="46.9126" y="4" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="60.9126" y="4" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="32.9126" y="28" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="46.9126" y="28" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="60.9126" y="28" width="4" height="4" fill="#030303" />\n' +
				'  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.912598 32L32.9126 64V32H0.912598Z" fill="#61C4B7" />\n' +
				'  <path fill-rule="evenodd" clip-rule="evenodd" d="M32.9126 0L0.912598 32V0H32.9126Z" fill="#FFF7F0" />\n' +
				"</svg>",
			style: {
				backgroundColor: "#eb7565",
				gridColumn: "span 2"
			}
		},
		{
			name: "Photography",
			image:
				'<svg width="160" height="64" viewBox="0 0 160 64" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
				'  <rect x="32" width="64" height="64" fill="#EB7565" />\n' +
				'  <circle cx="16" cy="16" r="14" stroke="#030303" stroke-width="4" />\n' +
				'  <circle cx="64" cy="32" r="14" stroke="#FFF7F0" stroke-width="4" />\n' +
				'  <rect x="128" y="32" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="142" y="32" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="156" y="32" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="128" y="56" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="142" y="56" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="156" y="56" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="128" y="60" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="142" y="60" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="156" y="60" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="128" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="142" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="156" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="128" y="4" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="142" y="4" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="156" y="4" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="128" y="28" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="142" y="28" width="4" height="4" fill="#030303" />\n' +
				'  <rect x="156" y="28" width="4" height="4" fill="#030303" />\n' +
				'  <path fill-rule="evenodd" clip-rule="evenodd" d="M96 32L128 64V32H96Z" fill="#FFF7F0" />\n' +
				'  <path fill-rule="evenodd" clip-rule="evenodd" d="M96 32L128 64V32H96Z" fill="#552049" />\n' +
				'  <path fill-rule="evenodd" clip-rule="evenodd" d="M32 64L0 32V64H32Z" fill="#F39E9E" />\n' +
				'  <path fill-rule="evenodd" clip-rule="evenodd" d="M96 32L128 0V32H96Z" fill="#FFF7F0" />\n' +
				"</svg>",
			style: {
				backgroundColor: "#61c4b7",
				gridColumn: "span 2"
			}
		},
		{
			name: "Motion Graphics",
			image:
				'<svg width="128" height="64" viewBox="0 0 128 64" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
				'<circle cx="80" cy="16" r="14" stroke="#F39E9E" stroke-width="4"/>\n' +
				'<circle cx="48" cy="16" r="14" stroke="#F39E9E" stroke-opacity="0.5" stroke-width="4"/>\n' +
				'<circle cx="16" cy="16" r="14" stroke="#F39E9E" stroke-opacity="0.25" stroke-width="4"/>\n' +
				'<circle cx="112" cy="16" r="14" stroke="#FFF7F0" stroke-width="4"/>\n' +
				'<path fill-rule="evenodd" clip-rule="evenodd" d="M128 64L96 32V64H128Z" fill="#F39E9E"/>\n' +
				'<rect x="32" y="32" width="64" height="32" rx="16" fill="#F6A560"/>\n' +
				'<path fill-rule="evenodd" clip-rule="evenodd" d="M4 46H0V50H4H8V46H4ZM28 46H32H36V50H32H28V46ZM56 46H60H64V50H60H56V46Z" fill="#FFF7F0"/>\n' +
				"</svg>\n",
			style: {
				backgroundColor: "#552049",
				gridColumn: "span 2"
			}
		}
	];
</script>

<template>
	<HeroWidget
		text="With over ten years of experience in various design disciplines, I’m your one-stop shop
			for your design needs."
		title="Design solutions made easy"
	/>
	<ServicesWidget :services="services as Service[]" />
</template>
