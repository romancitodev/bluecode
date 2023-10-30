'use client';

import { Title } from '@/components/title';
import { Add } from '@/components/add';
import { Filter } from '@/components/filter';
import RaceBy from '@uiball/loaders/dist/components/RaceBy';
import { useCallback, useEffect } from 'react';
import { PersonalCards } from '@/components/personalCards';
import { useFilter } from '@/hooks/filter';
import { usePersonal } from '@/hooks/personal';
import debounce from 'just-debounce-it';

type Form = { name: string; dni: number };

export default function Personal() {
	const { filter, setFilter } = useFilter();
	const { personal, getPersonal, loading } = usePersonal();

	const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value: name } = e.target;
		const new_filter = { ...filter, name };
		setFilter(new_filter);
		debouncedSetFilter(new_filter);
	};

	const handleDni = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value: dni } = e.target;
		const new_filter = { ...filter, dni: Number(dni) };
		setFilter(new_filter);
		debouncedSetFilter(new_filter);
	};

	const debouncedSetFilter = useCallback(
		debounce((filter: Form) => {
			getPersonal({ ...filter });
		}, 1000),
		[],
	);

	useEffect(() => {
		getPersonal({ name: '', dni: 0 });
	}, []);

	return (
		<div className='grid m-0'>
			<Title text='Personal' />

			<div className='grid w-full h-full gap-y-10 m-auto px-20'>
				<div className='flex justify-between w-full'>
					<div className='flex h-full w-[200px]'>
						<Add />
					</div>

					<div className='flex h-16'>
						<Filter placeholder='Filter by name' left onChange={handleName} />
						<Filter placeholder='Filter by DNI' full right onChange={handleDni} />
					</div>
				</div>
				{loading ? (
					<div className='grid w-full h-[500px] m-auto justify-center place-content-center'>
						<RaceBy lineWeight={5} speed={1.4} size={500} color='#2A26EA' />
					</div>
				) : (
					<div className='grid w-full h-full gap-y-10'>
						<PersonalCards personal={personal} />
					</div>
				)}
			</div>
		</div>
	);
}

// 