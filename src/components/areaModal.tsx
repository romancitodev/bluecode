import { Modal } from './modal';

type Props = {
	show: boolean;
	onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export function AreaModal({ show, onClose }: Props) {
	return (
		<Modal open={show}>
			<Modal.Container>
				<Modal.Grid className='grid overflow-y-auto h-full w-full gap-5 scroll-smooth no-scrollbar'>
					<Modal.Grid>
						<Modal.Title text='Información del área' />

						<Modal.Group className='w-full h-full grid grid-cols-2 justify-between gap-5'>
							<Modal.TextInput placeholder='Nombre' />
							<Modal.TextInput placeholder='Cant. Camas' />
							<Modal.TextInput placeholder='Piso' full />
							<Modal.LargeTextField placeholder='Descripción' />
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
