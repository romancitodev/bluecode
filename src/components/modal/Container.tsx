import React from 'react';

type Props = {
	children: React.ReactNode;
};
export function Container({ children }: Props) {
	return (
		<div className='bg-white max-w-[1000px]
		sm:max-w-[300px] sm:max-h-[450px]
		md:max-w-[500px] md:max-h-[500px]
		lg:max-w-[800px] lg:max-h-[550px]
		xl:max-w-[900px] xl:max-h-[600px]
		2xl:max-w-[1000px] 2xl:max-h-[700px]

		w-full shadow-lg rounded-2xl grid gap-5 p-10 justify-between'>
			{children}
		</div>
	);
}
