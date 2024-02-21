import React, { useEffect, useMemo, useState } from "react";

interface CountAnimationProps {
	number: number;

	initial?: number;

	duration?: number;

	format?: (count: number) => string;
}

export function CountAnimation({ number, initial = 0, duration = 800, format }: CountAnimationProps) {
	const [count, setCount] = useState(initial);

	useEffect(() => {
		if (!number) return;
		if (number !== count) animate(count, number);
	}, [number]);

	const formatted = useMemo(() => {
		if (format) return format(count);
		return count;
	}, [count]);

	const animate = (start: number, end: number) => {
		if (typeof window === undefined) return setCount(end);

		let startTimestamp: number | null = null;
		const step = (timestamp: number) => {
			if (!startTimestamp) startTimestamp = timestamp;

			const progress = Math.min((timestamp - startTimestamp) / duration, 1);

			let number = Math.floor(progress * (end - start) + start);
			setCount(number);

			if (progress < 1) window.requestAnimationFrame(step);
		};
		window.requestAnimationFrame(step);
	};

	return <>{formatted}</>;
}
