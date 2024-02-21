import React from "react";

interface CaseProps {
	expect?: any | Array<any> | ((value: any) => boolean);

	default?: boolean;

	children: React.ReactNode;
}

export function Case({ children }: CaseProps) {
	return <>{children}</>;
}
