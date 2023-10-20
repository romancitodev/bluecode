'use client';

import { useSession } from "next-auth/react"
import { SideBar } from '@/components/sidebar';
import React from 'react';
import { redirect } from "next/navigation";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { data: session } = useSession({ required: true, onUnauthenticated() {
		redirect('/login');
	}, });
	return (
		<div className='flex'>
			<SideBar />
			<div className='h-screen w-screen px-10 py-2'>{children}</div>
		</div>
	);
}
