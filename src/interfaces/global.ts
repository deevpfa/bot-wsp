export interface iNavigation {
	id: string;
	name: string;
	Icon: React.FC<{ classNames: string }>;
	description: string;
	href: string;
	color: string;
	current: boolean;
}
