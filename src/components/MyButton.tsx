import React from "react";
import { Spinner, Button as Mbutton, ButtonProps as MButtonProps } from "@material-tailwind/react";
import { classNames } from "@/functions/classNames";
import { Kick } from "@/interfaces";

export interface ButtonProps extends Kick<MButtonProps, "color" | "ref"> {
	/** Color del boton */
	color?: MButtonProps["color"] | "primary" | "secondary";
	/** Referencia del buton */
	ref?: React.Ref<HTMLButtonElement>;
	/** Activa la transicion */
	isFetching?: boolean;
	/** Si hay una transición determina si aparece el spinner */
	withSpinner?: boolean;
}

const Button = ({ disabled, isFetching = false, withSpinner = true, color, ref, className, children, ...props }: ButtonProps) => {
	return (
		<Mbutton ref={ref} disabled={isFetching || disabled} className={classNames("flex justify-center items-center", className)} color={color as any} {...props}>
			{children}
			{isFetching && withSpinner && (
				<Spinner
					width={props.size == "md" || props.size == "lg" ? 18 : 12}
					height={props.size == "md" || props.size == "lg" ? 18 : 12}
					className="text-gray-200 animate-spin ml-2"
				/>
			)}
		</Mbutton>
	);
};

export default Button;
