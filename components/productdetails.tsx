// components/ProductDetails.tsx
import React from 'react';
import Image from 'next/image';

interface Product {
    id: number;
    name: string;
    image: string;
    Buyingprice: number;
    sellingprice: number;
    Quantity: number;
    Description: string;
}

const ProductDetails: React.FC<{ product: Product }> = ({ product }) => {
    const { id, name, image, Buyingprice, sellingprice, Quantity, Description } = product;

    return (
        <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
            <Image src={image} alt={`${name} Image`} width={600} height={300} />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{name}</h2>
                <div className="flex justify-between items-center mb-4">
                    <div className="text-gray-700">Buying Price: ${Buyingprice}</div>
                    <div className="text-gray-700">Selling Price: ${sellingprice}</div>
                </div>
                <div className="mb-4">
                    <div className="text-gray-700">Quantity: {Quantity}</div>
                    <div className="text-gray-700">Description: {Description}</div>
                </div>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;
