import { useLazyQuery, useQuery } from "@apollo/client"

import Country from "../components/Country"
import Search from './../components/Search'
import GET_ALL_COUNTRIES from "../graphql/getAllCountries"
import GET_COUNTRIES from "../graphql/getCountries"
import GET_COUNTRY from "../graphql/getCountry"
import { useEffect, useState } from "react"
import CardCountry from "../components/CardCountry"
const Home = () => {

    const {data, error, loading} = useQuery(GET_ALL_COUNTRIES);
    const [getCountries, result] = useLazyQuery(GET_COUNTRIES)
    const [getCountry, resultCountry] = useLazyQuery(GET_COUNTRY)

    // if (loading) return "Loading...";
    // if (error) return <pre>{error.message}</pre>
    const [countries,setCountries] = useState(null);
    const [paisBuscado,setPaisBuscado] = useState('')
    const [paisSeleccionado,setPaisSeleccionado] = useState('')
    const [filterContinent,setFilterContinent] = useState(new Set([]))

    // console.log(data)
    useEffect(()=> {
        if(data!==undefined){
            setCountries(data)
        }
    }, [data])

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
                console.log("Country ",resultCountry.data.countries[0])
            }
        }
    }, [resultCountry])

    // console.log(countries)
    // console.log(paisBuscado)
    // console.log('a')
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
                    (countries!==null) && (<Country data={countries} setPaisSeleccionado={setPaisSeleccionado} />)
                }
                
            </div>
            {
                (resultCountry.data!==undefined && paisSeleccionado !== '') 
                    && 
                (<CardCountry dataCountry={resultCountry.data.countries[0]} setPaisSeleccionado={setPaisSeleccionado}/>)
            }
        </>
    )
}

export default Home