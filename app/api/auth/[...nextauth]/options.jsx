
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
                   
                  
                        const { token, role_id } = await response.json();
                        return { token, role_id };
                  
                } else {
                    // If no user was returned, display an error message
                    return null
                }
            },
        }),
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.userToken = user.token; // Assuming your user object has a 'token' property
                token.roleId = user.role_id; // Assuming your user object has a 'role_id' property
            }
            return token;

        },
        session: async ({ session, token }) => {
            session.user = token
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,

}