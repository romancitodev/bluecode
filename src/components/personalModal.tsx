import { Modal } from './modal';

type Props = {
	show: boolean;
	onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export function PersonalModal({ show, onClose }: Props) {
	return (
		<Modal open={show}>
			<Modal.Container>
				<Modal.Grid className='grid overflow-y-auto h-full w-full gap-5 scroll-smooth no-scrollbar'>
					<Modal.Grid>
						<Modal.Title text='Información del empleado' />
						<Modal.Group className='w-full h-full grid grid-cols-2 justify-between gap-5'>
							<Modal.TextInput placeholder='Nombre' />
							<Modal.TextInput placeholder='Apellido' />
							<Modal.TextInput placeholder='DNI' />
							<Modal.TextInput placeholder='Fecha de nacimiento' />
							<Modal.TextInput placeholder='Domicilio' full />
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
							<Modal.TextInput placeholder='Teléfono' />
							<Modal.TextInput placeholder='Fecha inicio' />
							<Modal.TextInput placeholder='CUIT' />
						</Modal.Group>
					</Modal.Grid>

					<Modal.Grid>
						<Modal.Title text='Areas' />
						<Modal.TagInput
							placeholder='Areas'
							empty='No se encontró el area.'
							options={[
								{
									label: 'Electro',
									value: 'electro',
								},
								{
									label: 'Resonancia',
									value: 'resonancia',
								},
								{
									label: 'Cardiologia',
									value: 'cardiologia',
								},
								{
									label: 'Guardia',
									value: 'guardia',
								},
							]}
						/>
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
