import React, { useState, createContext } from "react"


export const UserContext = createContext()

export const UserProvider = (props) => {

    const [ AuthenticatedUser, setAuthenticatedUser ] = useState()

    return (
        <UserContext.Provider value = {[ AuthenticatedUser, setAuthenticatedUser ]}>
            { props.children }
        </UserContext.Provider>
    )
}