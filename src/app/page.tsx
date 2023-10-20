import { getSession } from 'next-auth/react';
import { AppProps } from 'next/app';
import { redirect } from 'next/navigation';

export default async function Home({ Component, pageProps }: AppProps) {
	const session = await getSession();

	if (session) {
		redirect('/patients');
	} else {
		redirect('/login');
	}
}
