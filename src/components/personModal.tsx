import { Modal } from './modal';
import illnesses from '@/mocks/illnesses.json';
import allergies from '@/mocks/allergies.json';
import vacuums from '@/mocks/vacuums.json';

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
							<Modal.DatePicker
								placeholder='Fecha de nacimiento'
								max_day={new Date()}
							/>
							<Modal.TextInput placeholder='DNI' />
							<Modal.ComboBox
								placeholder='Sexo'
								empty='No se encontró el sexo proporcionado'
								options={[
									{
										label: 'Masculino',
										value: 'masculino',
									},
									{
										label: 'Femenino',
										value: 'femenino',
									},
									{
										label: 'Otro',
										value: 'otro',
									},
								]}
							/>
							<Modal.ComboBox
								placeholder='Estado Civil'
								empty='No se encontró el estado.'
								options={[
									{
										label: 'Casado',
										value: 'casado',
									},
									{
										label: 'Soltero',
										value: 'soltero',
									},
								]}
							/>
							<Modal.TextInput placeholder='Domicilio' full />
							<Modal.ComboBox
								placeholder='Grupo Sanguíneo'
								empty='No se encontró el grupo'
								options={[
									{
										label: 'A+',
										value: 'a+',
									},
									{
										label: 'A-',
										value: 'a-',
									},
									{
										label: 'B+',
										value: 'b+',
									},
									{
										label: 'B-',
										value: 'b-',
									},
									{
										label: 'AB+',
										value: 'ab+',
									},
									{
										label: 'AB-',
										value: 'ab-',
									},
									{
										label: 'O+',
										value: 'o+',
									},
									{
										label: 'O-',
										value: 'o-',
									},
								]}
							/>
						</Modal.Group>
					</Modal.Grid>

					<Modal.Grid>
						<Modal.Title text='Afiliación' />
						<Modal.Group className='w-full h-full grid grid-cols-2 justify-between gap-5'>
							<Modal.ComboBox
								placeholder='Tipo'
								empty='No se encontró el tipo.'
								options={[
									{
										label: 'Prepaga',
										value: 'prepaga',
									},
									{
										label: 'Obra social',
										value: 'obra social',
									},
									{
										label: 'Ninguno',
										value: 'ninguno',
									},
								]}
							/>
							<Modal.TextInput placeholder='Nombre' />
						</Modal.Group>
					</Modal.Grid>

					<Modal.Grid>
						<Modal.Title text='Alergias' />
						<Modal.TagInput
							placeholder='Alergias'
							options={allergies}
							empty='No se encontraron alergias'
						/>
					</Modal.Grid>

					<Modal.Grid>
						<Modal.Title text='Enfermedades' />
						<Modal.TagInput
							empty='Not found'
							placeholder='Enfermedades`'
							options={illnesses}
						/>
					</Modal.Grid>

					<Modal.Grid>
						<Modal.Title text='Vacunas' />
						<Modal.Group>
							<Modal.TagInput
								placeholder='Vacuna'
								empty='No se encontró la vacuna.'
								options={vacuums}
							/>
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
