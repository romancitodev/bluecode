import { PatientGridInfo } from "@/components/patientData";
import { Title } from "@/components/title";

type Params = {
	params: {
		id: string;
	};
};

export default async function Page({ params }: Params) {
	const data = await fetch(
		`http://localhost:3000/api/patients?dni=${params.id}`,
	);

	console.log({ page: true, data });

	return (
		<div className="grid m-0">
			<Title text='Ficha médica' />
			
			<div className='mx-28'>
				<PatientGridInfo />
			</div>
		</div>
	);
}
