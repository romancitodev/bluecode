import { formatDni } from '@/utils/format';
import { Card } from './patientCard';

type Patient = { name: string; surname: string; dni: number };
type Props = { patients: Patient[] };

export function PatientCards({ patients }: Props) {
	if (patients.length === 0)
		return (
			<p className='text-slate-500 text-center font-bold w-full items-center'>
				Empty patients
			</p>
		);
	return patients.map(({ name, surname, dni }) => (
		<Card name={name} surname={surname} dni={formatDni(dni)} />
	));
}
