'use client';
import React from 'react';

export function FormField({
	children,
	className,
}: { children: React.ReactNode; className?: string }) {
	return (
		<div className={className || 'flex flex-col w-full gap-2'}>{children}</div>
	);
}
