import { FC, Fragment, PropsWithChildren, useState } from "react";
import Image from "next/image";
import LogoHeader from "../../../public/images/IsoSinFondo.png";
import { Dialog, Menu, Transition } from "@headlessui/react";
import empty from "../../../public/images/empty.jpg";
import { Bars3BottomLeftIcon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import { navigation } from "../../constants/SideNav";
import { useRouter } from "next/router";
import ActiveLink from "../../components/ActiveLink";
import { classNames } from "../../functions/classNames";
import { Paths } from "../../constants/Paths";
import { useAuth } from "../../store/useAuth";
import { getTwoFirstLetters } from "@/constants/common";
import { eUserRole } from "@/interfaces/data/user.interface";

const animateValue = (obj: any, start: any, end: any, duration: any) => {
	let startTimestamp: any = null;
	const step = (timestamp: any) => {
		if (!startTimestamp) startTimestamp = timestamp;
		const progress = Math.min((timestamp - startTimestamp) / duration, 1);
		obj.innerHTML = Math.floor(progress * (end - start) + start);
		if (progress < 1) {
			window.requestAnimationFrame(step);
		}
	};
	window.requestAnimationFrame(step);
};

interface iUserNavigation {
	name: string;
	href?: string;
	onClick?: any;
	onlyAdmin: boolean;
}

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const { t } = useTranslation("global");

	const { logout, user } = useAuth();

	const Logout = () => {
		logout();
	};

	const router = useRouter();

	const navigationItems = navigation.map((item) => {
		return {
			...item,
			current: router.query.type ? router.query.type == item.name : router.pathname == item.href,
		};
	});
	// const secondaryNavigationItems = secondaryNavigation.map((item) => {
	//   return {
	//     ...item,
	//     current: router.pathname == item.href,
	//   }
	// })

	const userNavigation: iUserNavigation[] = [
		// { name: "your-profile", href: Paths.profile, onlyAdmin: false },
		// { name: "my_account", href: Paths.account, onlyAdmin: true },
		// { name: "movements", href: Paths.movements, onlyAdmin: false },
		// { name: "billing", href: Paths.billing, onlyAdmin: true },
		{ name: "logout", onClick: Logout, onlyAdmin: false },
	];

	return (
		<>
			<div className="min-h-full">
				<Transition.Root show={sidebarOpen} as={Fragment}>
					<Dialog as="div" className="relative z-10 md:hidden" onClose={setSidebarOpen}>
						<Transition.Child
							as={Fragment}
							enter="transition-opacity ease-linear duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="transition-opacity ease-linear duration-300"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<div className="fixed inset-0 bg-black bg-opacity-75" />
						</Transition.Child>

						<div className="fixed inset-0 z-40 flex">
							<Transition.Child
								as={Fragment}
								enter="transition ease-in-out duration-300 transform"
								enterFrom="-translate-x-full"
								enterTo="translate-x-0"
								leave="transition ease-in-out duration-300 transform"
								leaveFrom="translate-x-0"
								leaveTo="-translate-x-full"
							>
								<Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-secondary">
									<Transition.Child
										as={Fragment}
										enter="ease-in-out duration-300"
										enterFrom="opacity-0"
										enterTo="opacity-100"
										leave="ease-in-out duration-300"
										leaveFrom="opacity-100"
										leaveTo="opacity-0"
									>
										<div className="absolute top-0 right-0 -mr-12 pt-2">
											<button type="button" className="ml-1 flex h-10 w-10 items-center justify-center rounded-full " onClick={() => setSidebarOpen(false)}>
												<span className="sr-only">Close sidebar</span>
												<XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
											</button>
										</div>
									</Transition.Child>
									<div className="flex flex-1 flex-col min-h-fit overflow-y-auto bg-secondary">
										<div className="flex flex-1 flex-col pt-5 pb-4">
											<div className="px-4">
												<Image
													// width={125}
													// height={72}
													priority={true}
													src={LogoHeader}
													alt="full-data-pro-logo"
												/>
											</div>
											<nav className="text-blue-700 mt-5 flex flex-1 flex-col" aria-label="Sidebar">
												<div className=" space-y-1 px-2">
													{navigationItems.map(({ Icon, ...item }) => (
														<ActiveLink
															href={item.href}
															key={item.name}
															className={classNames(
																item.current ? `bg-white text-${item.color}` : "text-gray-300 hover:text-white",
																"group flex items-center p-3 text-sm font-semibold rounded-md",
															)}
														>
															<>
																<Icon
																	classNames={classNames(
																		item.current ? `text-${item.color}` : "text-gray-300 group-hover:text-white",
																		"mr-3 flex-shrink-0 text-xl ki-duotone ki-abstract-26",
																	)}
																/>
																{t(`global.${item.name}`)}
															</></ActiveLink>
													))}
												</div>
											</nav>
										</div>
										{/* <div className="flex justify-center items-center flex-col flex-shrink-0 bg-secondary-darken p-4">
											<div>
												<p className="text-2xl font-black text-white" id="credits-number" onClick={(e) => animateValue(e.target, 1000, 2000, 800)}>
													1.000
												</p>
											</div>
											<p className="mt-0 mb-4 text-sm font-medium text-gray-400">{t("layout.available-credits")}</p>
											<ActiveLink href={Paths.buy_credits} className="btn-success text-white block mb-2 w-full font-semibold text-center rounded-md" content={<>{t(["layout.buy-credits"])}</>} />
											<ActiveLink href={Paths.pricing} className="font-normal text-sm text-center text-gray-400 hover:text-white" content={<>{t(["layout.pricing-page"])}</>} />
										</div> */}
									</div>
								</Dialog.Panel>
							</Transition.Child>
							<div className="w-14 flex-shrink-0">{/* Force sidebar to shrink to fit close icon */}</div>
						</div>
					</Dialog>
				</Transition.Root>

				{/* Static sidebar for desktop */}
				<div className="z-10 hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
					{/* Sidebar component, swap this element with another sidebar if you like */}
					<div className="flex flex-1 flex-col min-h-fit overflow-y-auto bg-secondary">
						<div className="flex flex-1 flex-col pt-5 pb-4">
							<div className="px-4">
								<Image
									// width={125}
									// height={72}
									priority={true}
									src={LogoHeader}
									alt="full-data-pro-logo"
								/>
							</div>
							<nav className="mt-5 flex flex-1 flex-col" aria-label="Sidebar">
								<div className="space-y-2 px-2">
									{navigationItems.map(({ Icon, ...item }) => (
										<ActiveLink
											href={item.href}
											key={item.name}
											className={classNames(
												item.current ? `bg-white text-${item.color}` : "text-gray-300 hover:text-white hover:bg-black hover:bg-opacity-20",
												"group flex items-center p-3 text-sm font-semibold rounded-md",
											)}

										>
											<>
												<Icon classNames={classNames(item.current ? `text-${item.color}` : "text-gray-300 group-hover:text-white", "mr-3 flex-shrink-0 text-xl ki-duotone ki-abstract-26")} />
												{t(`global.${item.name}`)}
											</>
										</ActiveLink>
									))}
								</div>
							</nav>
						</div>
						{/* <div className="flex justify-center items-center flex-col flex-shrink-0 bg-secondary-darken p-4">
							<div>
								<p className="text-2xl font-black text-white" id="credits-number" onClick={(e) => animateValue(e.target, 1000, 2000, 800)}>
									1.000
								</p>
							</div>
							<p className="mt-0 mb-4 text-sm font-medium text-gray-400">{t("layout.available-credits")}</p>
							<ActiveLink href={Paths.buy_credits} className="btn-success text-white block mb-2 w-full font-semibold text-center rounded-md" content={<>{t(["layout.buy-credits"])}</>} />
							<ActiveLink href={Paths.pricing} className="font-normal text-sm text-center text-gray-400 hover:text-white" content={<>{t(["layout.pricing-page"])}</>} />
						</div> */}
					</div>
				</div>
				<div className="flex flex-col md:pl-64 z-10 sticky top-0">
					<div className="flex h-16 flex-shrink-0 bg-secondary-darken shadow">
						<button type="button" className="bg-secondary px-4 text-white md:hidden" onClick={() => setSidebarOpen(true)}>
							<span className="sr-only">Open sidebar</span>
							<Bars3BottomLeftIcon className="h-6 w-6 stroke-2" aria-hidden="true" />
						</button>
						<div className="flex flex-1 justify-between px-4">
							<div className="flex flex-1">{/* Empty content for future */}</div>
							<div className="ml-4 flex items-center md:ml-6">
								{/* <button type="button" className="rounded-full p-1 text-gray-300 hover:text-white">
									<span className="sr-only">View help</span>
									<QuestionMarkCircleIcon className="h-6 w-6 stroke-2" aria-hidden="true" />
								</button> */}

								{/* Profile dropdown */}
								<Menu as="div" className="relative ml-3">
									<div>
										<Menu.Button className="flex max-w-xs items-center lg:p-3 text-gray-300 hover:text-white">
											<span className="sr-only">Open user menu</span>
											{/*<Image
                        width={65}
                        height={65}
                        priority={true}
                        className="inline-block h-8 w-8 rounded-full outline-none ring-2 ring-gray-300 ring-offset-2 ring-offset-gray-800"
                        src={user?.avatar ? user.avatar : empty}
                        alt="full-data-pro-logo"
                      />*/}
											<div className="inline-flex items-center justify-center h-8 w-8 outline-none ring-2 ring-gray-300 text-sm font-medium text-white bg-primary-600 rounded-full ring-offset-2 ring-offset-gray-800">
												{/* {getTwoFirstLetters(user?.firstName, user?.lastName)} */}
												{getTwoFirstLetters('Patricio', 'Fara')}
											</div>

											<span className="ml-3  text-sm font-medium lg:block">
												<span className="sr-only">Open user menu for </span>
												{user?.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : user?.email}
											</span>
											<ChevronDownIcon className="ml-1 h-5 w-5 flex-shrink-0 lg:block" aria-hidden="true" />
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="absolute right-0 z-10 mt-2 py-2 px-2 w-48 space-y-1 origin-top-right rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
											{userNavigation.map((item: iUserNavigation, i: number) => (
												<Menu.Item key={t(item.name)}>
													{({ active }) => (
														<>
															{(!item.onlyAdmin || (item.onlyAdmin && user?.role === eUserRole.ADMIN)) && (
																<ActiveLink
																	onClick={item.onClick}
																	href={item.href}
																	key={i}
																	className={classNames(
																		active ? "text-gray-400 disabled" : "menu-nav text-gray-700",
																		"block px-4 py-2 mb-1 text-sm rounded-md font-medium hover:text-primary-500 hover:bg-primary-500 hover:bg-opacity-5",
																	)}
																>{t(`global.${item.name}`)}</ActiveLink>
															)}
														</>
													)}
												</Menu.Item>
											))}
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-1 flex-col md:pl-64">
					<main className="flex-1">
						<div>{children}</div>
					</main>
				</div>
			</div>
		</>
	);
};
