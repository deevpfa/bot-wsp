import React, { useMemo } from "react";
import { Case } from "./case";

interface SwitchCaseProps {
	value: any;

	children: React.ReactNode;
}

export function SwitchCase({ value, children }: SwitchCaseProps) {
	const findValidCase: React.ReactNode = useMemo(() => {
		return React.Children.toArray(children).find((child) => {
			if (!child) return null;
			if (!React.isValidElement(child)) return null;
			if (child.type !== Case) return null;

			const caseValue = child.props.expect;

			if (Array.isArray(caseValue)) {
				if (!caseValue.includes(value)) return null;
			} else if (typeof caseValue === "function") {
				if (!caseValue(value)) return null;
			} else {
				if (caseValue !== value) return null;
			}

			return child;
		});
	}, [value]);

	const findDefaultCase: React.ReactNode = useMemo(() => {
		return React.Children.toArray(children).find((child) => {
			if (!child) return null;
			if (!React.isValidElement(child)) return null;
			if (child.type !== Case) return null;

			const isDefault = child.props.default;

			if (!isDefault) return null;

			return child;
		});
	}, [value]);

	return <>{findValidCase || findDefaultCase}</>;
}
