import { Add } from '@/components/add';
import { Filter } from '@/components/filter';
import { Title } from '@/components/title';

export default function Patients() {
	return (
		<div className='grid gap-10'>
			<Title text='Pacientes' />
			<div className='grid w-full h-full gap-y-10 m-auto px-20'>
				<div className='flex justify-between w-full '>
					<div className='flex h-full w-[200px]'>
						<Add />
					</div>
					<div className='flex h-16'>
						<Filter placeholder='Filter by name' left full />
						<Filter placeholder='Filter by DNI' right />
					</div>
				</div>
				<div className=' w-full h-full bg-yellow-500'>a</div>
			</div>
		</div>
	);
}
