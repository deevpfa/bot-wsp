import { Dialog, DialogBody, DialogFooter } from "@material-tailwind/react";
import React from "react";
import { useTranslation } from "react-i18next";
import Button from "./MyButton";
import { Information3Icon } from "./icons/information-3";
import { Question2Icon } from "./icons/question-2-icon";
import { CrossCircleIcon } from "./icons/cross-circle-icon";
import { CheckCircleIcon } from "./icons/check-circle-icon";

const GetIcon = ({ type }: { type: "info" | "warning" | "error" | "success" }) => {
	switch (type) {
		case "info":
			return <Question2Icon className="text-9xl text-blue-500 mb-2" />;
		case "warning":
			return <Information3Icon className="text-9xl text-red-500 mb-2" />;
		case "error":
			return <CrossCircleIcon className="text-9xl text-red-500 mb-2" />;
		case "success":
			return <CheckCircleIcon className="text-9xl text-green-500 mb-2" />;
		default:
			return <Information3Icon className="text-9xl text-blue-500 mb-2" />;
	}
};

interface ModalConfirmProps {
	isOpen: boolean;

	title: React.ReactNode;

	label: React.ReactNode;

	type?: "info" | "warning" | "error" | "success";

	onConfirm: () => void;

	onClose: () => void;

	isLoading?: boolean;

	withSpinner?: boolean;
}

export function ModalConfirm({ isOpen, onClose, onConfirm, type, label, title, isLoading, withSpinner = true }: ModalConfirmProps) {
	const { t } = useTranslation("global");

	return (
		<Dialog size="xs" open={isOpen} handler={onClose}>
			<DialogBody className="text-center">
				{/* {type === "warning" && <Information3Icon className="text-9xl text-red-500 mb-2" />} */}
				<GetIcon type={type || "info"} />

				<h1 className="text-xl">{title}</h1>
			</DialogBody>
			<DialogFooter className="flex gap-4 flex-nowrap items-center justify-between">
				<Button fullWidth disabled={isLoading} variant="outlined" color="gray" onClick={onClose}>
					{t("global.cancel")}
				</Button>
				<Button fullWidth isFetching={isLoading} withSpinner={withSpinner} color="primary" onClick={onConfirm}>
					{label}
				</Button>
			</DialogFooter>
		</Dialog>
	);
}
