import { Modal } from './modal';
import illnesses from '@/mocks/illnesses.json';
import allergies from '@/mocks/allergies.json';
import vacuums from '@/mocks/vacuums.json';
import { PatientForm, PatientFormData } from '@/app/schemas/patients-form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type Props = {
	show: boolean;
	onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export function PatientModal({ show, onClose }: Props) {
	const {
		control,
		reset,
		handleSubmit,
		formState: { errors },
		register,
	} = useForm<PatientFormData>({ resolver: zodResolver(PatientForm) });

	const handleClose = e => {
		onClose(e);
		reset();
	};

	const onSubmit = async (data: PatientFormData) => {
		const result = await fetch('http://localhost:3000/api/patients', {
			method: 'POST',
			body: JSON.stringify(data),
		});
		const json = await result.json();
		console.log(json);
	};

	const onError = (errors: any) => {
		console.log(errors);
		console.log('an error occurred');
	};

	return (
		<Modal open={show} onSubmit={handleSubmit(onSubmit, onError)}>
			<Modal.Container>
				<Modal.Grid className='grid overflow-y-auto h-full w-full gap-5 scroll-smooth no-scrollbar'>
					<Modal.Grid>
						<Modal.Title text='Info Básica' />
						<Modal.Group className='w-full h-full grid grid-cols-2 justify-between gap-5'>
							<Modal.TextInput
								placeholder='Nombre'
								error={errors.name?.message}
								{...register('name')}
							/>
							<Modal.TextInput
								placeholder='Apellido'
								error={errors.surname?.message}
								{...register('surname')}
							/>
							<Modal.DatePicker
								placeholder='Fecha de nacimiento'
								max_day={new Date()}
								name='birth'
								control={control}
								error={errors.birth?.message}
							/>
							<Modal.TextInput
								placeholder='DNI'
								{...register('dni')}
								error={errors.dni?.message}
							/>
							<Modal.ControlledCombo
								control={control}
								name='gender'
								placeholder='Sexo'
								empty='No se encontró el sexo proporcionado'
								error={errors.gender?.message}
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
							<Modal.ControlledCombo
								control={control}
								name='civil_status'
								placeholder='Estado Civil'
								empty='No se encontró el estado.'
								error={errors.civil_status?.message}
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
							<Modal.ControlledCombo
								control={control}
								name='blood_type'
								placeholder='Grupo Sanguíneo'
								empty='No se encontró el grupo'
								error={errors.blood_type?.message}
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
							<Modal.TextInput
								placeholder='Telefono'
								{...register('phone')}
								error={errors.phone?.message}
							/>
						</Modal.Group>
					</Modal.Grid>

					<Modal.Grid>
						<Modal.Grid>
							<Modal.Title text='Detalles del domicilio' />
							<Modal.Group className='w-full h-full grid grid-cols-2 justify-between gap-5'>
								<Modal.TextInput
									placeholder='Domicilio'
									block
									{...register('street')}
									error={errors.street?.message}
								/>
								<Modal.TextInput
									placeholder='Numeración'
									{...register('street_number')}
									error={errors.street_number?.message}
								/>
								<Modal.TextInput
									placeholder='Localidad'
									{...register('neighborhood')}
									error={errors.neighborhood?.message}
								/>
								<Modal.TextInput
									placeholder='Provincia'
									{...register('province')}
									error={errors.province?.message}
								/>
								<Modal.ControlledCombo
									control={control}
									name='house_type'
									placeholder='Casa / Departamento'
									empty='No se encontró el tipo de hogar'
									options={[
										{
											label: 'Casa',
											value: 'casa',
										},
										{
											label: 'Departamento',
											value: 'departamento',
										},
									]}
								/>
								<Modal.TextInput
									placeholder='Piso del departamento'
									{...register('department_annotation')}
									error={errors.department_annotation?.message}
								/>
								<Modal.TextInput
									placeholder='Numero de departamento'
									{...register('department_number')}
									error={errors.department_number?.message}
								/>
							</Modal.Group>
						</Modal.Grid>
					</Modal.Grid>
					<Modal.Grid>
						<Modal.Title text='Afiliación' />
						<Modal.Group className='w-full h-full grid grid-cols-2 justify-between gap-5'>
							<Modal.ControlledCombo
								control={control}
								name='affiliation_type'
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
							<Modal.TextInput
								placeholder='Nombre'
								error={errors.affiliation_name?.message}
								{...register('affiliation_name')}
							/>
						</Modal.Group>
					</Modal.Grid>

					<Modal.Grid>
						<Modal.Title text='Alergias' />
						<Modal.TagInput
							control={control}
							name='allergies'
							placeholder='Alergias'
							options={allergies}
							empty='No se encontraron alergias'
						/>
					</Modal.Grid>

					<Modal.Grid>
						<Modal.Title text='Enfermedades' />
						<Modal.TagInput
							control={control}
							name='illnesses'
							empty='Not found'
							placeholder='Enfermedades`'
							options={illnesses}
						/>
					</Modal.Grid>

					<Modal.Grid>
						<Modal.Title text='Vacunas' />
						<Modal.Group>
							<Modal.TagInput
								control={control}
								name='vacuums'
								placeholder='Vacuna'
								empty='No se encontró la vacuna.'
								options={vacuums}
							/>
						</Modal.Group>
					</Modal.Grid>

					<Modal.Grid>
						<Modal.Title text='Accidentes' />
						<Modal.Group className='w-full h-full grid'>
							<Modal.LargeTextInput
								placeholder='Accidentes ocurridos'
								{...register('accidents')}
							/>
						</Modal.Group>
					</Modal.Grid>

					<Modal.Grid>
						<Modal.Title text='Antecedentes' />
						<Modal.Group className='w-full h-full grid'>
							<Modal.LargeTextInput
								placeholder='Antecedentes'
								{...register('antecedents')}
							/>
						</Modal.Group>
					</Modal.Grid>

					<Modal.Grid>
						<Modal.Title text='Observaciones' />
						<Modal.Group className='w-full h-full grid'>
							<Modal.LargeTextInput
								placeholder='Observaciones'
								{...register('observations')}
							/>
						</Modal.Group>
					</Modal.Grid>
					<Modal.Grid>
						<Modal.Title text='Area' />
						<Modal.Group className='w-full h-full grid grid-cols-2 justify-between gap-5'>
							<Modal.ControlledCombo
								control={control}
								name='area'
								placeholder='Area a ocupar'
								empty='No se encontró el area.'
								options={[
									{
										label: 'Ginecologia',
										value: 'ginecologia',
									},
									{
										label: 'Urgencias',
										value: 'urgencias',
									},
								]}
							/>
							<Modal.TextInput
								placeholder='Usa cama? 1 / 0'
								error={errors.bed_number?.message}
								{...register('bed_number')}
							/>
						</Modal.Group>
					</Modal.Grid>
				</Modal.Grid>
				<Modal.Group font='bold'>
					<Modal.Button
						text='Close'
						className='text-red-500 text-[24px]'
						onClick={handleClose}
					/>
					<Modal.Button type='submit' text='Create' className='text-[24px]' />
				</Modal.Group>
			</Modal.Container>
		</Modal>
	);
}
