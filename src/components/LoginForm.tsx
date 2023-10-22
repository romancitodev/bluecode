'use client';
import FormData from '@/schemas/login-form';
import { signIn } from 'next-auth/react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { ZodError, ZodIssue, z } from 'zod';
import { FormButton } from './FormButton';
import { FormField } from './FormField';
import { Input } from './Input';
import { InputMessage } from './InputMessage';
import { Form } from './form';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export function LoginForm({ router }: { router: AppRouterInstance }) {
	type Form = z.infer<typeof FormData>;
	const [form, setForm] = useState<Form>({ email: '', password: '' });
	const [errors, setErrors] = useState<ZodIssue[]>([]);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (errors.length > 0) {
			toast.error('You have some errors!');
			return;
		}
		const data = FormData.parse(form);
		const login = await signIn('credentials', {
			...data,
			redirect: false,
		});
		if (login?.error) {
			toast.error(login.error);
			return;
		}
		router.push('/patients');
	};

	const handleInputChange = (value: string, key: keyof Form) => {
		setForm(form => {
			try {
				FormData.parse({ ...form, [key]: value });
				setErrors([]);
			} catch (err) {
				if (err instanceof ZodError) setErrors(err.issues);
			}
			return { ...form, [key]: value };
		});
	};

	return (
		<Form onSubmit={handleSubmit}>
			<FormField>
				<Input
					placeholder='jhondoe@hospital.com'
					style={
						errors.some(err => err.path.some(e => e === 'email')) ? 'error' : 'ok'
					}
					value={form.email}
					onChange={value => handleInputChange(value, 'email')}
				/>
				<InputMessage
					text={
						errors.filter(err => err.path.some(e => e === 'email'))[0]?.message || ''
					}
				/>
			</FormField>
			<FormField>
				<Input
					placeholder='****************'
					style={
						errors.some(err => err.path.some(e => e === 'password')) ? 'error' : 'ok'
					}
					password
					value={form.password}
					onChange={value => handleInputChange(value, 'password')}
				/>
				<InputMessage
					text={
						errors.filter(err => err.path.some(e => e === 'password'))[0]?.message ||
						''
					}
				/>
			</FormField>
			<FormField className='w-full h-full flex justify-end items-center'>
				<FormButton type='submit' className='text-indigo-600 font-bold text-[24px]'>
					Entrar
				</FormButton>
			</FormField>
		</Form>
	);
}
