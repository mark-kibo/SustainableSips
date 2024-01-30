
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
                const response = await fetch('https://varumar.pythonanywhere.com/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(credentials),
                })
                

                if (response.status === 200) {
                    // Parse the user data from the response
                    const userData = await response.json();
                    // Return user information to create a session
                    return { user: userData }
                } else {
                    // If no user was returned, display an error message
                    return null
                }
            },
        }),
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) token.user= user
            return token;
        },
        session: async ({ session, token }) => {
            session.username = token.username
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,

}