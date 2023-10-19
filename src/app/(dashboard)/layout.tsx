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
			<div className='h-screen w-screen px-10 py-2'>{children}</div>
		</div>
	);
}
