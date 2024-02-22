import { useEffect, useState } from "react"
import axios from "axios";

import './Country.css'

import bandera from "../assets/bandera.webp"
import countryNotFound from "../assets/country-not-found.webp"

const Country = ({data, setPaisSeleccionado}) => {
    
    function handleClick(e) {
        setPaisSeleccionado(e.target.querySelector(".name").textContent)
    }
    
    return (
        <>
            {
                (data.countries.length !== 0)
                    ? 
                        (
                            data.countries.map((country) => {
                                // count = count + 1;
                                // if (count == 30) count=0;
                                return (
                                    <div key={country.name} className="country-element" onClick={handleClick}>
                                        <img src={country.image} alt="" className="rounded-t-[36px] h-40 w-full"/>
                                        <div className="pt-2 pb-4 px-4 flex gap-3 items-center">
                                            <img src={bandera} alt="bandera" className="w-14 h-auto" />
                                            <div>
                                                <p className="name text-blue-500 font-bold text-lg">{country.name}</p>
                                                <p className="">{country.continent.name}</p>
                                            </div>
                                        </div>
                                    </div>
                            )})
                        )
                    :
                        (
                            <div >
                                <p className="text-gray-500">País no encontrado</p>
                                <div className="w-full">
                                    <img className="w-full" src={countryNotFound} alt="Pais no encontrado" />
                                </div>
                            </div>
                        )
            }
        </>
    )
}



export default Country