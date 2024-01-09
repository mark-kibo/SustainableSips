"use client"
// components/UserCreation.js
import { useState } from 'react';

const UserCreation = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState(''); // Assuming roles are predefined

    // const handleCreateUser = async () => {
    //     // Handle user creation logic (e.g., API request to backend)
    //     console.log('Creating user:', {
    //         firstName,
    //         lastName,
    //         email,
    //         phoneNumber,
    //         password,
    //         confirmPassword,
    //         role,
    //     });

    //     // Add backend logic for user creation and error handling
    // };
    // const handleProfileImageChange = (e) => {
    //     const file = e.target.files[0];
    //     setProfileImage(file);
    // };

    return (
        <div className="max-w-2xl mx-auto mt-20 p-4 pb-16 border rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Add New User</h2>
            <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        className="mt-1 p-2 w-full border rounded-md"
                        value={firstName}
                    // onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        className="mt-1 p-2 w-full border rounded-md"
                        value={lastName}
                    // onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="mt-1 p-2 w-full border rounded-md"
                        value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        className="mt-1 p-2 w-full border rounded-md"
                        value={phoneNumber}
                    // onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="mt-1 p-2 w-full border rounded-md"
                        value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="mt-1 p-2 w-full border rounded-md"
                        value={confirmPassword}
                    // onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="role" className="block text-sm font-medium text-gray-600">
                        Role
                    </label>
                    <select
                        id="role"
                        className="mt-1 p-2 w-full border rounded-md"
                        value={role}
                    // onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="" disabled>
                            Select Role
                        </option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="profileImage" className="block text-sm font-medium text-gray-600">
                        Upload Profile Image
                    </label>
                    <input
                        type="file"
                        id="profileImage"
                        accept="image/*"
                        className="mt-1 p-2 w-full border rounded-md"
                    // onChange={handleProfileImageChange}
                    />
                </div>
            </div>
            <div className="text-center mr-4">
                <button
                    className="w-32 h-10 bg-[#e69b04] text-white px-4 py-2 rounded-md hover:bg-[rgba(255,171,64,0.9)]"
                // onClick={handleCreateUser}
                >
                    Create User
                </button>
            </div>
        </div>
    );
};

export default UserCreation;
