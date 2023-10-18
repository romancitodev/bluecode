import { Add } from '@/components/add';
import { Filter } from '@/components/filter';
import { Title } from '@/components/title';

export default function Patients() {
	return (
		<div className='grid gap-10'>
			<Title text='Pacientes' />
			<div className='grid w-full'>
				<div className='flex gap-x-5 justify-start'>
					<div className='flex h-16'>
						<Filter placeholder='Filter by name' left full />
						<Filter placeholder='Filter by DNI' right />
					</div>
					<div className='flex h-full w-[200px]'>
						<Add />
					</div>
				</div>
			</div>
		</div>
	);
}
