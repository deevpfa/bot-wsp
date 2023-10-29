import { FC } from "react";

export const Layout: FC<any> = ({ children }) => {

	return (
		<>
			<div className="min-h-full">
				<div className='z-0 m-auto absolute top-6 left-7 flex justify-center'>
					<div className='absolute m-auto top-0 -left-3 right-0 bottom-0 flex flex-col mt-4'>
						<span className='text-sm'>Elecciones</span>
						<span className='text-xs'>2023</span>
					</div>
				</div>
				{children}
			</div>
		</>
	);
};
