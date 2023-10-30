import { Modal } from './modal';

type Props = {
	show: boolean;
	onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export function PatientModal({ show, onClose }: Props) {
	return (
		<Modal open={show}>
			<Modal.Container>
				<Modal.Grid className='grid overflow-y-auto h-full w-full gap-5 scroll-smooth no-scrollbar' >
				<Modal.Grid>
					<Modal.Title text='Info Basica' />
					<Modal.Group className = 'w-full h-full grid grid-cols-2 justify-between gap-5'>
						<Modal.TextInput placeholder='Nombre' />
						<Modal.TextInput placeholder='Apellido' />
						<Modal.TextInput placeholder='DNI' />
						<Modal.TextInput placeholder='Sexo' />
						<Modal.TextInput placeholder='Domicilio' full />
						<Modal.TextInput placeholder='Estado Civil' />
						<Modal.TextInput placeholder='Grupo Sanginueo' />
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
