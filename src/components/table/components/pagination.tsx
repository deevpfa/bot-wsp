import React from "react";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Button, IconButton, Menu, MenuHandler, MenuItem, MenuList, Typography } from "@material-tailwind/react";
import { Trans, useTranslation } from "react-i18next";
import { usePagination } from "../hooks/use-pagination";
import { classNames } from "@/functions/classNames";

export interface PaginationProps {
	/** Tamaño de Registros visibles */
	size: number;
	/** Total de Registros */
	total: number;
	/** Lista de tamaños */
	pageSizes?: number[];
	/** Variante */
	variant?: "label" | "number";
	/** Evento de Cambio de pagina */
	onChangePage?: (page: number) => void;
	/** Evento de Cambio de tamaño de registros visibles */
	onChangeSize?: (size: number) => void;
}

export function Pagination({ variant = "label", size = 10, pageSizes, total, onChangePage, onChangeSize }: PaginationProps) {
	const { actualPage, pages, from, to, isDisabledNext, isDisabledPrev, changeActualPage } = usePagination(size, total);
	const { t } = useTranslation("global");

	const handleChangePageSize = (size: number) => {
		if (onChangeSize) onChangeSize(size);
	};

	const handleChangePage = (page: number) => {
		changeActualPage(page);
		if (onChangePage) onChangePage(page - 1);
	};

	return (
		<>
			{pages.length > 0 && total > size && (
				<div className={classNames("flex items-center p-4", pageSizes && pageSizes.length > 0 ? "justify-between" : "justify-end")}>
					{pageSizes && pageSizes.length > 0 && (
						<div className="flex items-center gap-2">
							<Typography variant="small">{t("global.pagination.showing")}</Typography>
							<Menu>
								<MenuHandler>
									<Button variant="text" className="p-1 text-sm flex items-center">
										{size}
										<ChevronDownIcon className="w-3 h-3 ml-1" />
									</Button>
								</MenuHandler>
								<MenuList>
									{pageSizes.map((size) => (
										<MenuItem key={size} onClick={() => handleChangePageSize(size)}>
											{size}
										</MenuItem>
									))}
								</MenuList>
							</Menu>
							<Typography variant="small">{t("global.pagination.results")}</Typography>
						</div>
					)}
					{variant === "label" ? (
						<div className="flex items-center gap-4">
							<IconButton variant="text" size="sm" className="rounded-full" disabled={isDisabledPrev} onClick={() => handleChangePage(actualPage - 1)}>
								<ChevronLeftIcon strokeWidth={2} className="w-4 h-4" />
							</IconButton>
							<Typography color="gray" className="font-normal">
								<Trans i18nKey="global.pagination.label" ns="global" values={{ actualPage, total: pages.length }}>
									Page <strong className="text-gray-900">0</strong> of <strong className="text-gray-900">0</strong>
								</Trans>
							</Typography>
							<IconButton variant="text" size="sm" className="rounded-full" disabled={isDisabledNext} onClick={() => handleChangePage(actualPage + 1)}>
								<ChevronRightIcon strokeWidth={2} className="w-4 h-4" />
							</IconButton>
						</div>
					) : (
						<div className="flex justify-end items-center gap-2">
							<IconButton variant="text" size="sm" className="rounded-full" disabled={isDisabledPrev} onClick={() => handleChangePage(actualPage - 1)}>
								<ChevronLeftIcon strokeWidth={2} className="w-4 h-4" />
							</IconButton>
							<div className="flex items-center gap-1">
								{pages.map((page) => (
									<IconButton
										key={page}
										variant={page === actualPage ? "filled" : "text"}
										size="sm"
										className="rounded-full"
										onClick={() => handleChangePage(page)}
									>
										{page}
									</IconButton>
								))}
							</div>
							<IconButton variant="text" size="sm" className="rounded-full" disabled={isDisabledNext} onClick={() => handleChangePage(actualPage + 1)}>
								<ChevronRightIcon strokeWidth={2} className="w-4 h-4" />
							</IconButton>
						</div>
					)}
				</div>
			)}
		</>
	);
}
