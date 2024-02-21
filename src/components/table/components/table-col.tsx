import { classNames } from "@/functions/classNames";
import { Kick } from "@/interfaces";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { useRow } from "../hooks/use-row";
import Link from "next/link";
import { useTable } from "../hooks/use-table";
import { orderBy } from "lodash";

export interface TableColProps extends Kick<React.HTMLProps<HTMLTableCellElement>, "value" | "defaultValue"> {
	as?: "th" | "td";

	linkeable?: boolean;

	placement?: "left" | "right" | "center";

	isSortable?: boolean;

	onSort?: (order: "asc" | "desc" | null) => void;

	sortKey?: string;

	defaultSort?: "asc" | "desc" | null;

	isSticky?: boolean;

	stickyDirection?: "left" | "right" | "top" | "left-top" | "right-top";

	srOnly?: React.ReactNode;

	value?: React.ReactNode;

	defaultValue?: React.ReactNode;
}

export function TableCol({
	as = "td",
	placement = "left",
	isSortable = false,
	onSort,
	sortKey,
	defaultSort = null,
	linkeable = true,
	isSticky = false,
	stickyDirection = "left",
	className,
	children,
	onClick,
	srOnly,
	value,
	defaultValue = "-",
	...restProps
}: TableColProps) {
	const [order, setOrder] = useState<"asc" | "desc" | null>(defaultSort);
	const { data, auxData, setData } = useTable();
	const { href } = useRow();

	function handleOnClick(ev: React.MouseEvent<HTMLTableCellElement>) {
		if (onClick) onClick(ev);

		if (!isSortable) return;

		let nOrder: "asc" | "desc" | null;
		if (order === "asc") nOrder = "desc";
		else if (order === "desc") nOrder = null;
		else nOrder = "asc";

		setOrder(nOrder);
		if (onSort) onSort(nOrder);
	}

	useEffect(() => {
		if (!data || !sortKey) return;
		if (order === null) return setData(auxData);

		setData(orderBy(auxData, sortKey, order));
	}, [order]);

	if (as === "th") {
		return (
			<th
				scope="col"
				onClick={handleOnClick}
				className={classNames(
					className,
					"whitespace-nowrap bg-gray-50 bg-opacity-75 py-3.5 px-3.5 text-left text-sm font-semibold text-gray-900",
					isSticky && stickyDirection === "left" && "sticky left-0 z-10 bg-opacity-100",
					isSticky && stickyDirection === "right" && "sticky right-0 z-10 bg-opacity-100",
					isSticky && stickyDirection === "top" && "sticky top-0 z-10 bg-opacity-100",
					isSticky && stickyDirection === "left-top" && "sticky left-0 top-0 z-10 bg-opacity-100",
					isSticky && stickyDirection === "right-top" && "sticky right-0 top-0 z-10 bg-opacity-100",
					isSortable && "cursor-pointer hover:bg-gray-100",
				)}
				{...restProps}
			>
				<div
					className={classNames("flex items-center", {
						"justify-center": placement === "center",
						"justify-end": placement === "right",
						"justify-start": placement === "left",
					})}
				>
					{children ?? value ?? defaultValue}
					{srOnly && <span className="sr-only">{srOnly}</span>}
					{isSortable && (
						<div className="ml-2 flex flex-col">
							<ChevronUpIcon className={classNames("w-3 h-3", order === "asc" ? "text-gray-900" : "text-gray-400")} />
							<ChevronDownIcon className={classNames("w-3 h-3", order === "desc" ? "text-gray-900" : "text-gray-400")} />
						</div>
					)}
				</div>
			</th>
		);
	}
	if (href && linkeable) {
		return (
			<td
				scope="col"
				className={classNames(
					"whitespace-nowrap border-t border-gray-300 text-sm font-medium",
					isSticky && stickyDirection === "left" && "sticky left-0 z-10 bg-inherit",
					isSticky && stickyDirection === "right" && "sticky right-0 z-10 bg-inherit",
					isSticky && stickyDirection === "top" && "sticky top-0 z-10 bg-inherit",
					isSticky && stickyDirection === "left-top" && "sticky left-0 top-0 z-10 bg-inherit",
					isSticky && stickyDirection === "right-top" && "sticky right-0 top-0 z-10 bg-inherit",
					placement === "center" && "text-center",
					placement === "right" && "text-right",
					placement === "left" && "text-left",
					className,
				)}
				{...restProps}
			>
				<Link href={href} className={classNames("block py-3.5 px-3.5")}>
					{children ?? value ?? defaultValue}
					{srOnly && <span className="sr-only">{srOnly}</span>}
				</Link>
			</td>
		);
	}
	return (
		<td
			scope="col"
			className={classNames(
				"whitespace-nowrap border-t border-gray-300 py-3.5 px-3.5 text-sm font-medium",
				isSticky && stickyDirection === "left" && "sticky left-0 z-10 bg-inherit",
				isSticky && stickyDirection === "right" && "sticky right-0 z-10 bg-inherit",
				isSticky && stickyDirection === "top" && "sticky top-0 z-10 bg-inherit",
				isSticky && stickyDirection === "left-top" && "sticky left-0 top-0 z-10 bg-inherit",
				isSticky && stickyDirection === "right-top" && "sticky right-0 top-0 z-10 bg-inherit",
				placement === "center" && "text-center",
				placement === "right" && "text-right",
				placement === "left" && "text-left",
				className,
			)}
			{...restProps}
		>
			{children ?? value ?? defaultValue}
			{srOnly && <span className="sr-only">{srOnly}</span>}
		</td>
	);
}
