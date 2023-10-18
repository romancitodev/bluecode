import { Add as AddIcon } from '@/icons/add';

export function Add() {
	return (
		<button
			type='button'
			className='flex border-2 rounded-xl border-zinc-400 hover:border-zinc-600 bg-zinc-100 justify-center items-center w-full h-full'
		>
			<AddIcon />
		</button>
	);
}
