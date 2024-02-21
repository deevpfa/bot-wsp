import React from "react";
import { DynamicInputProps } from "@/interfaces/components";
import { useTranslation } from "react-i18next";
import { TextField } from "@/modules/form";

const BirthDate = ({ name, control, countryCode }: DynamicInputProps) => {
	const { t } = useTranslation("global");

	return <TextField name={name} type="date" control={control} label={t(`inputs.${countryCode}.birthDate`) as any} />;
};

export default BirthDate;
