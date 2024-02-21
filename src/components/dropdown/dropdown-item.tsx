import { classNames } from "@/functions/classNames";
import { Kick } from "@/interfaces";
import { Menu } from "@headlessui/react";
import React from "react";

interface ItemRenderPropArg {
	active: boolean;
	disabled: boolean;
	close: () => void;
}

interface DropdownItemProps extends Kick<React.HTMLAttributes<HTMLElement>, "children"> {
	children: React.ReactNode | ((opt: ItemRenderPropArg) => React.ReactElement);
}

export function DropdownItem({ children, className, ...restProps }: DropdownItemProps) {
	return (
		<Menu.Item
			as="div"
			className={classNames(
				"text-gray-700 cursor-pointer hover:text-primary-600 hover:bg-primary-600 hover:bg-opacity-5 rounded-md  block px-4 w-full text-left py-2 mb-1 text-sm font-medium",
				className,
			)}
			{...restProps}
		>
			{(opt: ItemRenderPropArg) => {
				if (typeof children === "function") return children(opt);
				return children as React.ReactElement;
			}}
		</Menu.Item>
	);
}
