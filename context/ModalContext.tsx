"use client"
import { useDisclosure } from '@nextui-org/react';
import React, { ReactNode, createContext, useReducer, useState } from 'react'

export const EditModalContext =createContext<any>("")

const EditModalContextProvider = ({children}:{children:ReactNode}) => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [id, setId]=useState()
    const [openModal, dispatch] = useReducer(handleOpenModal, false)
    function handleOpenModal(currentState: boolean, action: any) {
        switch (action.type) {
            case "OPEN":
                return true;
            case "CLOSE":
                return false;
            default:
                return currentState;
        }
    }
    // console.log(open)

    const context={
        dispatch,
        openModal,
        isOpen,
        onOpen,
        onOpenChange,
        id,
        setId
    }

    console.log(id)
  return (
    <EditModalContext.Provider value={context}>
        {children}
    </EditModalContext.Provider>
  )
}

export default EditModalContextProvider