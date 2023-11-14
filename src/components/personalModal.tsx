import { substractYears } from '@/utils/date';
import { Modal } from './modal';
import { PersonalForm, PersonalFormData } from '@/app/schemas/personal-form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAreas } from '@/hooks/areas';
import { useEffect } from 'react';

type Props = {
	show: boolean;
	onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export function PersonalModal({ show, onClose }: Props) {
	const {
		control,
		reset,
		handleSubmit,
		formState: { errors },
		register,
	} = useForm<PersonalFormData>({ resolver: zodResolver(PersonalForm) });

	const handleClose = e => {
		onClose(e);
		reset();
	};

	const onSubmit = async (data: PersonalFormData) => {
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

	const { areas, getAreas } = useAreas();
	useEffect(() => { getAreas({ areaname: '' })})

	return (
		<Modal open={show} onSubmit={handleSubmit(onSubmit, onError)}>
			<Modal.Container>
				<Modal.Grid className='grid overflow-y-auto h-full w-full gap-5 scroll-smooth no-scrollbar'>
					<Modal.Grid>
						<Modal.Title text='Información del empleado' />
						<Modal.Group className='w-full h-full grid grid-cols-2 justify-between gap-5'>
							<Modal.TextInput
								placeholder='Nombre'
								error={errors.name?.message}
								{...register('name')}
							/>
							<Modal.TextInput
								placeholder='Apellido'
								{...register('surname')}
								error={errors.surname?.message}
							/>
							<Modal.TextInput
								placeholder='DNI'
								{...register('dni')}
								error={errors.dni?.message}
							/>
							<Modal.DatePicker
								{...register('birth')}
								control={control}
								placeholder='Fecha de nacimiento'
								max_day={new Date()}
								error={errors.birth?.message}
							/>
							<Modal.ControlledCombo
								control={control}
								{...register('gender')}
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
								{...register('civil_status')}
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
							<Modal.TextInput
								placeholder='Teléfono'
								{...register('phone')}
								error={errors.phone?.message}
							/>
								<Modal.TextInput
									placeholder='CUIT'
									{...register('cuit')}
									error={errors.cuit?.message}
								/>
								<Modal.TextInput
									placeholder='Mail'
									{...register('mail')}
									block
									error={errors.mail?.message}
								/>

								<Modal.TextInput
									placeholder='Contraseña'
									type='password'
									{...register('password')}
									error={errors.password?.message}
								/>

							<Modal.DatePicker
								control={control}
								{...register('date_start')}
								placeholder='Fecha inicio'
								max_day={new Date()}
								error={errors.date_start?.message}
							
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
						<Modal.Title text='Areas' />
						<Modal.TagInput
							control={control}
							{...register('area')}
							placeholder='Areas'
							empty='No se encontró el area.'
							error={errors.area?.message}
							options={ areas.map(a => { return { label: a.areaname, value: a.areaname } }) }
						/>
					</Modal.Grid>
				</Modal.Grid>

				<Modal.Group font='bold'>
					<Modal.Button
						text='Close'
						className='text-red-500 text-[24px]'
						onClick={handleClose}
					/>
					<Modal.Button text='Create' type='submit' className='text-[24px]' />
				</Modal.Group>
			</Modal.Container>
		</Modal>
	);
}
