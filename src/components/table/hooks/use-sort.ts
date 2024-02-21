import { orderBy } from "lodash";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const useSort = <T extends object = any>(data: T[], setData: Dispatch<SetStateAction<T[]>>) => {
	const [order, setOrder] = useState<"asc" | "desc" | null>(null);
	const [key, setKey] = useState<keyof T | null>(null);

	const onSort = (newOrder: "asc" | "desc" | null, newKey: keyof T) => {
		setOrder(newOrder);
		setKey(newKey);
	};

	useEffect(() => {
		if (!order || !key) return setData(data);

		setData((prevData) => {
			return orderBy(prevData, [key], [order]);
		});
	}, [order, key, data]);

	return {
		onSort,
		order,
		key,
	};
};
