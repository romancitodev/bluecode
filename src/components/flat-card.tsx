import { Info } from '@/icons/small/info';
import { SmallIcon } from './small-icon';
import { Account } from '@/icons/small/account';

type Props = { name: string; dni: string };

export function Card({ name, dni }: Props) {
	return (
		<div className='flex justify-around w-full shadow-lg rounded-2xl border-2 border-zinc-300 py-10 m-auto text-[18px] font-medium'>
			<div className='flex justify-start gap-5 h-max text-center items-center'>
				<SmallIcon>
					<Account />
				</SmallIcon>
				<p>{name}</p>
			</div>
			<div className='flex justify-start gap-5 h-max text-center items-center'>
				<SmallIcon>
					<Info />
				</SmallIcon>
				<p>{dni}</p>
			</div>
			<div className='flex justify-between w-max gap-10'>
				<button type='button'>
				<SmallIcon>
					<Account />
				</SmallIcon>
				</button>
				<button type='button'>
				<SmallIcon>
					<Account />
				</SmallIcon>
				</button>
			</div>
		</div>
	);
}
