import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import { object, string, number, date, InferType } from 'yup';

const EditProduct = () => {
    
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
       initialValues={{ name: '', quantity: '', buying_price:'', selling_price:0 , description:'' }}
       validationSchema={productSchema}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting, isValid, errors, dirty }) => (
         <Form>
           <Field type="text" name="name" placeholder="product name" className="mt-1 mb-2 p-2 border border-gray-300 rounded-md w-full"/>
           <ErrorMessage name="name" component="div" />
           <Field type="number" name="quantity" placeholder="product quantity" className="mt-1 mb-2 p-2 border border-gray-300 rounded-md w-full" />
           <ErrorMessage name="quantity" component="div" />
           <Field type="number" name="buying_price" placeholder="buying_price" className="mt-1 mb-2 p-2 border border-gray-300 rounded-md w-full" />
           <ErrorMessage name="buying_price" component="div" />
           <Field type="number" name="selling_price" placeholder="selling price" className="mt-1 mb-2 p-2 border border-gray-300 rounded-md w-full" />
           <ErrorMessage name="selling_price" component="div" />
           <Field as="textarea" name="description" rows={5} placeholder="Description..." className="mt-1 mb-2 p-2 border border-gray-300 rounded-md w-full" />
          
           
           <ErrorMessage name="description" component="div" />
           <button type="submit" disabled={isSubmitting} className='mb-4 px-4 py-2 mt-2 w-full rounded-md shadow-md bg-orange-300 text-black font-semibold cursor-pointer'>
             update
           </button>
         </Form>
       )}
     </Formik>
   </div>
  )
}

export default EditProduct