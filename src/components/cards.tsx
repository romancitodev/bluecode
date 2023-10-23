import { AreaCard } from './area-card';

//#endregion

//#region "export area cards"

export async function AreaCards() {
	const data = await fetchAreaData();
	return data.map(({ areaname, incharge, beds, variant }) => (
		<AreaCard
			areaname={areaname}
			incharge={incharge}
			beds={beds}
			variant={variant}
		/>
	));
}

export type Area = {
	areaname: string;
	incharge: string;
	beds: number;
	variant: 'open' | 'occupied';
};

function fetchAreaData() {
	return new Promise<Area[]>(resolve => {
		setTimeout(() => {
			resolve([
				{
					areaname: 'Quirofano 1',
					incharge: 'tamagoru',
					beds: 5,
					variant: 'open',
				},
				{
					areaname: 'Guardia',
					incharge: 'romancitodev',
					beds: 4,
					variant: 'occupied',
				},
				{
					areaname: 'Pediatria',
					incharge: 'Cenix',
					beds: 10,
					variant: 'open',
				},
			]);
		}, 1 * 500);
	});
}

//#endregion
