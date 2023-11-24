import { formatDni } from '@/utils/format';
import { Card } from './patientCard';

type Patient = { name: string; surname: string; dni: number };
type Props = { patients: Patient[]; onRefresh: () => void };

export function PatientCards({ patients, onRefresh }: Props) {
	if (patients.length === 0)
		return (
			<p className='text-slate-500 text-center font-bold w-full items-center'>
				Empty patients
			</p>
		);
	return patients.map(({ name, surname, dni }) => (
		<Card
			name={name}
			surname={surname}
			dni={formatDni(dni)}
			onDelete={async () => {
				const deleted = await fetch(
					`http://localhost:3000/api/patients?dni=${dni}`,
					{ method: 'DELETE' },
				);
				onRefresh();
			}}
		/>
	));
}
