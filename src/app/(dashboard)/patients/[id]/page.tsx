import { PatientGridInfo } from '@/components/patientData';
import { Title } from '@/components/title';

type Params = {
	params: {
		id: string;
	};
};

export default async function Page({ params }: Params) {
	console.log({ page: true, params });
	return (
		<div className='grid m-0'>
			<Title text='Ficha médica' />

			<div className='mx-28'>
				<PatientGridInfo id={params.id} />
			</div>
		</div>
	);
}
