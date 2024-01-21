import React, { Suspense, useState } from 'react'
import { Formik, Form, Field, ErrorMessage, } from "formik"
import { object, string, number, date, InferType } from 'yup';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Item } from '@radix-ui/react-dropdown-menu';
import { useSession } from 'next-auth/react';
import { postUser } from './DeleteRequest';

const AddUser = () => {
  const [showPassword, setShowPassword] = useState(false)

  const { data: session } = useSession()
  console.log(session?.user)

  let userSchema = object({
    username : string().required("username required"),
    password:string().required("password is required ").min(4, "not less than four characters")
  });

  
type Product = InferType<typeof userSchema>;

  return (
    <div>
     <Formik
       initialValues={{ username: '', password: '' }}
       validationSchema={userSchema}
       onSubmit={async(values, { setSubmitting }) => {
        
         const res= await postUser(values)
       }}
     >
       {({ isSubmitting, isValid, errors, dirty }) => (
         <Form>
           <Field type="text" name="username" placeholder="john doe" className="mt-1 mb-2 p-2 border border-gray-300 rounded-md w-full"/>
           <ErrorMessage name="username" component="div" />
          
           <Field type="password" name="password" placeholder="....." className="mt-1 mb-2 p-2 border border-gray-300 rounded-md w-full" />
           <ErrorMessage name="password" component="div" />
           {/* <Field type="text" name="role" placeholder="admin or clerk" className="mt-1 mb-2 p-2 border border-gray-300 rounded-md w-full" /> */}
           
          
           
           
           <button type="submit" disabled={isSubmitting} className='bg-orange-300 mb-4 w-full px-4 py-2  shadow-md rounded-md text-black font-semibold cursor-pointer disabled:bg-gray-400'>
             {isSubmitting ? "adding ...." : "add user"}
           </button>
         </Form>
       )}
     </Formik>
   </div>
  )
}

export default AddUser;