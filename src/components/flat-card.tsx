import { Info } from '@/icons/small/info';
import { SmallIcon } from './small-icon';
import { Account } from '@/icons/small/account';
import { Modify } from '@/icons/modify';
import { Delete } from '@/icons/delete';

type Props = { name: string; dni: string };

export function Card({ name, dni }: Props) {
	return (
		<div className='flex justify-between w-full shadow-lg rounded-2xl border-2 border-zinc-300 py-5 px-10 m-auto text-[18px] font-medium animate-fade'>
			<div className='flex justify-between 2xl:gap-40 xl:gap-20 lg:gap-12 md:gap-8 sm:gap-4'>
				<div className='flex gap-5 h-max max-w-2xl w-max text-left items-center'>
					<SmallIcon>
						<Account />
					</SmallIcon>
					<p className='2xl:w-[300px] xl:w-[250px] lg:w-[200px] md:w-[150px] sm:w-[100px]'>
						{name}
					</p>
				</div>
				<div className='flex justify-start gap-5 h-max text-center items-center'>
					<SmallIcon>
						<Info />
					</SmallIcon>
					<p className='w-max'>{dni}</p>
				</div>
			</div>
			<div className='flex justify-between w-max gap-10'>
				<button type='button'>
					<SmallIcon>
						<Modify />
					</SmallIcon>
				</button>
				<button type='button'>
					<SmallIcon>
						<Delete />
					</SmallIcon>
				</button>
			</div>
		</div>
	);
}
