import { Card } from './flat-card';

export type Form = { name: string; dni: string };

export async function Cards() {
	const data = await fetchData();
	return data.map(({ name, dni }) => <Card name={name} dni={dni} />);
}

function fetchData() {
	return new Promise<Form[]>(resolve => {
		setTimeout(() => {
			resolve([
				{ name: 'Pedro parker', dni: '123.456.789' },
				{ name: 'd', dni: '001.512.692' },
				{ name: 'Messi', dni: '051.668.991' },
			]);
		}, 5 * 1000);
	});
}
