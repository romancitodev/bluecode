import { formatDni } from '@/utils/format';
import { PatientNotFound } from './PatientNotFound';

type Props = { id: string };

type PatientInfo = {
	name: string;
	surname: string;
	birth: Date;
	dni: number;
	gender: string;
	civil_status: string;
	blood_type: string;
	phone: number;
	address: string;
	affiliation_type: string;
	affiliation_name: string;
};

const formatDate = (d: Date) =>
	`${d.getDate().toString().padStart(2, '0')} / ${(d.getMonth() + 1)
		.toString()
		.padStart(2, '0')} / ${d.getFullYear()}`;

export async function PatientGridInfo({ id }: Props) {
	const data = await fetch(`http://localhost:3000/api/patients?dni=${id}`);

	const json: PatientInfo = (await data.json()).message;

	return !json ? (
		<PatientNotFound />
	) : (
		<div className='w-full h-full'>
			<div className='[&>*:nth-child(even)]:bg-white [&>*:nth-child(odd)]:bg-[#E2E2E2] w-full h-full m-0'>
				<div className='grid grid-cols-2 px-4 py-0.5 rounded-t-3xl'>
					<div className='cols-span-1/2 flex justify-between p-2 pr-5'>
						<p className='font-bold'>Nombre</p>
						<p>{json.name}</p>
					</div>
					<div className='cols-span-1/2 flex justify-between p-2 pl-5'>
						<p className='font-bold'>Apellido</p>
						<p>{json.surname}</p>
					</div>
				</div>

				<div className='grid grid-cols-2 px-4 py-0.5'>
					<div className='cols-span-1/2 flex justify-between p-2 pr-5'>
						<p className='font-bold'>Fecha de nacimiento</p>
						<p>{formatDate(new Date(json.birth))}</p>
					</div>
					<div className='cols-span-1/2 flex justify-between p-2 pl-5'>
						<p className='font-bold'>DNI</p>
						<p>{formatDni(json.dni)}</p>
					</div>
				</div>

				<div className='grid grid-cols-2 px-4 py-0.5'>
					<div className='cols-span-1/2 flex justify-between p-2 pr-5'>
						<p className='font-bold'>Sexo</p>
						<p>{json.gender}</p>
					</div>
					<div className='cols-span-1/2 flex justify-between p-2 pl-5'>
						<p className='font-bold'>Estado civil</p>
						<p>{json.civil_status}</p>
					</div>
				</div>

				<div className='grid grid-cols-2 px-4 py-0.5'>
					<div className='cols-span-1/2 flex justify-between p-2 pr-5'>
						<p className='font-bold'>Grupo Sanguíneo</p>
						<p>{json.blood_type}</p>
					</div>
					<div className='cols-span-1/2 flex justify-between p-2 pl-5'>
						<p className='font-bold'>Telefono</p>
						<p>{json.phone}</p>
					</div>
				</div>

				<div className='grid grid-cols-2 px-4 py-0.5 rounded-b-3xl'>
					<div className='cols-span-1/2 flex justify-between p-2 pr-5'>
						<p className='font-bold'>Domicilio</p>
						<p>{json.address}</p>
					</div>
					<div className='cols-span-1/2 flex justify-between p-2 pl-5'>
						<p className='font-bold'>Afiliación</p>
						<p>{`${json.affiliation_type} - ${json.affiliation_name}`}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
