import { AreaCard } from './area-card';
import { Card } from './flat-card';

//#region "export patient cards"

export async function PatientCards() {
	const data = await fetchPatientData();
	return data.map(({ name, dni }) => <Card name={name} dni={dni} />);
}

export type Form1 = { name: string; dni: string };

function fetchPatientData() {
	return new Promise<Form1[]>(resolve => {
		setTimeout(() => {
			resolve([
				{ name: 'Pedro parker', dni: '123.456.789' },
				{ name: 'd', dni: '001.512.692' },
				{ name: 'Messi', dni: '051.668.991' },
			]);
		}, 1 * 500);
	});
}

//#endregion

//#region "export area cards"

export async function AreaCards() {
	const data = await fetchAreaData();
	return data.map(({ areaname, incharge, beds, state}) =>
		<AreaCard 
			areaname={areaname}
			incharge={incharge}
			beds={beds}
			cstate={state}
		/>
	)
}

export type Form2 = {
	areaname: string;
	incharge: string;
	beds: number;
	state: boolean
};

function fetchAreaData() {
	return new Promise<Form2[]>(resolve => {
		setTimeout(() => {
			resolve([
				{
					areaname: 'Quirofano 1',
					incharge: 'tamagoru',
					beds: 5, 
					state: true
				},
				{
					areaname: 'Guardia',
					incharge: 'romancitodev',
					beds: 4,
					state: false 
				},
				{
					areaname: 'Pediatria',
					incharge: 'Cenix',
					beds: 10, 
					state: true
				},
			]);
		}, 1 * 500);
	});
}

//#endregion