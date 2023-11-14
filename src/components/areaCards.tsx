import { AreaCard } from './area-card';

type Area = {
	areaname: string;
	incharge: string;
	beds: number;
	variant: 'open' | 'occupied';
};

type Props = { areas: Area[] };

export function AreaCards({ areas }: Props) {
	console.log({ page: true, areas });

	if (!areas || areas.length <= 0)
		return (
			<p className='text-slate-500 text-center font-bold w-full items-center'>
				Empty areas
			</p>
		);

	return areas.map(({ areaname, incharge, beds, variant }) => (
		<AreaCard
			areaname={areaname}
			incharge={incharge}
			beds={beds}
			variant={variant}
		/>
	));
}
