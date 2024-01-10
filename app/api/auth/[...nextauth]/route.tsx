// pages/api/auth/[...nextauth].ts

import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            authorize: async (credentials) => {
                // Fetch user from your API and check credentials
                const user = await fetch('http://localhost:8000/api/token/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(credentials),
                }).then((res) => res.json());

                if (user) {
                    // Return user information to create a session
                    return Promise.resolve({
                        id: user.id,
                        username: user.username,
                        email: user.email,

                    });
                } else {
                    // If no user was returned, display an error message
                    return Promise.resolve(null);
                }
            },
        }),
    ],
    // Add any additional NextAuth.js configurations here
});
