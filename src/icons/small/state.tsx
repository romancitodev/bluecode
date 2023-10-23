type Variants = 'open' | 'occupied';

type Props = {
	variant: Variants;
};

export function AreaState({ variant }: Props) {
	const color = variant === 'open' ? '#43FF3F' : '#FF0A0A';
	return (
		<svg
			width='30'
			height='30'
			viewBox='0 0 30 30'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<title>icon</title>
			<circle
				cx='15'
				cy='15'
				r='14'
				fill={color}
				fill-opacity='0.5'
				stroke={color}
				stroke-width='2'
			/>
		</svg>
	);
}
