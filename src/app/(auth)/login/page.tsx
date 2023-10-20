'use client';

import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

type Form = { email: string; password: string };

export default function Login() {
	const router = useRouter();
	const { data: session, status } = useSession();
	const [form, setForm] = useState<Form>({ email: '', password: '' });

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const login = await signIn('credentials', {
			...form,
			redirect: false,
		});
		console.log({ ...login });
		if (!login?.error) {
			router.push('/patients');
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		ctx: keyof Form,
	) => {
		const { value } = e.target;
		setForm(old => {
			return { ...old, [ctx]: value };
		});
	};

	return (
		<main className='h-screen overflow-hidden'>
			<div className='grid content-center justify-center h-screen gap-5'>
				<div
					className='flex h-max shadow-2xl rounded-2xl
				 items-center justify-around'
				>
					<div className={'w-[400px] md:w-full h-full'}>
						<img
							src='/hospital_ambulancia.jpg'
							alt='login-hospital'
							className='w-full h-full object-cover rounded-l-2xl'
						/>
					</div>
					<div className='grid justify-around px-10 gap-10'>
						<div className='grid text-center justify-center gap-y-2'>
							<img src='/Isotipo.png' alt='isotipo' />
							<p>Personal médico</p>
						</div>
						<form
							className='grid gap-5 w-[500px] h-max items-center'
							onSubmit={handleSubmit}
						>
							<input
								className='border-2 rounded-xl border-neutral-500 bg-neutral-300 bg-opacity-25 placeholder:neutral-500 hover:border-neutral-600 py-2 px-4 text-[20px] transition-all'
								type='text'
								placeholder='Email'
								required
								onChange={e => {
									handleChange(e, 'email');
								}}
							/>
							<input
								className='border-2 rounded-xl border-neutral-500 bg-neutral-300 bg-opacity-25 placeholder:neutral-500 hover:border-neutral-600 py-2 px-4 text-[20px] transition-all'
								type='password'
								placeholder='Password'
								required
								onChange={e => {
									handleChange(e, 'password');
								}}
							/>
							<div className='w-full h-full flex justify-end items-center'>
								<button type='submit' className='text-indigo-600 font-bold text-[24px]'>
									Entrar
								</button>
							</div>
						</form>
					</div>
				</div>
				<p className='flex place-content-center text-center gap-x-2'>
					¿Formás parte de la administración?
					<Link href='/admin' className='font-bold'>
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
