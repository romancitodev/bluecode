import { X } from 'lucide-react';
import { MouseEvent } from 'react';

type Props = {
	value: string;
	onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export function Tag({ value, onClick }: Props) {
	return (
		<div className='w-[150px] px-5 h-full flex content-center items-center justify-between border-2 border-zinc-400 bg-zinc-100 rounded-xl hover:border-zinc-700 hover:bg-zinc-200/75 transition-all duration-250'>
			{value}
			<button onClick={onClick} type='button'>
				<X className='hover:text-red-500 transition-colors duration-250' />
			</button>
		</div>
	);
}
