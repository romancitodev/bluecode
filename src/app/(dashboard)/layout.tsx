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
		<div className='flex flex-row w-full h-full'>
			<SideBar isAdmin={session?.user.role !== 'Enfermero'} />
			<div className='w-full h-full'>{children}</div>
		</div>
	);
}
