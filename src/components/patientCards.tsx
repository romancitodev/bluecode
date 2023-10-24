import { Card } from './flat-card';

type Patient = { name: string; dni: string };
type Props = { patients: Patient[] };

export function PatientCards({ patients }: Props) {
	if (patients.length === 0)
		return (
			<p className='text-slate-500 text-center font-bold w-full items-center'>
				Empty patients
			</p>
		);
	return patients.map(({ name, dni }) => <Card name={name} dni={dni} />);
}
