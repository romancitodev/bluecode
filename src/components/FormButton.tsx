'use client';
import React from 'react';

export function FormButton({
	type,
	children,
	className,
}: {
	type?: 'submit' | 'button' | 'reset';
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<button type={type} className={className}>
			{children}
		</button>
	);
}
