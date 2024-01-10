// pages/edit.js

import React, { useState } from "react";

const EditPage = () => {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    role: "Developer",
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add logic to handle form submission (e.g., send data to the server)
  //   console.log("Form submitted with data:", formData);
  // };

  return (
    <div className="max-w-lg mx-auto mt-20 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Edit User</h2>
      <form className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            // onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            // onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            // onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            // onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="role" className="block text-sm font-medium text-gray-600">
            Role
          </label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            // onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            className="bg-[#e69b04] text-white p-2 rounded-md hover:bg-[rgba(255,171,64,0.9)]"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPage;
