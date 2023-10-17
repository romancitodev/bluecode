import Link from 'next/link';

export default function Login() {
	return (
		<main className='h-screen overflow-hidden'>
			<div className='grid content-center justify-center h-screen gap-5'>
				<div
					className='flex md:h-[444px] md:w-[1080px] shadow-2xl rounded-2xl
				 items-center justify-around'
				>
					<div className='grid justify-around px-10 gap-10'>
						<div className='grid text-center justify-center gap-y-2'>
							<img src='/Isotipo.png' alt='isotipo' />
							<p>Personal médico</p>
						</div>
						<form className='grid gap-5 w-[500px] h-max items-center'>
							<input
								className='border-2 rounded-xl border-neutral-500 bg-neutral-300 bg-opacity-25 placeholder:neutral-500 hover:border-neutral-600 py-2 px-4 text-[20px] transition-all'
								type='text'
								placeholder='Username'
							/>
							<input
								className='border-2 rounded-xl border-neutral-500 bg-neutral-300 bg-opacity-25 placeholder:neutral-500 hover:border-neutral-600 py-2 px-4 text-[20px] transition-all'
								type='password'
								placeholder='Password'
							/>
						</form>
						<div className='flex justify-end items-center'>
							<button type='button' className='text-indigo-600 font-bold text-[24px]'>
								Entrar
							</button>
						</div>
					</div>
					<div className={'w-[400px] md:w-full h-full'}>
						<img
							src='/hospital.jpg'
							alt='login-hospital'
							className=' w-full h-full object-cover rounded-r-2xl'
						/>
					</div>
				</div>
				<p className='flex place-content-center text-center gap-x-2'>
					¿Formás parte del personal medico?
					<Link href='/login' className='font-bold'>
						Inicie aqui.
					</Link>
				</p>
			</div>
			<footer className='text-center bottom-14 relative'>
				<p className='text-[20px] font-bold'>
					© Todos los derechos reservados a Código Azul™ - 2023
				</p>
			</footer>
		</main>
	);
}
