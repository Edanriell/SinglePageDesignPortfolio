import { useRoute } from "vue-router";

export const useDefaultLayoutContext = () => {
	const route = useRoute();

	const header = computed(() => route.meta?.header ?? null);
	const footer = computed(() => route.meta?.footer ?? null);

	return { header, footer };
};
