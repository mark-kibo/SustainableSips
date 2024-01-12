"use client"
import React, { useContext } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
import { EditModalContext } from "@/context/ModalContext";
import EditProduct from "./EditProduct";

export default function EditProductModal() {


  const{onOpen, isOpen, onOpenChange} = useContext(EditModalContext)

  return (
    <>
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
              <ModalHeader className="flex flex-col gap-1 font-semibold">Edit your product</ModalHeader>
              <ModalBody>
                <EditProduct/>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
