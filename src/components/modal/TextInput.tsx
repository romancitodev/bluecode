type Props = {
	placeholder?: string;
	full?: boolean;
};

export function TextInput({ placeholder, full }: Props) {
	return (
		<input
			placeholder={placeholder}
			className={`border-2 border-zinc-400 rounded-xl bg-neutral-300 bg-opacity-25 placeholder:neutral-500 hover:border-neutral-600 py-2 px-4 text-[19px] transition-all ${
				full ? 'col-span-full' : 'col-span-1/2'
			}`}
			type='text'
		/>
	);
}
