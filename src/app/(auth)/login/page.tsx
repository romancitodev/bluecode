'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { LoginForm } from '@/components/LoginForm';

export default function Login() {
	const router = useRouter();
	const { data: session, status } = useSession();

	return (
		<main className='h-screen overflow-hidden'>
			<ToastContainer
				position={'bottom-right'}
				autoClose={2500}
				closeButton={false}
				draggable={false}
			/>
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
							<p>Mejorando la salud de las personas</p>
						</div>
						<LoginForm router={router} />
					</div>
				</div>
			</div>
			<footer className='text-center bottom-14 relative'>
				<p className='text-[20px] font-bold'>
					© Todos los derechos reservados a Código Azul™ - 2023
				</p>
			</footer>
		</main>
	);
}
