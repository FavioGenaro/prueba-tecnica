import { useLazyQuery, useQuery } from "@apollo/client"

import Country from "../components/Country"
import Search from './../components/Search'
import GET_ALL_COUNTRIES from "../graphql/getAllCountries"
import GET_COUNTRIES from "../graphql/getCountries"
import GET_COUNTRY from "../graphql/getCountry"
import { useEffect, useState } from "react"
import CardCountry from "../components/CardCountry"
import axios from "axios";

const Home = () => {

    // TODO: Integrarlo al context
    const {data, error, loading} = useQuery(GET_ALL_COUNTRIES);
    const [getCountries, result] = useLazyQuery(GET_COUNTRIES)
    const [getCountry, resultCountry] = useLazyQuery(GET_COUNTRY)

    const [countries,setCountries] = useState(null);
    const [paisBuscado,setPaisBuscado] = useState('')
    const [paisSeleccionado,setPaisSeleccionado] = useState('')
    const [filterContinent,setFilterContinent] = useState(new Set([]))
    const [cardCountry,setCardCountry] = useState(null)

    // extrayendo data de los paises
    useEffect(()=> {
        let dataCountry = {
            countries: []
        }
        if(data!==undefined){
             // Petición de imágenes
            axios({
                url: `${import.meta.env.VITE_UNSPLASH_URL_BASE}/collections/83895897/photos`,
                method: "GET",
                params: {
                    page:1,
                    per_page:30,
                    client_id: import.meta.env.VITE_CLIENT_ID_UNSPLASH,
                }
            })
            .then( res => {
                let count = 0;

                data.countries.forEach(co => {
                    if(count==30) count=0;
                    dataCountry.countries.push({
                        ...co,
                        image: res.data[count].urls.small
                    })
                    count++;
                })
                setCountries(dataCountry)
                
            })
            .catch( err => console.log(err))

            
        }
    }, [data])

    // filtro de data por continente
    useEffect(()=> {
        if(data!==undefined){
            if(filterContinent.size === 0){
                setCountries(data)
            }else{
                setCountries({
                    countries: data.countries.filter( c => filterContinent.has(c.continent.name))   
                })
            }
        }
    }, [filterContinent])

    // POR la barra de busqueda
    useEffect(()=> {
        if(data!==undefined){
            if(paisBuscado!==""){
                let search = "^" + paisBuscado[0].toUpperCase() + paisBuscado.slice(1)
                getCountries({variables: {nameToSearch: search}})
            }else{
                setCountries(data)
            }
        }
    }, [paisBuscado])

    useEffect(()=> {
        if(data!==undefined){
            if(result.data!==undefined){
                setCountries(result.data);
            }
        }
    }, [result])

    // CLICK A PAIS
    useEffect(()=> {
        if(data!==undefined){
            console.log(paisSeleccionado)
            if(paisSeleccionado !== ''){
                getCountry({variables: {name: paisSeleccionado}})
            }
        }
    }, [paisSeleccionado])

    useEffect(()=> {
        if(data!==undefined){
            if(resultCountry.data!==undefined){
                setCardCountry({
                    ...resultCountry.data.countries[0],
                    image: countries.countries.filter(e => e.name == paisSeleccionado)[0].image
                })
            }
        }
    }, [resultCountry])

    console.log(countries)

    return (
        <>
            <Search 
                setCountries={setCountries} 
                data={data} 
                setPaisBuscado={setPaisBuscado} 
                paisBuscado={paisBuscado}
                filterContinent={filterContinent}
                setFilterContinent={setFilterContinent}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 md:p-12">
                {
                    
                    loading && ("Loading...") 
                }
                {
                    (error) && <pre>{error.message}</pre>
                }
                {
                    (countries!==null) && 
                    (<Country data={countries} setPaisSeleccionado={setPaisSeleccionado}/>)
                }
                
            </div>
            {
                (paisSeleccionado !== '' && cardCountry !==null) 
                    && 
                (<CardCountry 
                    dataCountry={cardCountry} 
                    setPaisSeleccionado={setPaisSeleccionado}
                />)
            }
        </>
    )
}

export default Home