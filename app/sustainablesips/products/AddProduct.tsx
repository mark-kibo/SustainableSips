"use client"

import AddProductForm from '@/components/products/AddProduct'
import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react'
import React, { useContext } from 'react'
import { FaPlus } from 'react-icons/fa'

const AddProduct = () => {
    const { onOpen, onOpenChange, onClose, isOpen } = useDisclosure()
    return (
        <>
            <button onClick={onOpen} className='"w-full px-4 py-3 mb-4 md:mb-0 font-bold text-white bg-[orange] rounded-md hover:bg-[rgba(255,171,64,0.9)] focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 disabled:bg-gray-700'> Add product</button>
            <Modal
                backdrop="opaque"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                motionProps={{
                    variants: {
                        enter: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                ease: "easeOut",
                            },
                        },
                        exit: {
                            y: -20,
                            opacity: 0,
                            transition: {
                                duration: 0.2,
                                ease: "easeIn",
                            },
                        },
                    }
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 font-semibold">Add Product</ModalHeader>
                            <ModalBody>
                                <AddProductForm />
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </>
    )
}

export default AddProduct