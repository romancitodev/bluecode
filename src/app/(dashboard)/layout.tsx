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
		<div className='flex'>
			<SideBar isAdmin={session?.user.role !== 'Enfermero'} />
			<div className='h-screen w-screen'>{children}</div>
		</div>
	);
}
