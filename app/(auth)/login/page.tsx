import Login from '@/components/Login/login';
import { useSession } from 'next-auth/react';
import React from 'react';

const LoginPage = () => {
  // Use the useSession hook to get the user session information
  const { data: session } = useSession();
  console.log('Session:', session);

  return (
    <div>
      {session ? (
        // If the user is authenticated, display a welcome message
        <p>Welcome, {session.user?.name || 'User'}!</p>
      ) : (
        // If not authenticated, display the login component
        <Login />
      )}
    </div>
  );
};

export default LoginPage;
