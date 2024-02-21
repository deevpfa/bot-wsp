import React, { useEffect, useMemo, useState } from "react";
import { TableContext } from "../context/table-context";
import { classNames } from "@/functions/classNames";
import { useTranslation } from "react-i18next";
import { Pagination } from "./pagination";
import { Input } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Button from "@/components/MyButton";
import { get } from "lodash";
import { LoadingTable } from "./loading-table";
import { EmptyIcon } from "@/components/icons/empty-icon";
import { createExcel } from "@/functions/excel";
import { SearchValue } from "@/interfaces";

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
	data?: any[];

	onData?: (data: any[]) => void;

	loading?: boolean;

	searchable?: boolean;

	searchBy?: SearchValue[];

	onSearch?: (data: any) => boolean;

	exportable?: boolean;

	exportAll?: boolean;

	exportName?: string;

	exportKeys?: string[];

	exportValues?: SearchValue[];

	onExport?: (data?: any[]) => any[];

	pagination?: boolean;

	size?: number;

	pageSizes?: number[];

	paginationVariant?: "label" | "number";

	leftContent?: React.ReactNode;

	rightContent?: React.ReactNode;
}

export function Table({
	data = [],
	onData,
	loading = false,
	searchable = false,
	searchBy = ["id"],
	onSearch,
	exportable = false,
	exportAll = true,
	exportName,
	exportKeys,
	exportValues,
	onExport,
	pagination = true,
	size = 25,
	pageSizes,
	paginationVariant = "label",
	leftContent,
	rightContent,
	className,
	...restProps
}: TableProps) {
	const { t } = useTranslation("global");
	const [auxData, setAuxData] = useState<any[]>(data || []);
	const [dataPaginated, setDataPaginated] = useState<any[]>(data.slice(0, size) || []);
	const [page, setPage] = useState(0);

	useEffect(() => {
		if (!data) return;
		setAuxData(data);
		if (pagination) return setDataPaginated(data.slice(0, size));
	}, [data]);

	const isEmpty = useMemo(() => {
		if (loading) return false;
		if (pagination) return !dataPaginated || dataPaginated.length === 0;
		return !auxData || auxData.length === 0;
	}, [auxData, dataPaginated, loading]);

	useEffect(() => {
		if (pagination) {
			if (onData) onData(dataPaginated);
			return;
		}
		if (onData) onData(auxData);
	}, [auxData, dataPaginated]);

	function onChangePage(page: number) {
		if (!pagination) return;
		const start = page * size;
		const end = start + size;
		setPage(page);
		setDataPaginated(auxData.slice(start, end));
	}

	function onChangeSize(size: number) {
		if (!pagination) return;
		const start = page * size;
		const end = start + size;
		setDataPaginated(auxData.slice(start, end));
	}

	function handleOnSearch(value: string) {
		if (onSearch) onSearch(value);
		if (!data) return;
		if (value === "" || !value) {
			onChangePage(1);
			setDataPaginated(data.slice(0, size));
			setAuxData(data);
			return;
		}
		const searchData = data.filter((item: any) => {
			let itemValue = "";
			searchBy.forEach((element: SearchValue) => {
				if (typeof element === "function") {
					itemValue += element(item);
					return;
				}
				itemValue += get(item, element);
			});
			return itemValue.toLowerCase().includes(value.toLowerCase());
		});
		setAuxData(searchData);
		setDataPaginated(searchData.slice(0, size));
	}

	function handleOnExport() {
		if (onExport) {
			const data = onExport(exportAll ? auxData : pagination ? dataPaginated : auxData);
			if (!data || data.length === 0) return;

			return createExcel(exportName || "data", data);
		}
		if (!exportKeys || !exportValues) return;

		let exports = exportAll ? auxData : pagination ? dataPaginated : auxData;
		data = exports.map((item) => {
			const obj: any = {};
			exportKeys.forEach((key, index) => {
				if (!key) return;
				const value = exportValues[index];
				if (!value) obj[key] = "-";

				if (typeof value === "function") {
					obj[key] = value(item);
					return;
				}
				obj[key] = get(item, value);
			});
			return obj;
		});

		createExcel(exportName || "data", data);
	}

	function setData(data: any[]) {
		setAuxData(data);
		if (pagination) {
			const start = page * size;
			const end = start + size;
			setDataPaginated(data.slice(start, end));
		}
	}

	return (
		<TableContext.Provider value={{ data: pagination ? dataPaginated : auxData, auxData: data, setData }}>
			{loading ? (
				<LoadingTable searcheable={searchable} exportable={exportable} pagination={pagination} leftContent={leftContent} rightContent={rightContent} />
			) : (
				<>
					{(rightContent || leftContent) && (
						<div className="flex items-center flex-col justify-between mb-5 gap-4 md:flex-row">
							<div>{leftContent}</div>
							<div className="flex flex-col items-center sm:flex-row">
								{rightContent}
								{searchable && (
									<div className="my-3 sm:my-0">
										<Input
											type="text"
											onChange={(e) => handleOnSearch(e.target.value)}
											label={t("global.search" as string)!}
											icon={<MagnifyingGlassIcon className="h-5 w-5" />}
										/>
									</div>
								)}
								{exportable && (
									<div className="flex justify-end ml-3">
										<Button color="secondary" onClick={handleOnExport} size="md">
											{t("global.export")}
										</Button>
									</div>
								)}
							</div>
						</div>
					)}
					<div className="z-0 shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
						<div className="relative overflow-x-auto">
							<table className={classNames("w-full table-auto rounded-lg border-collapse border-spacing-0", className)} {...restProps} />
						</div>
						{isEmpty && (
							<div className="flex flex-col gap-1 justify-center items-center h-40">
								<EmptyIcon className="text-7xl" classPath1="text-gray-500" classPath2="text-gray-700" />
								<p className="text-gray-500">{t("global.no_data")}</p>
							</div>
						)}
						{auxData.length > 0 && pagination && (
							<Pagination
								variant={paginationVariant}
								pageSizes={pageSizes}
								size={size}
								total={auxData.length}
								onChangePage={onChangePage}
								onChangeSize={onChangeSize}
							/>
						)}
					</div>
				</>
			)}
		</TableContext.Provider>
	);
}
