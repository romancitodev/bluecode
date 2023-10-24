'use client';

import { Add } from '@/components/add';
import { Filter } from '@/components/filter';
import { Title } from '@/components/title';
import { useCallback } from 'react';
import { RaceBy } from '@uiball/loaders';
import { PatientCards } from '@/components/patientCards';
import { useFilter } from '@/hooks/filter';
import debounce from 'just-debounce-it';
import { usePatients } from '@/hooks/patients';

type Form = { name: string; dni: string };

export default function Patients() {
	const { filter, setFilter } = useFilter();
	const { patients, getPatients, loading } = usePatients();

	const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value: name } = e.target;
		const new_filter = { ...filter, name };
		setFilter(new_filter);
		debouncedSetFilter(new_filter);
	};

	const handleDni = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value: dni } = e.target;
		const new_filter = { ...filter, dni };
		setFilter(new_filter);
		debouncedSetFilter(new_filter);
	};

	const debouncedSetFilter = useCallback(
		debounce((filter: Form) => {
			console.log(filter);
			getPatients({ ...filter });
		}, 1000),
		[],
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
							onChange={handleName}
						/>
						<Filter
							placeholder='Filter by DNI'
							right
							value={filter?.dni}
							onChange={handleDni}
						/>
					</div>
				</div>
				{loading ? (
					<div className='grid w-full h-[500px] m-auto justify-center place-content-center'>
						<RaceBy lineWeight={5} speed={1.4} size={500} color='#2A26EA' />
					</div>
				) : (
					<PatientCards patients={patients} />
				)}
			</div>
		</div>
	);
}
