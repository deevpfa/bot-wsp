import { classNames } from '@/functions/classNames'
import { CheckIcon } from '@heroicons/react/20/solid'
import { Card, Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react'
import ArrowIcon from './ArrowIcon'
import React from 'react'

interface iProps {
	steps: { name: string, status: 'complete' | 'current' | 'upcoming' }[]
}

export default function Steps({ steps }: iProps) {
	const [open, setOpen] = React.useState(0);

	const handleOpen = (value: number) => setOpen(open === value ? -1 : value);
	return (
		<nav aria-label="Progress">
			<ol role="list" className="overflow-hidden">
				{steps.map((step, stepIdx: number) => (
					<li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative')}>
						{step.status === 'complete' ? (
							<>
								{stepIdx !== steps.length - 1 ? (
									<div className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-indigo-600" aria-hidden="true" />
								) : null}
								<div className="group relative flex items-start">
									<span className="flex h-9 items-center">
										<span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
											<CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />
										</span>
									</span>
									<span className="ml-4 flex min-w-0 flex-col">
										<>
											<Card key={step.name} className='my-2 cols'>
												<Accordion open={open === stepIdx} icon={<ArrowIcon id={stepIdx} open={open} key={stepIdx} />}>
													<AccordionHeader className='p-4 border-b-0 text-md' onClick={() => handleOpen(stepIdx)}>{step.name}</AccordionHeader>
													<AccordionBody className="pt-2 pb-4 px-4 flex">
													</AccordionBody>
												</Accordion>
											</Card>
										</>
									</span>
								</div>
							</>
						) : step.status === 'current' ? (
							<>
								{stepIdx !== steps.length - 1 ? (
									<div className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" aria-hidden="true" />
								) : null}
								<div className="group relative flex items-start" aria-current="step">
									<span className="flex h-9 items-center" aria-hidden="true">
										<span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white">
											<span className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
										</span>
									</span>
									<span className="ml-4 flex min-w-0 flex-col">
									<>
											<Card key={step.name} className='my-2 cols'>
												<Accordion open={open === stepIdx} icon={<ArrowIcon id={stepIdx} open={open} key={stepIdx} />}>
													<AccordionHeader className='p-4 border-b-0 text-md' onClick={() => handleOpen(stepIdx)}>{step.name}</AccordionHeader>
													<AccordionBody className="pt-2 pb-4 px-4 flex">
													</AccordionBody>
												</Accordion>
											</Card>
										</>
									</span>
								</div>
							</>
						) : (
							<>
								{stepIdx !== steps.length - 1 ? (
									<div className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" aria-hidden="true" />
								) : null}
								<div className="group relative flex items-start">
									<span className="flex h-9 items-center" aria-hidden="true">
										<span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
											<span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
										</span>
									</span>
									<span className="ml-4 flex min-w-0 flex-col">
										<>
											<Card key={step.name} className='my-2 cols'>
												<Accordion open={open === stepIdx} icon={<ArrowIcon id={stepIdx} open={open} key={stepIdx} />}>
													<AccordionHeader className='p-4 border-b-0 text-md' onClick={() => handleOpen(stepIdx)}>{step.name}</AccordionHeader>
													<AccordionBody className="pt-2 pb-4 px-4 flex">
													</AccordionBody>
												</Accordion>
											</Card>
										</>
									</span>
								</div>
							</>
						)}
					</li>
				))}
			</ol>
		</nav>
	)
}
