'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useMutation } from '@tanstack/react-query';
import { toast, Toaster } from 'react-hot-toast';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const params = useSearchParams();



  const postUser = async () => {
    try {
      const res = await signIn('credentials', {
        redirect: false,
        username,
        password,
      });

      if (res?.status === 200) {
        return res; // Return the whole response for success
      } else {
        throw new Error('Login failed'); // Throw an error for failure
      }
    } catch (error) {
      //console.error('Login failed:', error);
      throw error; // Re-throw the error to let React Query handle it
    }
  };

  const mutation = useMutation({
    mutationFn: postUser,
    onError: (error: Error) => {
      toast.error('Login failed. Please check your credentials and try again.', )
      setTimeout(() => {
        toast.dismiss();
      }, 60000);
    },
    onSuccess: (data) => {
      toast.success('Login successful!');
      setTimeout(() => {
        toast.dismiss();
      }, 60000);
      router.push('/sustainablesips/dashboard');
    },
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await mutation.mutateAsync();
    } catch (error) {
      console.error('Login failed:', error);
    }
  };


  return (
    <div className="flex flex-col items-center md:flex-row md:h-screen">
      <Toaster />
      {/* {mutation.isError && (toast.error('Login failed. Please check your credentials and try again.'))} */}
      <div className="flex items-center justify-center w-full md:w-1/2">
        <Image src="/oasis.png" alt="Login Image" width={800} height={600} priority={true} />
      </div>
      <div className="flex flex-col items-center justify-center w-full md:w-1/4">
        <div className="max-w-md space-y-8">
          <div>
            <Image src="/oasis.png" alt="Logo" width={150} height={150} priority={true} className="mx-auto hidden md:block" />
            <h1 className="text-base font-bold">Log in into your account</h1>
            <p className="mt-2 text-sm text-gray-600">Welcome back! Please enter your details.</p>
          </div>
          <form onSubmit={handleLogin} className="mt-8 space-y-6">
            <div>
              <label htmlFor="username" className="block font-bold text-gray-700">
                username
              </label>
              <input
                id="username"
                type="username"
                placeholder="Enter your username"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md bg-gray-100 bg-opacity-70 focus:bg-opacity-100 text-sm"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-bold text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md bg-gray-100 bg-opacity-70 focus:bg-opacity-100 text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 mb-4 md:mb-0 font-bold text-white bg-[orange] rounded-md hover:bg-[rgba(255,171,64,0.9)] focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 disabled:bg-gray-700 disabled:cursor-not-allowed"
              disabled={mutation.isPending ? true : false}
            >
              {mutation.isPending ? 'loading ...' : "Sign in"}
              {/* {mutation.isError && 'loading ...'} */}
              {/* {mutation.isPending && 'loading ...'} */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
