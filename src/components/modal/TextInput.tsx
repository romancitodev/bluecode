type Props = {
	placeholder?: string;
	full?: boolean;
};

export function TextInput({ placeholder, full }: Props) {
	return (
		<input
			placeholder={placeholder}
			className={`bg-zinc-100 rounded-xl p-2 border-2 border-zinc-500 h-16 ${ full ? 'col-span-full' : 'col-span-1/2'}`}
			type='text'
		/>
	);
}
