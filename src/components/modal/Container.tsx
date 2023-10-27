import React from 'react';

type Props = {
	children: React.ReactNode;
};
export function Container({ children }: Props) {
	return (
		<div className='bg-white max-w-[750px] max-h-[700px] w-full h-full shadow-lg rounded-2xl grid gap-5 content-between m-auto p-10'>
			{children}
		</div>
	);
}
