type Props = {
	placeholder?: string;
};

export function TagInput({ placeholder }: Props) {
	return (
		<search className='bg-zinc-100 rounded-xl p-2 border-2 border-zinc-500 w-1/3 max-h-20 h-20' />
	);
}
