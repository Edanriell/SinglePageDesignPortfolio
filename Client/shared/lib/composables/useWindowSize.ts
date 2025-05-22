import { onMounted, onUnmounted, ref } from "vue";

type WindowSize = {
	width: number | null;
	height: number | null;
};

export function useWindowSize() {
	const windowSize = ref<WindowSize>({
		width: null,
		height: null
	});

	const handleResize = () => {
		windowSize.value = {
			width: window.innerWidth,
			height: window.innerHeight
		};
	};

	onMounted(() => {
		handleResize();

		window.addEventListener("resize", handleResize);
	});

	onUnmounted(() => {
		window.removeEventListener("resize", handleResize);
	});

	return windowSize;
}
