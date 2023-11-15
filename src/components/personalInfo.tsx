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
        gender: string;
        civil_status: string;
        phone: number;
    };
}

const formatDate = (d: Date) =>
    `${d.getDate().toString().padStart(2, '0')} / ${(d.getMonth() + 1)
        .toString().padStart(2, '0')} / ${d.getFullYear()}`;

export async function PersonalGridInfo({ id } : Props) {
    /*
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
                gender,
                civil_status,
                phone,
            } = json.message;
        };
    */

    return (
        <div className='w-full h-full overflow-x-scroll overflow-y-clip scrollbar-thin scrollbar-thumb-gray-200 scrollbar-rounded-[25px] scrollbar-track-rounded-[25px] scroll-smooth hover:scrollbar-thumb-gray-300 overflow-x-scroll'>
            <div className='[&>*:nth-child(even)]:bg-white [&>*:nth-child(odd)]:bg-[#E2E2E2] w-full h-auto m-0 p-0'>
                <div className='grid grid-cols-2 px-4 py-0.5 rounded-t-3xl'>
                    <div className='cols-span-1/2 flex justify-between p-2 pr-5'>
                        <p className='font-bold'>Nombre</p>
                        <p>maria</p>
                    </div>
                    <div className='cols-span-1/2 flex justify-between p-2 pl-5'>
                        <p className='font-bold'>Apellido</p>
                        <p>zdanovitch</p>
                    </div>
                </div>

                <div className='grid grid-cols-2 px-4 py-0.5'>
                    <div className='cols-span-1/2 flex justify-between p-2 pr-5'>
                        <p className='font-bold'>Fecha de nacimiento</p>
                        <p>29 / 10 / 2004</p>
                    </div>
                    <div className='cols-span-1/2 flex justify-between p-2 pl-5'>
                        <p className='font-bold'>DNI</p>
                        <p>046.029.748</p>
                    </div>
                </div>

                <div className='grid grid-cols-2 px-4 py-0.5'>
                    <div className='cols-span-1/2 flex justify-between p-2 pr-5'>
                        <p className='font-bold'>Sexo</p>
                        <p>Femenino</p>
                    </div>
                    <div className='cols-span-1/2 flex justify-between p-2 pl-5'>
                        <p className='font-bold'>Estado civil</p>
                        <p>Soltera</p>
                    </div>
                </div>

                <div className='grid grid-cols-2 px-4 py-0.5'>
                    <div className='cols-span-1/2 flex justify-between p-2 pr-5'>
                        <p className='font-bold'>Teléfono</p>
                        <p>1112345678</p>
                    </div>
                    <div className='cols-span-1/2 flex justify-between p-2 pl-5'>
                        <p className='font-bold'>CUIT</p>
                        <p>20123456789</p>
                    </div>
                </div>

                <div className='grid grid-cols-2 px-4 py-0.5 rounded-b-3xl'>
                    <div className='cols-span-1/2 flex justify-between p-2 pr-5'>
                        <p className='font-bold'>Email</p>
                        <p>zdamaria119@gmail.com</p>
                    </div>
                    <div className='cols-span-1/2 flex justify-between p-2 pl-5'>
                        <p className='font-bold'>Fecha inicio</p>
                        <p>14 / 11 / 2023</p>
                    </div>
                </div>
            </div>
        </div>
    );
}