'use client';

import { Add } from '@/components/add';
import { Filter } from '@/components/filter';
import { Title } from '@/components/title';
import { Suspense, useCallback, useRef, useState } from 'react';
import { RaceBy } from '@uiball/loaders';
import { PatientCards } from '@/components/patientCard';
import { useFilter } from '@/hooks/filter';
import debounce from 'just-debounce-it';

type Form = { name: string | null; dni: string | null };

export default function Patients() {
	const { filter, setFilter } = useFilter();

	const debouncedSetFilter = useCallback(
		debounce((f: string, ctx: keyof Form): void => {
			setFilter(old => {
				return { ...old, [ctx]: f };
			});
			console.log(filter);
		}, 1000),
		[filter],
	);

	return (
		<div className='grid gap-10 p-6'>
			<Title text='Pacientes' />

			<div className='grid w-full h-full gap-y-10 m-auto px-20'>
				<div className='flex justify-between w-full'>
					<div className='flex h-full w-[200px]'>
						<Add />
					</div>
					<div className='flex h-16'>
						<Filter
							placeholder='Filter by name'
							left
							full
							value={filter.name}
							onChange={e => debouncedSetFilter(e.target.value, 'name')}
						/>
						<Filter
							placeholder='Filter by DNI'
							right
							value={filter?.dni}
							onChange={e => debouncedSetFilter(e.target.value, 'dni')}
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
						<PatientCards />
					</div>
				</Suspense>
			</div>
		</div>
	);
}
