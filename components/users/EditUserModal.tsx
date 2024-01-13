"use client"
import React, { useContext } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
import { EditModalContext } from "@/context/ModalContext";
import EditUser from "./EditUser";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function EditUserModal() {


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
              <ModalHeader className="flex flex-col gap-1 font-semibold">Edit user</ModalHeader>
              <ModalBody>
                <EditUser/>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
