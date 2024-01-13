import React, { useState, useEffect, useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik"
import { object, string, number, date, InferType } from 'yup';
import axios from 'axios';
import { Modal } from '@nextui-org/react';
import { EditModalContext } from '@/context/ModalContext';

const AddProductForm = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { onClose } = useContext(EditModalContext)
  const productSchema = object({
    id: number().required("id is required"),
    name: string().required("product name is required"),
    quantity: number().required("product quantity is required").positive().integer(),
    buying_price: number().required("buying price is required").positive().integer(),
    selling_price: number().required("selling price is required").positive().integer(),
    description: string().required("a short description is required "),
  });


  type Product = InferType<typeof productSchema>;

  useEffect(() => {
    // Fetch data from your Django REST framework API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://sustainableapis.onrender.com/api/products/list/');
        setProducts(response.data);
        console.log('products')
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  return (
    <div>
      <Formik
        initialValues={{ name: '', quantity: '', buying_price: '', selling_price: '', description: '' }}
        validationSchema={productSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            setSubmitting(false);
            onClose()
          }, 400);
        }}
      >
        {({ isSubmitting, isValid, errors, dirty }) => (
          <Form>
            <Field type="text" name="name" placeholder="product name" className="mt-1 mb-2 p-2 border border-gray-300 rounded-md w-full" />
            <ErrorMessage name="name" component="div" />
            <Field type="number" name="quantity" placeholder="product quantity" className="mt-1 mb-2 p-2 border border-gray-300 rounded-md w-full" />
            <ErrorMessage name="quantity" component="div" />
            <Field type="number" name="buying_price" placeholder="buying_price" className="mt-1 mb-2 p-2 border border-gray-300 rounded-md w-full" />
            <ErrorMessage name="buying_price" component="div" />
            <Field type="number" name="selling_price" placeholder="selling price" className="mt-1 mb-2 p-2 border border-gray-300 rounded-md w-full" />
            <ErrorMessage name="selling_price" component="div" />
            <Field as="textarea" name="description" rows={5} placeholder="Description..." className="mt-1 mb-2 p-2 border border-gray-300 rounded-md w-full" />
            {/* Display the fetched items */}
            <ul>
              {products.map((product) => (
                <li key={product.id}>
                  {product.name} - {product.quantity} - {product.buying_price} - {product.selling_price} - {product.description}
                </li>
              ))}
            </ul>


            <ErrorMessage name="description" component="div" />
            <button type="submit" disabled={isSubmitting} className='bg-orange-300 mb-4 w-full px-4 py-2  shadow-md rounded-md text-black font-semibold cursor-pointer'>
              add product
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default AddProductForm;