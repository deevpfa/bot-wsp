import { classNames } from "@/functions/classNames";
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

interface DropdownItemsProps extends React.HTMLAttributes<HTMLElement> {
	placement?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top" | "bottom" | "left" | "right";
}

export function DropdownItems({ children, className, placement = "bottom-right", ...restProps }: DropdownItemsProps) {
	return (
		<Transition
			as={Fragment}
			enter="transition ease-out duration-100"
			enterFrom="transform opacity-0 scale-95"
			enterTo="transform opacity-100 scale-100"
			leave="transition ease-in duration-75"
			leaveFrom="transform opacity-100 scale-100"
			leaveTo="transform opacity-0 scale-95"
		>
			<Menu.Items
				className={classNames(
					"absolute z-30 py-2 px-2 w-48 space-y-1 origin-top-right rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none",
					className,
					{
						"origin-left left-0 top-0": placement === "left",
						"origin-right right-0 top-0": placement === "right",
						"origin-top bottom-[100%] left-0": placement === "top",
						"origin-bottom top-[100%] left-0": placement === "bottom",
						"origin-top-left bottom-[100%] left-0": placement === "top-left",
						"origin-top-right bottom-[100%] right-0": placement === "top-right",
						"origin-bottom-left top-[100%] left-0": placement === "bottom-left",
						"origin-bottom-right top-[100%] right-0": placement === "bottom-right",
					},
				)}
				{...restProps}
			>
				{children}
			</Menu.Items>
		</Transition>
	);
}
