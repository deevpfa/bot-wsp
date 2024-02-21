import { classNames } from "@/functions/classNames";
import { Menu } from "@headlessui/react";
import { ReactTag } from "@headlessui/react/dist/types";
import React from "react";

type DropdownHandlerProps<Tag extends ReactTag = any> = React.ComponentPropsWithRef<"button"> & {
	as: Tag;
} & React.ComponentPropsWithRef<Tag>;

export function DropdownHandler({ children, className, ...restProps }: DropdownHandlerProps) {
	return (
		<Menu.Button className={classNames("flex max-w-xs z-0 items-center text-gray-300 hover:text-white", className)} {...restProps}>
			{children}
		</Menu.Button>
	);
}
