import { CircleStackIcon, Square3Stack3DIcon, InboxIcon ,Cog6ToothIcon  } from "@heroicons/react/20/solid";
import { Paths } from "./Paths";
import { iNavigation } from "../interfaces/global";
import { classNames } from "@/functions/classNames";

export const navigation: iNavigation[] = [
	{
		id: "1",
		name: "dashboard",
		Icon: ({classNames}) => <Square3Stack3DIcon className={'h-5 w-5' + classNames} aria-hidden="true" />,
		description: "dashboard-description",
		href: Paths.dashboard,
		color: "primary",
		current: false,
	},
	{
		id: "2",
		name: "templates",
		Icon: ({classNames}) => <InboxIcon className={'h-5 w-5' + classNames} aria-hidden="true" />,
		description: "dashboard-description",
		href: Paths.templates,
		color: "primary",
		current: false,
	},
	{
		id: "3",
		name: "interactions",
		Icon: ({classNames}) => <CircleStackIcon className={'h-5 w-5' + classNames} aria-hidden="true" />,
		description: "dashboard-description",
		href: Paths.interactions,
		color: "primary",
		current: false,
	},
	{
		id: "4",
		name: "account",
		Icon: ({classNames}) => <Cog6ToothIcon className={'h-5 w-5' + classNames} aria-hidden="true" />,
		description: "dashboard-description",
		href: Paths.account,
		color: "primary",
		current: false,
	},
]