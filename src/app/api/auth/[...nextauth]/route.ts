import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '@/prisma/singleton';
import { Adapter } from 'next-auth/adapters';

const authProps: AuthOptions = {
	providers: [
		CredentialsProvider({
			id: 'credentials',
			name: 'credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'text',
					placeholder: 'enter your email',
				},
				password: {
					label: 'Password',
					type: 'password',
					placeholder: 'enter your password',
				},
			},
			authorize: async function (credentials) {
				if (!credentials || !credentials.email || !credentials.password)
					return null;
				const { email, password } = credentials;
				const user = await prisma.usuario.findUnique({
					where: { mail: email, clave: password },
				});
				if (!user) throw new Error('Email or password invalid. Try again.');
				return { user };
			},
		}),
	],
	adapter: PrismaAdapter(prisma) as Adapter,
	session: {
		strategy: 'jwt',
	},
};

const handler = NextAuth(authProps);

export { handler as GET, handler as POST };
