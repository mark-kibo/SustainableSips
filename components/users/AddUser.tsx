import React, { Suspense, useState } from 'react'
import { Formik, Form, Field, ErrorMessage, } from "formik"
import { object, string, number, date, InferType } from 'yup';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Item } from '@radix-ui/react-dropdown-menu';
import { useSession } from 'next-auth/react';

const AddUser = () => {
  const [showPassword, setShowPassword] = useState(false)

  const {data: session} = useSession()
  console.log(session?.user)

  // fetch roles
  const {data, isLoading}= useQuery(
    {
      queryKey:[""],
      queryFn:async()=>{
        let response= await axios.get("http://sustainablesips.onrender.com/api/user/roles/", {
          withCredentials: true,
          headers:{
            "Content-type":"application/json",
            "Authorization": `Token `

          }

        })
        console.log(response.data)
        return response.data.results
      }
    }
  )

  let userSchema = object({
    username: string().required("username name is required"),
    email: string().required("user email is required").email(),
    password: string().required("password is required").min(4, "not less than four").max(8, "exceeds limit of 8"),
    phone_number: string().required("phone contact is required"),
    // role: number().required("role is required")
  });


  type Product = InferType<typeof userSchema>;

  return (
    <div>
      <Formik
        initialValues={{ username: '', email: '', password: '', phone_number: '', role: '' }}
        validationSchema={userSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values)
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, isValid, errors, dirty }) => (
          <Form>
            <Field type="text" name="username" placeholder="username" className="mt-1 p-2 border mb-2 border-gray-300 rounded-md w-full" />
            <ErrorMessage name="username" component="div" />
            <Field type="email" name="email" placeholder="john@doe.com" className="mt-1 p-2 border mb-2 border-gray-300 rounded-md w-full" />
            <ErrorMessage name="email" component="div" />
            <Field type={showPassword ? "text" : "password"} name="password" placeholder="....." className="mt-1 p-2 border mb-2 border-gray-300 rounded-md w-full" />
            <ErrorMessage name="password" component="div" />

            <div className='mt-2 mb-2 flex items-center justify-start gap-2'>
              <label htmlFor="showpassword" className='flex items-center '>show password</label>
              <input type="checkbox" className='flex items-center border  border-gray-300 rounded-full shadow-sm' onClick={() => setShowPassword(!showPassword)} />
            </div>
            <Suspense fallback="loading..">
              <select name="role" id="" className="mt-1 p-2 mb-2 border border-gray-300 rounded-md w-full">
                <option value="1">Admin</option>
                <option value="2">clerk</option>
              </select>
            </Suspense>

            <ErrorMessage name="role" component="div" />

            <button type="submit" disabled={isSubmitting} className='mb-4 px-4 py-2 mt-2 w-full rounded-md shadow-md  bg-orange-300 text-black font-semibold cursor-pointer'>
              add
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default AddUser;