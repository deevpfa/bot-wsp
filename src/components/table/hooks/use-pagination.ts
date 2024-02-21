import { useCallback, useEffect, useMemo, useState } from "react";

export function usePagination(size: number, total: number) {
	const [actualPage, setActualPage] = useState(1);
	const [pages, setPages] = useState<number[]>([]);

	useEffect(() => {
		const pages = [];
		for (let i = 1; i <= Math.ceil(total / size); i++) {
			pages.push(i);
		}

		setPages(pages);
	}, [size, total]);

	const changeActualPage = (page: number) => {
		if (page < 1) return;
		if (page > pages.length) return;

		setActualPage(page);
	};

	const from = useMemo(() => actualPage * size - size + 1, [actualPage, size]);
	const to = useMemo(() => actualPage * size, [actualPage, size]);
	const isDisabledPrev = useMemo(() => {
		if (actualPage - 1 < 1) return true;
		return false;
	}, [actualPage, pages]);

	const isDisabledNext = useMemo(() => {
		if (actualPage + 1 > pages.length) return true;
		return false;
	}, [actualPage, pages]);

	return { actualPage, pages, from, to, isDisabledPrev, isDisabledNext, changeActualPage };
}
