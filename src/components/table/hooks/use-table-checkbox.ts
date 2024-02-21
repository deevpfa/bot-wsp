import { SELECT_ALL } from "@/constants/common";
import { useEffect, useMemo, useState } from "react";

interface UseTableCheckboxProps {
	data: string[];

	allKey?: string;
}

export function useTableCheckbox({ data, allKey = SELECT_ALL }: UseTableCheckboxProps) {
	const [auxData, setData] = useState(data);
	const [selected, setSelected] = useState<string[]>([]);

	const allSelected = useMemo(() => {
		if (selected.length === 0) return false;
		if (auxData.length === 0) return false;
		selected.length === auxData.length;
	}, [selected, auxData]);

	const allIsIndeterminate = useMemo(() => {
		if (selected.length === 0) return false;

		const allSelected = selected.length === auxData.length;
		const allIsIndeterminate = !allSelected && selected.length > 0;

		return allIsIndeterminate;
	}, [selected, auxData]);

	useEffect(() => {
		setData(data);
		setSelected((selected) => selected.filter((item) => data.includes(item)));
	}, [data]);

	const onSelect = (name: string | typeof allKey, value: boolean) => {
		if (name === allKey) {
			const selected = value ? auxData : [];
			setSelected(selected);
			return;
		}
		if (value) return setSelected((selected) => [...selected, name]);
		setSelected((selected) => selected.filter((item) => item !== name));
		return;
	};

	return { selected, allSelected, allIsIndeterminate, onSelect };
}
