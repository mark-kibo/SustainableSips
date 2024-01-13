import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import { object, string, number, date, InferType } from 'yup';
import {  postProduct } from './ProductRequests';

const AddProductForm = () => {
    
  let productSchema = object({
    name: string().required("product name is required"),
    quantity: number().required("product quantity is required").positive().integer(),
    buying_price: number().required("buying price is required").positive().integer(),
    selling_price: number().required("selling price is required").positive().integer(),
    description: string().required("a short description is required "),
    
  });

  
type Product = InferType<typeof productSchema>;

  return (
    <div>
     <Formik
       initialValues={{ name: '', quantity: '', buying_price:'', selling_price:'' , description:'', image:'' }}
       validationSchema={productSchema}
       onSubmit={async(values, { setSubmitting }) => {
         const res= await postProduct(values)
       }}
     >
       {({ isSubmitting, isValid, errors, dirty }) => (
         <Form >
           <Field type="text" name="name" placeholder="product name" className="mt-1 mb-2 p-2 border border-gray-300 rounded-md w-full"/>
           <ErrorMessage name="name" component="div" />
           <Field type="number" name="quantity" placeholder="product quantity" className="mt-1 mb-2 p-2 border border-gray-300 rounded-md w-full" />
           <ErrorMessage name="quantity" component="div" />
           <Field type="number" name="buying_price" placeholder="buying_price" className="mt-1 mb-2 p-2 border border-gray-300 rounded-md w-full" />
           <ErrorMessage name="buying_price" component="div" />
           <Field type="number" name="selling_price" placeholder="selling price" className="mt-1 mb-2 p-2 border border-gray-300 rounded-md w-full" />
           <ErrorMessage name="selling_price" component="div" />
           <Field as="textarea" name="description" rows={5} placeholder="Description..." className="mt-1 mb-2 p-2 border border-gray-300 rounded-md w-full" />

            <input type="file" name="image" id="" multiple />
           
           <ErrorMessage name="description" component="div" />
           <button type="submit" disabled={isSubmitting} className='bg-orange-300 mb-4 w-full px-4 py-2  shadow-md rounded-md text-black font-semibold cursor-pointer disabled:bg-gray-500'>
             {isSubmitting ? "adding product ..." : "add product"}
           </button>
         </Form>
       )}
     </Formik>
   </div>
  )
}

export default AddProductForm