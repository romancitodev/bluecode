'use client';

import { Title } from '@/components/title';
import { Add } from '@/components/add';
import { Filter } from '@/components/filter';
import { useCallback, useEffect } from 'react';
import { RaceBy } from '@uiball/loaders';
import { AreaCards } from '@/components/areaCards';
import { useFilter } from '@/hooks/filter';
import { useAreas } from '@/hooks/areas';
import debounce from 'just-debounce-it';

type Form = { name: string };

export default function Areas() {
	const { filter, setFilter } = useFilter();
	const { areas, getAreas, loading } = useAreas();

	const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value: name } = e.target;
		const new_filter = { ...filter, name };
		setFilter(new_filter);
		debouncedSetFilter(new_filter);
	};

	const debouncedSetFilter = useCallback(
		debounce((filter: Form) => {
			console.log(filter);
			getAreas({ areaname: filter.name });
		}, 1000),
		[],
	);

	useEffect(() => {
		getAreas({ areaname: '' });
	}, []);

	return (
		<div className='grid gap-10 p-6'>
			<Title text='Areas' />

			<div className='grid w-full h-full gap-y-10 m-auto px-20'>
				<div className='flex justify-between w-full'>
					<div className='flex h-full w-[200px]'>
						<Add />
					</div>
					<div className='flex h-16'>
						<Filter placeholder='Filter by name' left right onChange={handleName} />
					</div>
				</div>
				{loading ? (
					<div className='grid w-full h-[500px] m-auto justify-center place-content-center'>
						<RaceBy lineWeight={5} speed={1.4} size={500} color='#2A26EA' />
					</div>
				) : (
					<div className='grid w-full h-full gap-y-8'>
						<AreaCards areas={areas} />
					</div>
				)}
			</div>
		</div>
	);
}

// <Title text='Areas' />;
