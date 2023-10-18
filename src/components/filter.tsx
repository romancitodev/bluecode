import React from 'react';

type Positions = {
	left?: boolean;
	right?: boolean;
	center?: boolean;
	full?: boolean;
};

type FilterProps = {
	placeholder: string;
} & Positions;

export function Filter({
	placeholder,
	left,
	right,
	center,
	full,
}: FilterProps) {
	let positionStyles = [
		left && 'border-l-2 border-t-2 border-b-2 rounded-l-xl',
		right && 'border-r-2 border-t-2 border-b-2 rounded-r-xl',
		center && 'border-2',
		full && 'border-2',
	]
		.filter(Boolean)
		.join(' ');

	positionStyles += ' border-zinc-400 hover:border-zinc-600 ';

	const style = `px-5 py-1 bg-neutral-100 ${positionStyles}`;

	return <input type='text' placeholder={placeholder} className={style} />;
}
