import NextAuth from "next-auth"
import SequelizeAdapter from "@auth/sequelize-adapter"
import { Sequelize } from "sequelize"
import  CredentialsProvider  from "next-auth/providers/credentials"

const schema = new Sequelize(process.env.MYSQL_DB!, {
    dialect: 'mysql'
})

schema.sync();

enum Status {
    Error = 0,
    Accepted = 1
}

type Response = {
    Estado: Status, // 0, 1, 2, 3. 4, 5, 6, 7,
    Rol: string
}

type ErrorResponse = {
    Estado: Status, // 0, 1, 2, 3. 4, 5, 6, 7,
    Info: string
}

type RawResponse<T extends Status> = T extends Status.Accepted ? Response : ErrorResponse;


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'text', placeholder: 'Enter your email'},
                password: { label: 'Password', type: 'password' , placeholder: 'Enter your password'},
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) return null;
                const [data, _] = await schema.query('CALL VerifyLogin (:email, :password)', { replacements: {...credentials }});
                if ('Estado' in data) {
                    const response: RawResponse<typeof data.Estado> = data;
                    if (data.Estado === Status.Error) { return null } else { return data }
                }
                return null
            },
        })
    ],
    adapter: SequelizeAdapter(schema),
    secret: 'secret',
});


export { handler as GET, handler as POST };