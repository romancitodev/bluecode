import { Modal } from './modal';
import { AreaForm, AreaFormData } from '@/app/schemas/area-form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type Props = {
	show: boolean;
	onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export function AreaModal({ show, onClose }: Props) {
	const {
		control,
		reset,
		handleSubmit,
		formState: { errors },
		register,
	} = useForm<AreaFormData>({ resolver: zodResolver(AreaForm) });

	const handleClose = (e) => {
		onClose(e);
		reset();
	}

	const onSubmit = async (data: AreaFormData) => {
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
						<Modal.Title text='Información del área' />

						<Modal.Group className='w-full h-full grid grid-cols-2 justify-between gap-5'>
							<Modal.TextInput
								placeholder='Nombre'
								block
								error={errors.name?.message}
								{...register('name')}
							/>
							<Modal.TextInput
								placeholder='Cant. Camas'
								error={errors.beds?.message}
								{...register('beds')}
							/>
							<Modal.TextInput
								placeholder='Piso'
								error={errors.floor?.message}
								{...register('floor')}
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
					<Modal.Button
						text='Create'
						className='text-[24px]'
						type='submit'
					/>
				</Modal.Group>
			</Modal.Container>
		</Modal>
	);
}
