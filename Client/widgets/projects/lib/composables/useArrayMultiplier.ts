import { computed, ref } from "vue";

type ArrayMultiplierOptions = {
	initialMultiplier?: number;
};

export const useArrayMultiplier = <T>(array: T[], options?: ArrayMultiplierOptions) => {
	const multiplier = ref(options?.initialMultiplier || 2);

	const multipliedArray = computed(() => {
		const fullCopies = Math.floor(multiplier.value);
		const remainder = multiplier.value - fullCopies;

		let result: T[] = [];

		for (let i = 0; i < fullCopies; i++) {
			result = result.concat(array);
		}

		if (remainder > 0) {
			const itemsToAdd = Math.round(array.length * remainder);
			result = result.concat(array.slice(0, itemsToAdd));
		}

		return result;
	});

	const setMultiplier = (value: number) => {
		if (value <= 0) {
			throw new Error("Multiplier must be greater than 0");
		}
		multiplier.value = value;
	};

	return {
		multiplier,
		multipliedArray,
		setMultiplier
	};
};
