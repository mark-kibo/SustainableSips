"use client"

import AddProductForm from '@/components/products/AddProduct'
import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react'
import React, { useContext } from 'react'
import { FaPlus } from 'react-icons/fa'

const AddProduct = () => {
    const { onOpen, onOpenChange, onClose, isOpen } = useDisclosure()
    return (
        <>
            <button onClick={onOpen} className='px-4 py-2 flex justify-between items-center gap-2 bg-primary-200 rounded-md shadow-md mb-2  text-white'><FaPlus /> add product</button>
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