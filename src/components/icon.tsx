import React, { ReactElement } from 'react';

type Props = { children: ReactElement; selected?: boolean };

export function Icon({ children, selected }: Props) {
	const selectedColor = '#2A26EA';

	return (
		<div
			className={
				selected
					? 'w-[70px] h-[70px] py-2.5 border-b-4 border-[#2A26EA] justify-center items-center inline-flex'
					: 'w-[70px] h-[70px] py-2.5 justify-center items-center inline-flex hover:border-b-4 hover:border-[#2A26EA] transition-all'
			}
		>
			{React.cloneElement(children, {
				stroke: selected ? selectedColor : '#4A4A4A',
			})}
		</div>
	);
}
