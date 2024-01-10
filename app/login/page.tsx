// pages/login.tsx

import Login from '@/components/login';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router'; // Import useRouter to handle redirects
import React from 'react';

const LoginPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleLogin = () => {
    signIn('credentials', { redirect: false });
  };

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push('/'); // Redirect to the home page after logout
  };

  if (status === 'loading') {
    // Loading state while checking session status
    return <p>Loading...</p>;
  }

  return (
    <div>
      {session ? (
        <>
          <p>Welcome, {session.user?.name || 'User'}!</p>
          <button onClick={handleLogout}>Sign out</button>
        </>
      ) : (
        <>
          <p>Please sign in.</p>
          <button onClick={handleLogin}>Sign in</button>
        </>
      )}
      <Login />
    </div>
  );
};

export default LoginPage;
