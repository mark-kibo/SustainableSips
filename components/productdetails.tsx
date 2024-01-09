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
        <div className="max-w-xs mx-auto bg-white rounded-md overflow-hidden shadow-md mt-20 ">
            <div className="image-container">
                <Image src={image} alt={`${name} Image`} width={420} height={70} />
            </div>
            <div className="p-2">
                <h2 className="text-lg font-semibold mb-2">{name}</h2>
                <div className="flex justify-between items-center mb-2">
                    <div className="text-gray-700">Buying Price: ${Buyingprice}</div>
                    <div className="text-gray-700">Selling Price: ${sellingprice}</div>
                </div>
                <div className="mb-2">
                    <div className="text-gray-700">Quantity: {Quantity}</div>
                    <div className="text-gray-700">Description: {Description}</div>
                </div>
                <div className="mb-2 flex justify-center">
                    <button
                        className="bg-[#ffab40]  text-white px-3 py-1 rounded-md hover:bg-[rgba(255,171,64,0.9)]  focus:outline-none focus:shadow-outline-blue active:bg-blue-800 text-sm"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
