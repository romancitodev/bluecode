export function PatientGridInfo() {
    return (
        <div className="w-full h-full">
            <div className='[&>*:nth-child(even)]:bg-white [&>*:nth-child(odd)]:bg-[#E2E2E2] w-full h-full m-0'>
                <div className='grid grid-cols-2 px-4 py-0.5 rounded-t-3xl'>
                    <div className='cols-span-1/2 flex justify-between p-2 pr-5'>
                        <div>Nombre</div>
                        <div>Valentin</div>
                    </div>
                    <div className='cols-span-1/2 flex justify-between p-2 pl-5'>
                        <div>Apellido</div>
                        <div>Smaia</div>
                    </div>
                </div>

                <div className='grid grid-cols-2 px-4 py-0.5'>
                    <div className='cols-span-1/2 flex justify-between p-2 pr-5'>
                        <div>Fecha de nacimiento</div>
                        <div>19-02-2004</div>
                    </div>
                    <div className='cols-span-1/2 flex justify-between p-2 pl-5'>
                        <div>DNI</div>
                        <div>45480653</div>
                    </div>
                </div>

                <div className='grid grid-cols-2 px-4 py-0.5'>
                    <div className='cols-span-1/2 flex justify-between p-2 pr-5'>
                        <div>Sexo</div>
                        <div>Masculino</div>
                    </div>
                    <div className='cols-span-1/2 flex justify-between p-2 pl-5'>
                        <div>Estado civil</div>
                        <div>Soltero</div>
                    </div>
                </div>

                <div className='grid grid-cols-2 px-4 py-0.5'>
                    <div className='cols-span-1/2 flex justify-between p-2 pr-5'>
                        <div>Grupo Sanguíneo</div>
                        <div>ni idea la verdad</div>
                    </div>
                    <div className='cols-span-1/2 flex justify-between p-2 pl-5'>
                        <div>Telefono</div>
                        <div>1111111111</div>
                    </div>
                </div>

                <div className='grid grid-cols-2 px-4 py-0.5 rounded-b-3xl'>
                    <div className='cols-span-1/2 flex justify-between p-2 pr-5'>
                        <div>Domicilio</div>
                        <div>pedro lozano algo, villa del parque, caba</div>
                    </div>
                    <div className='cols-span-1/2 flex justify-between p-2 pl-5'>
                        <div>Afiliación</div>
                        <div>Obra social - Osuthgra</div>
                    </div>
                </div>
            </div>
        </div>
    );
}