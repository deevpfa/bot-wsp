export function classNames(...args: Array<string | object | boolean | undefined>) {
	return args
		.map((arg) => {
			if (typeof arg === "undefined") return null;
			if (typeof arg === "boolean") return arg;
			if (typeof arg === "string") return arg;
			return Object.entries(arg)
				.map(([key, value]) => (value ? key : null))
				.filter(Boolean)
				.join(" ");
		})
		.filter(Boolean)
		.join(" ");
}
