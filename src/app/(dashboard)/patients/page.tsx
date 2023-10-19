'use client';

import { Add } from '@/components/add';
import { Filter } from '@/components/filter';
import { Title } from '@/components/title';
import { Suspense, useState } from 'react';
import { RaceBy } from '@uiball/loaders';
import { Cards } from '@/components/cards';

type Form = { name: string | null; dni: string | null };

export default function Patients() {
	const [filter, setFilter] = useState<Form>({ name: null, dni: null });
	const [cards, setCards] = useState<Form[]>([]);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		ctx: keyof Form,
	) => {
		const { value } = e.target;
		setFilter(old => {
			return { ...old, [ctx]: value };
		});
	};

	return (
		<div className='grid gap-10'>
			<Title text='Pacientes' />
			<div className='grid w-full h-full gap-y-10 m-auto px-40'>
				<div className='flex justify-between w-full'>
					<div className='flex h-full w-[200px]'>
						<Add />
					</div>
					<div className='flex h-16'>
						<Filter
							placeholder='Filter by name'
							left
							full
							onChange={e => {
								handleChange(e, 'name');
							}}
						/>
						<Filter
							placeholder='Filter by DNI'
							right
							onChange={e => {
								handleChange(e, 'dni');
							}}
						/>
					</div>
				</div>
				<Suspense
					fallback={
						<div className='grid w-full h-[500px] m-auto justify-center place-content-center'>
							<RaceBy lineWeight={5} speed={1.4} size={500} color='#2A26EA' />
						</div>
					}
				>
					<div className='grid w-full h-full gap-y-10'>
						<Cards />
					</div>
				</Suspense>
			</div>
		</div>
	);
}
