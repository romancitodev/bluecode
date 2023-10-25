import { formatDni } from '@/utils/format';
import { PersonalCard } from './personalCard';

type Personal = { name: string; surname: string; dni: number };
type Props = { personal: Personal[] };

export function PersonalCards({ personal }: Props) {
	if (personal.length === 0)
		return (
			<p className='text-slate-500 text-center font-bold w-full items-center'>
				Empty patients
			</p>
		);
	return personal.map(({ name, surname, dni }) => (
		<PersonalCard name={name} surname={surname} dni={formatDni(dni)} />
	));
}
