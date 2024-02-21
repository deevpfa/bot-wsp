import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import React, { Fragment } from "react";

interface SlideOverProps {
	isOpen: boolean;

	onClose: () => void;

	title?: React.ReactNode;

	children: React.ReactNode;
}

export function SlideOver({ isOpen, onClose, title, children }: SlideOverProps) {
	return (
		<Transition.Root
			show={isOpen}
			as={Fragment}
			enter="transform transition ease-in-out duration-300 sm:duration-400"
			enterFrom="opacitiy-0"
			enterTo="opacity-1"
			leave="transform transition ease-in-out duration-300 sm:duration-400"
			leaveFrom="opacity-1"
			leaveTo="opacity-0"
		>
			<div className="fixed inset-0 z-30 bg-black bg-opacity-60 backdrop-blur-sm transition-all">
				<div className="fixed inset-0 overflow-hidden">
					<div className="absolute inset-0 overflow-hidden">
						<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
							<Dialog as="div" className="relative z-50" onClose={onClose}>
								<div className="fixed inset-0 overflow-hidden">
									<div className="absolute inset-0 overflow-hidden">
										<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
											<Transition.Child
												as={Fragment}
												enter="transform transition ease-in-out duration-300 sm:duration-400"
												enterFrom="translate-x-full"
												enterTo="translate-x-0"
												leave="transform transition ease-in-out duration-300 sm:duration-400"
												leaveFrom="translate-x-0"
												leaveTo="translate-x-full"
											>
												<Dialog.Panel className="pointer-events-auto w-screen max-w-3xl h-full flex flex-col overflow-y-scroll bg-white shadow-xl py-6">
													{title && (
														<header className="flex items-center justify-between gap-3 px-4 sm:px-6">
															{title && <Dialog.Title className="text-lg font-medium text-gray-900">{title}</Dialog.Title>}

															<IconButton size="sm" className="rounded-full" variant="text" color="gray" onClick={onClose}>
																<span className="sr-only">Close panel</span>
																<XMarkIcon className="h-6 w-6" aria-hidden="true" />
															</IconButton>
														</header>
													)}
													{children}
												</Dialog.Panel>
											</Transition.Child>
										</div>
									</div>
								</div>
							</Dialog>
						</div>
					</div>
				</div>
			</div>
		</Transition.Root>
	);
}
