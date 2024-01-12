"use client"
import React, { useState } from 'react';
import Image from "next/image";


const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const res=LoginUser()
        if(res== 20){
            rou
        }
        // Implement your login logic here
    };

    return (
        <div className="flex flex-col items-center md:flex-row md:h-screen">
            <div className="flex items-center justify-center w-full md:w-1/2">
                <Image src="/oasis.png" alt="Login Image" width={800} height={600} />
            </div>
            <div className="flex flex-col items-center justify-center w-full md:w-1/4">
                <div className="max-w-md space-y-8">

                    <div>
                        <Image src="/oasis.png" alt="Logo" width={150} height={150} className="mx-auto" />
                        <h1 className="text-base font-bold">Log in into your account</h1>
                        <p className="mt-2 text-sm text-gray-600">
                            Welcome back! Please enter your details.
                        </p>
                    </div>
                    <form onSubmit={handleLogin} className="mt-8 space-y-6">
                        <div>
                            <label htmlFor="email" className="block font-bold text-gray-700">
                                Email address
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md bg-gray-100 bg-opacity-70 focus:bg-opacity-100 text-sm"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-3 font-bold text-white bg-[#e69b04] rounded-md hover:bg-[rgba(255,171,64,0.9)] focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
                            >
                                Sign In
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
