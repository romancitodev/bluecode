import NextAuth, { AuthOptions } from 'next-auth';
import { PrismaClient } from '@prisma/client';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';

const prisma = new PrismaClient();

type Response =
	| {
			Estado: number;
			Rol: string;
	  }
	| { Estado: number; Info: string };

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
			authorize: async function (credentials, _) {
				if (!credentials || !credentials.email || !credentials.password)
					return null;
				const { email, password } = credentials;
				const user =
					await prisma.$queryRaw<Response>`CALL VerifyLogin(${email}, ${password})`;

				console.log(user);
				if ('Info' in user) return null;
				return { status: user.Estado, role: user.Rol };
			},
		}),
	],
	adapter: PrismaAdapter(prisma),
};

const handler = NextAuth(authProps);

export { handler as GET, handler as POST };
