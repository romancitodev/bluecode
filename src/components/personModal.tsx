import { Modal } from './modal';

type Props = {
	show: boolean;
	onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export function PatientModal({ show, onClose }: Props) {
	return (
		<Modal open={show}>
			<Modal.Container>
				<Modal.Grid className='grid overflow-y-auto h-full w-full gap-5 scroll-smooth no-scrollbar'>
					<Modal.Grid>
						<Modal.Title text='Info Básica' />
						<Modal.Group className='w-full h-full grid grid-cols-2 justify-between gap-5'>
							<Modal.TextInput placeholder='Nombre' />
							<Modal.TextInput placeholder='Apellido' />
							<Modal.TextInput placeholder='DNI' />
							<Modal.TextInput placeholder='Sexo' />
							<Modal.TextInput placeholder='Domicilio' full />
							<Modal.TextInput placeholder='Estado Civil' />
							<Modal.TextInput placeholder='Grupo Sanguineo' />
						</Modal.Group>
					</Modal.Grid>

					<Modal.Grid>
						<Modal.Title text='Afiliación' />
						<Modal.Group className='w-full h-full grid grid-cols-2 justify-between gap-5'>
							<Modal.TextInput placeholder='Tipo' />
							<Modal.TextInput placeholder='Nombre' />
						</Modal.Group>
					</Modal.Grid>

					<Modal.Grid>
						<Modal.Title text='Alergias' />
						<Modal.Group>
							<Modal.TextInput placeholder='Alergia X' />
						</Modal.Group>
						<Modal.Group>
							<Modal.TextInput placeholder='Alergia X' />
						</Modal.Group>
					</Modal.Grid>

					<Modal.Grid>
						<Modal.Title text='Enfermedades' />
						<Modal.Group>
							<Modal.TextInput placeholder='Enfermedad X' />
						</Modal.Group>
						<Modal.Group>
							<Modal.TextInput placeholder='Enfermedad X' />
						</Modal.Group>
					</Modal.Grid>

					<Modal.Grid>
						<Modal.Title text='Vacunas' />
						<Modal.Group>
							<Modal.TextInput placeholder='Vacunas X' />
						</Modal.Group>
						<Modal.Group>
							<Modal.TextInput placeholder='Vacunas X' />
						</Modal.Group>
					</Modal.Grid>

					<Modal.Grid>
						<Modal.Title text='Accidentes' />
						<Modal.Group className='w-full h-full grid grid-cols-2 justify-between'>
							<Modal.LargeTextField placeholder='Accidentes ocurridos' />
						</Modal.Group>
					</Modal.Grid>

					<Modal.Grid>
						<Modal.Title text='Antecedentes' />
						<Modal.Group className='w-full h-full grid grid-cols-2 justify-between'>
							<Modal.LargeTextField placeholder='Antecedentes' />
						</Modal.Group>
					</Modal.Grid>

					<Modal.Grid>
						<Modal.Title text='Observaciones' />
						<Modal.Group className='w-full h-full grid grid-cols-2 justify-between'>
							<Modal.LargeTextField placeholder='Observaciones' />
						</Modal.Group>
					</Modal.Grid>
				</Modal.Grid>

				<Modal.Group font='bold'>
					<Modal.Button
						text='Close'
						className='text-red-500 text-[24px]'
						onClick={onClose}
					/>
					<Modal.Button text='Create' className='text-[24px]' />
				</Modal.Group>
			</Modal.Container>
		</Modal>
	);
}
