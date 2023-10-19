'use client';

import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
	session: Session | null;
};

export default function Provider({ children, session }: Props) {
	return <SessionProvider session={session}>{children}</SessionProvider>;
}
