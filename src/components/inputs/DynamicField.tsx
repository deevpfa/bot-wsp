import React from "react";
import { DynamicInputProps } from "@/interfaces/components";
import { useTranslation } from "react-i18next";
import { TextField } from "@/modules/form";

const Dynamic = ({ control, countryCode, name }: DynamicInputProps) => {
	const { t } = useTranslation("global");

	return (
		<TextField
			name={name}
			control={control}
			label={t(`inputs.${countryCode.toLowerCase()}.${name.toLowerCase()}`) as any}
			hasFeedback
			errorTip={(error) => {
				if (!error) return null;
				if (error.required) return t("errors.required", { field: t(`inputs.${countryCode.toLowerCase()}.${name.toLowerCase()}`) });
				if (error.pattern) return t("errors.pattern");
			}}
		/>
	);
};

export default Dynamic;
