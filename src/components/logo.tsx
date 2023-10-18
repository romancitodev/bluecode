import React, { ReactElement, ReactNode } from 'react';
import { Logo as Icon } from '@/icons/logo';

export function Logo() {
	return (
		<div className='w-[70px] h-[70px] py-2.5 justify-center items-center inline-flex'>
			<Icon />
		</div>
	);
}
