'use client';

import { Title } from '@/components/title';
import { Add } from '@/components/add';
import { Filter } from '@/components/filter';
import { Suspense, useState } from 'react';
import { RaceBy } from '@uiball/loaders';
import { AreaCards } from '@/components/cards';

type Form = { name: string | null };

export default function Areas() {
	const [filter, setFilter] = useState<Form>({ name: null });

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
		<div className='grid gap-10 p-6'>
			<Title text='Areas' />

			<div className='grid w-full h-full gap-y-10 m-auto px-20'>
				<div className='flex justify-between w-full'>
					<div className='flex h-full w-[200px]'>
						<Add />
					</div>
					<div className='flex h-16'>
						<Filter
							placeholder='Filter by name'
							left
							right
							onChange={e => {
								handleChange(e, 'name');
							}}
						/>
					</div>
				</div>
				<Suspense
					fallback={
						<div className='grid w-full h-[500px] m-auto justify-center place-content-center'>
							<RaceBy
								lineWeight={5}
								speed={1.4}
								size={500}
								color='#2A26EA'
							/>
						</div>
					}
				>
					<div className='grid w-full h-full gap-y-8'>
						<AreaCards />
					</div>
				</Suspense>
			</div>
		</div>
	);
}

// <Title text='Areas' />;