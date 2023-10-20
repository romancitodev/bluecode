import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '@/prisma/singleton';

type Fields = { f0: number; f1: string };

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
				const [user, ...rest] = await prisma.$queryRaw<
					Fields[]
				>`CALL VerifyLogin(${email}, ${password})`;
				if (user.f0 === 0) throw new Error(user.f1);
				return { status: user.f0, role: user.f1 };
			},
		}),
	],
	adapter: PrismaAdapter(prisma),
	session: {
		strategy: 'jwt',
	},
};

const handler = NextAuth(authProps);

export { handler as GET, handler as POST };
