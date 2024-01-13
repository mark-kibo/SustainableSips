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
                const user = await fetch('https://sustainableapis.onrender.com/api/user/token/', {
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
            if(user) token = user
            return token;
        },
        session: async ({ session, token }) => {
            session.user = {user:token}
              return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,

}