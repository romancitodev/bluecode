'use client';
type InputStyle = 'ok' | 'error';

export type InputProps = {
	placeholder: string;
	style: InputStyle;
	password?: boolean;
	value: string; // Value from the parent component's state
	onChange: (value: string) => void; // Callback function to handle changes
};
