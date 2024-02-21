import React from "react";
import { DynamicInputProps } from "@/interfaces/components";
import { TextField } from "@/modules/form";
import { useTranslation } from "react-i18next";

const Country = ({ name, control, countryCode }: DynamicInputProps) => {
	const { t } = useTranslation("global");

	return <TextField name={name} control={control} label={t(`inputs.${countryCode}.country`) as any} />;
};

export default Country;
