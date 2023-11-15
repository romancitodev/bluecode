import { PatientGridInfo } from '@/components/patientData';
import { Title } from '@/components/title';

type Params = {
	params: {
		id: string;
	};
};

export default function Page({ params }: Params) {
	console.log({ page: true, params });
	return (
		<div className='w-full h-full grid m-0 min-[800px]:'>
			<Title text='Ficha médica' />

			<div className='mx-28'>
				<PatientGridInfo id={params.id} />
			</div>
		</div>
	);
}
