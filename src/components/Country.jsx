import { useEffect, useState } from "react"
import axios from "axios";

import './Country.css'

import foto from "../assets/desk.webp"
import bandera from "../assets/bandera.webp"
import countryNotFound from "../assets/country-not-found.webp"

const Country = ({data, setPaisSeleccionado}) => {

    const [image,setImage] = useState()
    async function getImage (buscar){
        const res = await axios({
            url: `${import.meta.env.VITE_UNSPLASH_URL_BASE}/search/photos`,
            method: "GET",
            params: {
                page:1,
                per_page:1,
                orientation:"landscape",
                query: buscar,
                client_id: import.meta.env.VITE_CLIENT_ID_UNSPLASH,
            }
        })
        console.log(res)
        return res.data.results[0].urls.small
        // console.log(res.data.results[0].urls.small)

    }
    // const [dataWithImage,setDataWithImage] = useState([])
    
    // useEffect(() => {
    //     let count = 10;
    //     // import.meta.env.VITE_REACT_APP_GRAPHQL
    //     // let buscado = "United Arab Emirates";
    //     let datos = data.countries.slice(0, 1);
    //     // console.log(datos)
    //     setDataWithImage(datos.map(async (country) => {
    //         // let image = getImage(country.name);
    //         return await getImage(country.name)
    //     }))
    // },[])

    // console.log(dataWithImage)

    function handleClick(e) {
        setPaisSeleccionado(e.target.querySelector(".name").textContent)
        // e.target.classList.add("bg-blue-500")
    }
    
    return (
        <>
            {
                (data.countries.length !== 0)
                    ? 
                        (
                            data.countries.map((country) => (
                                <div key={country.name} className="country-element" onClick={handleClick}>
                                    <img src={foto} alt="" className="rounded-t-[36px]"/>
                                    <div className="pt-2 pb-4 px-4 flex gap-3 items-center">
                                        <img src={bandera} alt="bandera" className="w-14 h-auto" />
                                        <div>
                                            <p className="name text-blue-500 font-bold text-lg">{country.name}</p>
                                            <p className="">{country.continent.name}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
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