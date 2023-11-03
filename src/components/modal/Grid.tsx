import { HTMLAttributes } from "react";

type Props = {
	children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export function Grid({ children, ...props }: Props) {
	return (
		<div className='grid gap-5 w-full h-full' {...props}>
			{children}
		</div>
	);
}
