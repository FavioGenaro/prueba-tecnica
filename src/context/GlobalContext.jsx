import {createContext, useEffect, useReducer, useState} from 'react'
import GET_ALL_COUNTRIES from "../graphql/getAllCountries"

const {data, error, loading} = useQuery(GET_ALL_COUNTRIES);

const initialState = {
    countries:[
    ]
}

// CONTEXTO
export const GlobalContext = createContext(initialState);

// Proveedor del contexto
export const GlobalProvider = ({children}) => {

    const [countries,setCountries] = useState()

    return (
        <GlobalContext.Provider value={{
            countries, setCountries
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
