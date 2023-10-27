type Props = { children: React.ReactNode; font?: string };
export function Group({ children, font }: Props) {
	return (
		<div
			className={`w-full h-full grid grid-cols-2 justify-between gap-5 ${
				font ? `font-${font}` : ''
			}`}
		>
			{children}
		</div>
	);
}
