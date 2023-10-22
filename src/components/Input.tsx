'use client';
import React from 'react';
import { InputProps } from '@/components/InputStyle';

export function Input({
	placeholder,
	style,
	password,
	value,
	onChange,
}: InputProps) {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		// Update the parent component's state with the new value
		onChange(event.target.value);
	};

	return (
		<input
			className={
				style === 'error'
					? 'border-2 rounded-xl focus:focus:outline-red-600 border-red-500 bg-red-300 bg-opacity-25 placeholder:text-red-600 hover:border-red-600 py-2 px-4 text-[20px] transition-all'
					: 'border-2 border-zinc-400 rounded-xl bg-neutral-300 bg-opacity-25 placeholder:neutral-500 hover:border-neutral-600 py-2 px-4 text-[20px] transition-all'
			}
			type={password ? 'password' : 'text'}
			placeholder={placeholder}
			required
			value={value} // The value from the parent component's state
			onChange={handleChange} // Call the handleChange function
		/>
	);
}
