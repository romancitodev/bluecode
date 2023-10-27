type Props = {
	placeholder?: string;
};

export function TextInput({ placeholder }: Props) {
	return (
		<input
			placeholder={placeholder}
			className='bg-zinc-100 rounded-xl p-2 border-2 border-zinc-500 w-full h-16'
			type='text'
		/>
	);
}
