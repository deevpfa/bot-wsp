import { Dialog, DialogBody, DialogHeader, DialogProps } from "@material-tailwind/react";
import Button from "./MyButton";
import { classNames } from "@/functions/classNames";
import { Kick } from "@/interfaces";
import { useTranslation } from "react-i18next";

export interface ModalProps extends Kick<DialogProps, "title" | "handler" | "children"> {
	title?: React.ReactNode;
	isFetching?: boolean;
	confirm?: React.ReactNode;
	onClose?: () => void;
	onConfirm: () => void;
	children?: React.ReactNode;
}

export const Modal = ({ isFetching = false, open = false, title, confirm, children, onClose, onConfirm, className, ref, ...restProps }: ModalProps) => {
	const { t } = useTranslation("global");

	return (
		<Dialog handler={() => onClose} open={open} {...restProps}>
			<DialogHeader>{title}</DialogHeader>
			<DialogBody className={classNames(className)}>
				<>{children}</>
				<div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
					<Button type="submit" isFetching={isFetching} className="mt-3 inline-flex w-full justify-center sm:ml-3 sm:w-auto" onClick={() => onConfirm && onConfirm()}>
						{confirm}
					</Button>

					<Button
						disabled={isFetching}
						color="white"
						className="mt-3 inline-flex w-full justify-center sm:ml-3 sm:w-auto ring-1 ring-inset ring-gray-300"
						onClick={onClose}
					>
						{t("global.cancel")}
					</Button>
				</div>
			</DialogBody>
		</Dialog>
	);
};
