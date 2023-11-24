type Props = { children: React.ReactNode; font?: string; className?: string };
export function Group({ children, font, className }: Props) {
	return (
		<div
			className={
				className ??
				`w-full h-full flex justify-between gap-5 ${font ? `font-${font}` : ''}`
			}
		>
			{children}
		</div>
	);
}
