"use client"
import React, { ReactNode, createContext, useReducer } from 'react'

export const SideNavContext =createContext<any>("")

const SideNavContextProvider = ({children}:{children:ReactNode}) => {

    const [open, dispatch] = useReducer(sideNavReducer, false)
    function sideNavReducer(currentState: boolean, action: any) {
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
        open
    }
  return (
    <SideNavContext.Provider value={context}>
        {children}
    </SideNavContext.Provider>
  )
}

export default SideNavContextProvider