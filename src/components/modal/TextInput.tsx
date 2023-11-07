import React, { InputHTMLAttributes } from 'react';
import { ErrorMessage } from './ErrorMessage';

type Props = {
	error?: string;
	block?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextInput = React.forwardRef<HTMLInputElement, Props>(
	({ placeholder, error, block, ...props }, ref) => {
		return (
			<div>
				<input
					placeholder={placeholder}
					ref={ref}
					className={`w-full border-2 border-zinc-400 rounded-xl bg-neutral-300 bg-opacity-25 hover:border-neutral-600 py-2 px-4 text-[19px] transition-all ${
						block ? 'col-span-full' : 'col-span-1/2'
					}`}
					type='text'
					{...props}
				/>
				<ErrorMessage text={error} />
			</div>
		);
	},
);
