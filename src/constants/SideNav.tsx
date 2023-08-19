import { Square3Stack3DIcon } from "@heroicons/react/20/solid";
import { BuildingOfficeIcon, CogIcon, HomeIcon, PhoneIcon, QuestionMarkCircleIcon, ShieldCheckIcon, TruckIcon, UserIcon, UsersIcon } from "@heroicons/react/24/outline";
import { Paths } from "./Paths";
import { iNavigation } from "../interfaces/global";
import { classNames } from "@/functions/classNames";

export const navigation: iNavigation[] = [
	{
		id: "1",
		name: "dashboard",
		Icon: ({ classNames }) => (
			<i className={`${classNames}`}>
				{" "}
				<i className="path1"></i> <i className="path2"></i>{" "}
			</i>
		),
		description: "dashboard-description",
		href: Paths.dashboard,
		color: "primary",
		current: false,
	},
	{
		id: "2",
		name: "people",
		Icon: ({ classNames }) => (
			<i className={`${classNames} ki-profile-user`}>
				{" "}
				<i className="path1"></i> <i className="path2"></i> <i className="path3"></i> <i className="path4"></i>{" "}
			</i>
		),
		description: "people-description",
		href: Paths.people,
		color: "sky-500",
		current: false,
	},
	{
		id: "3",
		name: "companies",
		Icon: ({ classNames }) => (
			<i className={`${classNames}  ki-cube-2`}>
				{" "}
				<i className="path1"></i> <i className="path2"></i> <i className="path3"></i>{" "}
			</i>
		),
		description: "companies-description",
		href: Paths.companies,
		color: "purple",
		current: false,
	},
	{
		id: "4",
		name: "vehicles",
		Icon: ({ classNames }) => (
			<i className={`${classNames} ki-car-2`}>
				{" "}
				<i className="path1"></i> <i className="path2"></i> <i className="path3"></i>
				<i className="path4"></i>
				<i className="path5"></i>
				<i className="path6"></i>{" "}
			</i>
		),
		description: "vehicles-description",
		href: Paths.vehicles,
		color: "ocean",
		current: false,
	},
	{
		id: "5",
		name: "phones",
		Icon: ({ classNames }) => (
			<i className={`${classNames} ki-whatsapp`}>
				{" "}
				<i className="path1"></i> <i className="path2"></i>{" "}
			</i>
		),
		description: "phones-description",
		href: Paths.phones,
		color: "warning",
		current: false,
	},
	{
		id: "6",
		name: "bank",
		Icon: ({ classNames }) => (
			<i className={`${classNames} ki-bank`}>
				{" "}
				<i className="path1"></i> <i className="path2"></i>{" "}
			</i>
		),
		description: "bank-description",
		href: Paths.bank,
		color: "success",
		current: false,
	},
];
export const secondaryNavigation: iNavigation[] = [
	// {
	//     id: "6",
	//     name: 'account_settings',
	//     href: Paths.bank,
	//     Icon: ({classNames}) => <i className={`${classNames}`}> <i className="path1"></i> <i className="path2"></i> </i> ,
	//     description:"settings-description",
	//     color:"primary",
	//     current: false
	// },
	// {
	//     id: "7",
	//     name: 'help',
	//     href: '#',
	//     Icon: QuestionMarkCircleIcon,
	//     description:"help-description",
	//     current: false
	// },
	// {
	//     id: "8",
	//     name: 'privacy',
	//     href: '#',
	//     Icon: ShieldCheckIcon,
	//     description:"privacy-description",
	//     current: false
	// },
];
