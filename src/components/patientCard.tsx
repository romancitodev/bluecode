import { Card } from './flat-card';

//#region "export patient cards"

export async function PatientCards() {
	const { data } = await fetchPatientData();
	if (data.length === 0)
		return (
			<p className='text-slate-500 text-center font-bold w-full items-center'>
				Empty patients
			</p>
		);
	return data.map(({ nombre, dni }) => (
		<Card name={nombre} dni={dni.toString()} />
	));
}

export type Props = { name: string; dni: string };

export async function fetchPatientData() {
	const response = await fetch('http://localhost:3000/api/patients');
	return await response.json();
}
