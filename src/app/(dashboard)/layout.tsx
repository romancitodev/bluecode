import { SideBar } from '@/components/sidebar';
import React from 'react';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='flex'>
			<SideBar />
			{children}
		</div>
	);
}
