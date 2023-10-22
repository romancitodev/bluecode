type State = {
	open?: boolean;
	occupied?: boolean;
};

export function AreaState({ open, occupied }: State) {
	let StateColor = [open && '#43FF3F', occupied && '#FF0A0A']
		.filter(Boolean)
		.join(' ');

	return (
		<svg
			width='30'
			height='30'
			viewBox='0 0 30 30'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<circle
				cx='15'
				cy='15'
				r='14'
				fill={StateColor}
				fill-opacity='0.5'
				stroke={StateColor}
				stroke-width='2'
			/>
		</svg>
	);
}
