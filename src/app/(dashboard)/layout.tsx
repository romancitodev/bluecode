'use client';

import { useSession } from 'next-auth/react';
import { SideBar } from '@/components/sidebar';
import React from 'react';
import { redirect } from 'next/navigation';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { data: session } = useSession({
		required: true,
		onUnauthenticated() {
			redirect('/login');
		},
	});
	return (
		<div className='flex overflow-hidden h-screen w-screen'>
			<SideBar isAdmin={session?.user.role !== 'Enfermero'} />
			<div className='h-screen w-screen overflow-hidden'>{children}</div>
		</div>
	);
}
