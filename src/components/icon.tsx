import { ReactNode } from 'react';

type Props = { children: ReactNode; selected?: boolean };

export function Icon({ children, selected }: Props) {
	return (
		<div
			className={
				selected
					? 'w-[70px] h-[55px] py-2.5 border-b-2 border-indigo-700 justify-between items-center inline-flex'
					: 'w-[70px] h-[55px] py-2.5 justify-between items-center inline-flex'
			}
		>
			{children}
		</div>
	);
}
