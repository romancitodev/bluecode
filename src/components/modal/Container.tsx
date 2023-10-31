import React from 'react';

type Props = {
	children: React.ReactNode;
};
export function Container({ children }: Props) {
	return (
		<div className='bg-white max-w-[900px] sm:max-h-[300px] md:max-h-[500px] lg:max-h-[800px] w-full h-full shadow-lg rounded-2xl grid gap-5 p-10 justify-between'>
			{children}
		</div>
	);
}
