import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {

    pages: {
        signIn: "/"
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'username', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            authorize: async (credentials) => {
                console.log(credentials)
                // Fetch user from your API and check credentials
                const user = await fetch('http://127.0.0.1:5000/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(credentials),
                })
                console.log(user)

                if (user.status === 200
                ) {
                    // Return user information to create a session
                    return user
                } else {
                    // If no user was returned, display an error message
                    return null
                }
            },
        }),
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) token = { user: token }
            return token;
        },
        session: async ({ session, token }) => {
            session = token
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,

}