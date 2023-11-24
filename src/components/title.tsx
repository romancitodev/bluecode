type Props = { text: string };
export function Title({ text }: Props) {
	return (
		<h1 className='font-bold text-[60px] text-zinc-700 w-full gap-10 p-6 pl-20'>
			{text}
		</h1>
	);
}
