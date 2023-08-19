import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { iStepsProps } from "../interfaces/components";

export const Steps = (props: iStepsProps[]) => {
	return (
		<div className="mt-10 pb-12 sm:pb-16">
			<div className="relative">
				<div className="relative mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-4xl">
						<dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
							{props.map((step, index) => {
								return (
									<div className="flex flex-col justify-evenly border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r" key={index}>
										<div className="order-1 mt-2 text-lg leading-6 mb-1 text-gray-500">{step.stepTitle}</div>
										<div className="order-2 flex items-center justify-center mt-1">
											{step.checked ? (
												<CheckCircleIcon className="order-2 h-6 w-6 text-success" />
											) : (
												<>
													<p className="text-sm -mt-px text-secondary">+</p>
													<p className="mr-1 ml-px text-sm font-bold tracking-tight text-secondary">{step.stepValue}</p>
													<CurrencyDollarIcon className="mr-1 h-5 w-5 flex-shrink-0 text-gray-400 lg:block" />
												</>
											)}
										</div>
									</div>
								);
							})}
						</dl>
					</div>
				</div>
			</div>
		</div>
	);
};
