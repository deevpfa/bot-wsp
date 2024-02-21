import { classNames } from "@/functions/classNames";
import { Menu } from "@headlessui/react";
import React from "react";

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

export function Dropdown({ children, className, ...restProps }: DropdownProps) {
	return (
		<Menu as="div" className={classNames("relative", className)} {...restProps}>
			{children}
		</Menu>
	);
}
