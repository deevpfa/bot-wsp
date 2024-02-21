import Link from "next/link";
import React from "react";
import { FC } from "react";
import { iActiveLink } from "../interfaces/components";

const ActiveLink: FC<iActiveLink> = (props) => {
	return !props.href ? (
		<button className={props.className ? props.className + " cursor-pointer" : ""} onClick={props.onClick ? props.onClick : () => {}}>
			{props.children}
		</button>
	) : (
		<Link target={props.target ? props.target : ""} onClick={props.onClick ? props.onClick : () => {}} className={props.className ? props.className : ""} href={props.href ? props.href : "#"}>
			{props.children}
		</Link>
	);
};

export default ActiveLink;
