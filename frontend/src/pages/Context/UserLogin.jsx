import React, { createContext, useState } from 'react'

export const UserDataContext = createContext()


const UserLogin = ({ children }) => {

    const [ user, setUser ] = useState({
        username: '',
        password: '',
    })

    return (
        <div>
            <UserDataContext.Provider value={{ user, setUser }}>
                {children}
            </UserDataContext.Provider>
        </div>
    )
}

export default UserLogin