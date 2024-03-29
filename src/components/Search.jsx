import { useState } from "react"
import './Search.css'

import { IoSearch } from "react-icons/io5";
import FilterContinent from "./FilterContinent";

const Search = ({data, setPaisBuscado, paisBuscado, setFilterContinent, filterContinent}) => {

    const [mostrarFilter,setMostrarFilter] = useState(false)

    return (
        <div className="search-content">
            <form action="" className="search">
                <div className="input">
                    <label htmlFor="search" className="text-xl text-gray-600">País</label>
                    <input 
                        className={`text-sm text-gray-600 focus:outline-none border-b-2 border-white ${(mostrarFilter) && "border-blue-400"} focus:border-blue-400`}
                        onClick={()=> setMostrarFilter(!mostrarFilter)}
                        type="text"
                        placeholder="Escribe el país que seas ver"
                        name="search" 
                        id="" 
                        value={paisBuscado} onChange={(e) => setPaisBuscado(e.target.value)}/>
                    {
                        mostrarFilter && (
                            <FilterContinent 
                                data={data}
                                filterContinent={filterContinent}
                                setFilterContinent={setFilterContinent}
                            />
                        )
                    }
                </div>

                <button 
                    className="btn"
                    onClick={(e) => {
                        e.preventDefault()
                        setPaisBuscado(paisBuscado)
                    }}
                >
                    <IoSearch size={20}/>
                    <p className="hidden sm:block">Buscar</p>
                </button>
            </form>
            
        </div>
    )
}

export default Search