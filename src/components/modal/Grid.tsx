type Props = {
	children: React.ReactNode;
};

export function Grid({ children }: Props) {
	return <div className='grid gap-5 w-full h-full'>{children}</div>;
}