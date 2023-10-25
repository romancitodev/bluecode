import { PersonalCard } from "./personalCard";

export async function PersonalCards() {
	const data = await fetchPersonalData();
	return data.map(({ name, dni }) => <PersonalCard name={name} dni={dni} />);
}

export type Form3 = { name: string; dni: string };

function fetchPersonalData() {
	return new Promise<Form3[]>(resolve => {
		setTimeout(() => {
			resolve([
				{
					name: 'Keanu Reeves',
					dni: '51.766.761'
				},
				{
					name: 'Pablo Linares',
					dni: '66.045.132'
				},
				{
					name: 'Cupini',
					dni: '30.165.145'
				}
			]);
		}, 1 * 500);
	});
}