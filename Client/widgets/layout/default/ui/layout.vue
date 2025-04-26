<script lang="ts" setup>
	import { useDefaultLayoutContext } from "../lib/composables";

	const { header, footer } = useDefaultLayoutContext();
</script>

<template>
	<template v-if="header">
		<component :is="header" />
	</template>
	<main>
		<slot />
	</main>
	<template v-if="footer">
		<component :is="footer" />
	</template>
</template>
