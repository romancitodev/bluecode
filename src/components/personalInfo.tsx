import { formatDni } from "@/utils/format";
import { PersonalNotFound } from "./PersonalNotFound";

type Props = {
    id: string;
}

type PersonalResponse = PersonalInfo | PersonalError;

type PersonalError = { 
    message: {
        errors: string
    };
};

type PersonalInfo = {
    message: {
        name: string;
        surname: string;
        birth: Date;
        dni: number;
        cuit: string;
        gender: string;
        civil_status: string;
        phone: number;
        start_date: Date;
        email: string;
    };
}

const formatDate = (d: Date) =>
    `${d.getDate().toString().padStart(2, '0')} / ${(d.getMonth() + 1)
        .toString().padStart(2, '0')} / ${d.getFullYear()}`;

export async function PersonalGridInfo({ id } : Props) {
    
    const data = await fetch(`http://localhost:3000/api/personal?dni=${id}`);

    const json: PersonalResponse = await data.json();
    
    if (!json || !json.message || 'errors' in json.message) {
        return <PersonalNotFound />
    } else {
        const {
            name,
            surname,
            birth,
            dni,
            cuit,
            gender,
            civil_status,
            phone,
            start_date,
            email,
        } = json.message;

        return (
            <div className='w-full h-full overflow-x-scroll overflow-y-clip scrollbar-thin scrollbar-thumb-gray-200 scrollbar-rounded-[25px] scrollbar-track-rounded-[25px] scroll-smooth hover:scrollbar-thumb-gray-300 overflow-x-scroll'>
                <div className='[&>*:nth-child(even)]:bg-white [&>*:nth-child(odd)]:bg-[#E2E2E2] w-full h-auto m-0 p-0'>
                    <div className='grid grid-cols-2 px-4 py-0.5 rounded-t-3xl'>
                        <div className='cols-span-1/2 flex justify-between p-2 pr-5'>
                            <p className='font-bold'>Nombre</p>
                            <p>{name}</p>
                        </div>
                        <div className='cols-span-1/2 flex justify-between p-2 pl-5'>
                            <p className='font-bold'>Apellido</p>
                            <p>{surname}</p>
                        </div>
                    </div>
    
                    <div className='grid grid-cols-2 px-4 py-0.5'>
                        <div className='cols-span-1/2 flex justify-between p-2 pr-5'>
                            <p className='font-bold'>Fecha de nacimiento</p>
                            <p>{formatDate(new Date(birth))}</p>
                        </div>
                        <div className='cols-span-1/2 flex justify-between p-2 pl-5'>
                            <p className='font-bold'>DNI</p>
                            <p>{formatDni(dni)}</p>
                        </div>
                    </div>
    
                    <div className='grid grid-cols-2 px-4 py-0.5'>
                        <div className='cols-span-1/2 flex justify-between p-2 pr-5'>
                            <p className='font-bold'>Sexo</p>
                            <p>{gender}</p>
                        </div>
                        <div className='cols-span-1/2 flex justify-between p-2 pl-5'>
                            <p className='font-bold'>Estado civil</p>
                            <p>{civil_status}</p>
                        </div>
                    </div>
    
                    <div className='grid grid-cols-2 px-4 py-0.5'>
                        <div className='cols-span-1/2 flex justify-between p-2 pr-5'>
                            <p className='font-bold'>Teléfono</p>
                            <p>{phone}</p>
                        </div>
                        <div className='cols-span-1/2 flex justify-between p-2 pl-5'>
                            <p className='font-bold'>CUIT</p>
                            <p>{cuit}</p>
                        </div>
                    </div>
    
                    <div className='grid grid-cols-2 px-4 py-0.5 rounded-b-3xl'>
                        <div className='cols-span-1/2 flex justify-between p-2 pr-5'>
                            <p className='font-bold'>Email</p>
                            <p>{email}</p>
                        </div>
                        <div className='cols-span-1/2 flex justify-between p-2 pl-5'>
                            <p className='font-bold'>Fecha inicio</p>
                            <p>{formatDate(new Date(start_date))}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}