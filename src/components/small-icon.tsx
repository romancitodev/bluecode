import { ReactNode } from 'react';

type Props = { children: ReactNode };
export function SmallIcon({ children }: Props) {
	return (
		<div className='inline-flex w-10 h-10 items-center justify-center m-auto'>
			{children}
		</div>
	);
}
