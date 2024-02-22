
import { useEffect } from "react"
import { useQuery } from "@apollo/client"
import './Country.css'

import GET_COUNTRIES from "../graphql/getCountries"

import foto from "../assets/desk.webp"
import bandera from "../assets/bandera.webp"

const Country = () => {

    useEffect(() => {
        
    },[])
    
    const {data, error, loading} = useQuery(GET_COUNTRIES); 
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>

    function handleClick(e) {
        // e.target.classList.add("bg-blue-500")
    }

    // console.log(data)
    return (
        <>
            {data.countries.map((country) => (
                <div key={country.name} className="country-element" onClick={handleClick}>
                    <img src={foto} alt="" className="rounded-t-[36px]"/>
                    <div className="pt-2 pb-4 px-4 flex gap-3 items-center">
                        <img src={bandera} alt="bandera" className="w-14 h-auto" />
                        <div>
                            <p className="text-blue-500 font-bold text-lg">{country.name}</p>
                            <p className="">{country.continent.name}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}



export default Country