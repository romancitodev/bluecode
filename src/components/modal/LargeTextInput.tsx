import React from 'react';
import { ErrorMessage } from './ErrorMessage';

type Props = {
	placeholder?: string;
	error?: string;
};

export const LargeTextInput = React.forwardRef<HTMLTextAreaElement, Props>(
	({ placeholder, error, ...props }, ref) => {
		return (
			<div>
				<textarea
					ref={ref}
					placeholder={placeholder}
					{...props}
					className='w-full border-2 border-zinc-400 rounded-xl bg-neutral-300 bg-opacity-25 placeholder:neutral-500 hover:border-neutral-600 py-2 px-4 text-[19px] transition-all break-normal col-span-full resize-y min-h-[50px] h-[200px] max-h-[300px] scrollbar-thin scrollbar-thumb-gray-200 scrollbar-rounded-[25px] scrollbar-track-rounded-[25px] scroll-smooth hover:scrollbar-thumb-gray-300'
				/>
				<ErrorMessage text={error} />
			</div>
		);
	},
);
