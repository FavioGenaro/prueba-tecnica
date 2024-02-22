import { useState } from "react"
import './Search.css'

import { IoSearch } from "react-icons/io5";
import FilterContinent from "./FilterContinent";

const Search = () => {

    const [paisBuscado,setPaisBuscado] = useState('')
    const [mostrarFilter,setMostrarFilter] = useState(false)

    return (
        <div className="search-content">
            <form action="" className="search">
                <div className="input">
                    <label htmlFor="search" className="text-xl text-gray-600">País</label>
                    <input 
                        className={`text-sm text-gray-600 focus:outline-none border-b-2 border-white ${(mostrarFilter) && "border-blue-400"} focus:border-blue-400`}
                        // onClick={()=> setMostrarFilter(!mostrarFilter)}
                        onFocus={()=> setMostrarFilter(!mostrarFilter)}
                        // onBlur={()=> setMostrarFilter(false)}
                        type="text"
                        placeholder="Escribe el país que seas ver"
                        name="search" 
                        id="" 
                        value={paisBuscado} onChange={(e) => setPaisBuscado(e.target.value)}/>
                    {
                        mostrarFilter && (<FilterContinent/>)
                    }
                </div>

                <button className="btn">
                    <IoSearch size={20}/>
                    <p className="hidden sm:block">Buscar</p>
                </button>
            </form>
            
        </div>
    )
}

export default Search