import { Add as AddIcon } from '@/icons/add';

type Props = {
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
export function Add({ onClick }: Props) {
	return (
		<button
			type='button'
			onClick={onClick}
			className='flex border-2 rounded-xl border-zinc-400 hover:border-zinc-600 bg-zinc-100 justify-center items-center w-full h-full'
		>
			<AddIcon />
		</button>
	);
}
