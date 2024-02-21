import Skeleton from "@/components/Skeleton";
import React from "react";
import { Table } from "./table";
import { TableHead } from "./table-head";
import { TableRow } from "./table-row";
import { TableCol } from "./table-col";
import { TableBody } from "./table-body";

interface LoadingTableProps {
	searcheable?: boolean;

	exportable?: boolean;

	leftContent?: React.ReactNode;

	rightContent?: React.ReactNode;

	pagination?: boolean;
}

export function LoadingTable({ exportable, searcheable, pagination, leftContent, rightContent }: LoadingTableProps) {
	return (
		<Table data={[1, 2, 3]} searchable={searcheable} exportable={exportable} pagination={pagination} leftContent={leftContent} rightContent={rightContent}>
			<TableHead>
				<TableRow>
					<TableCol as="th" value={<Skeleton classNames="flex-1" columns={1} />} />
					<TableCol as="th" value={<Skeleton classNames="flex-1" columns={1} />} />
					<TableCol as="th" value={<Skeleton classNames="flex-1" columns={1} />} />
					<TableCol as="th" value={<Skeleton classNames="flex-1" columns={1} />} />
					<TableCol as="th" value={<Skeleton classNames="flex-1" columns={1} />} />
				</TableRow>
			</TableHead>
			<TableBody>
				{(id) => (
					<TableRow key={id}>
						<TableCol>
							<Skeleton columns={1} />
						</TableCol>
						<TableCol>
							<Skeleton columns={1} />
						</TableCol>
						<TableCol>
							<Skeleton columns={1} />
						</TableCol>
						<TableCol>
							<Skeleton columns={1} />
						</TableCol>
						<TableCol>
							<Skeleton columns={1} />
						</TableCol>
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
}
