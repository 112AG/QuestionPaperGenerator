import React, { createContext, useState } from 'react'
import { useRouter } from 'next/router';

export const AppContext = createContext();

function AppContextProvider ({children}) {
    const [firstletter, setFirstLetter] = useState('');

    const navigate = useRouter();

    function handleLogOut () {
        navigate.push('/login');
    }


    const value ={
        firstletter,
        setFirstLetter,
        handleLogOut
    }
    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider