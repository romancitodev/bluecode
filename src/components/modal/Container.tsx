import React from 'react';

type Props = {
	children: React.ReactNode;
};
export function Container({ children }: Props) {
	return (
		<div className='bg-white max-w-[1000px] sm:max-w-[300px] md:max-w-[500px] lg:max-w-[800px] xl:max-w-[900px] 2xl:max-w-[1000px] w-full max-h-[800px]  sm:max-h-[500px] md:max-h-[600px] lg:max-h-[800px] shadow-lg rounded-2xl grid gap-5 p-10 justify-between'>
			{children}
		</div>
	);
}
