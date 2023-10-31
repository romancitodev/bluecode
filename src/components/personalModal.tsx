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
							<Modal.TextInput placeholder='Género' />
							<Modal.TextInput placeholder='Estado civil' />
							<Modal.TextInput placeholder='Teléfono' />
							<Modal.TextInput placeholder='Fecha inicio' />
							<Modal.TextInput placeholder='CUIT' />
						</Modal.Group>
					</Modal.Grid>

					<Modal.Grid>
						<Modal.Title text='Areas' />
						<Modal.Group>
							<Modal.TextInput placeholder='Area' />
						</Modal.Group>
						<Modal.Group>
							<Modal.TextInput placeholder='Area X' />
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
