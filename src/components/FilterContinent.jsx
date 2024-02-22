import "./FilterContinent.css"

import africaImg from "../assets/africa.webp"
import asiaImg from "../assets/asia.webp"
import europaImg from "../assets/europa.webp"
import oceaniaImg from "../assets/oceania.webp"
import norteAmericaImg from "../assets/norte-america.webp"
import surAmericaImg from "../assets/america-del-sur.webp"

let contienentes = [
    {
        id: 1,
        name: "Europe",
        image: europaImg,
        active: false
    },
    {
        id: 2,
        name: "North America",
        image: norteAmericaImg,
        active: false
    },
    {
        id: 3,
        name: "Asia",
        image: asiaImg,
        active: false
    },
    {
        id: 4,
        name: "oceania",
        image: oceaniaImg,
        active: false
    },
    {
        id: 5,
        name: "Africa",
        image: africaImg,
        active: false
    },
    {
        id: 6,
        name: "South America",
        image: surAmericaImg,
        active: false
    }
]

const FilterContinent = ({setFilterContinent, filterContinent}) => {

    function handleSelectContinent (id){

        let continent = contienentes.filter(co => co.id == id);
        continent[0].active = !continent[0].active;

        if(filterContinent.includes(continent[0].name)){ //existe se elimina
            setFilterContinent(filterContinent.filter(co => co !== continent[0].name))
        }else{ // no exite, se agrega
            setFilterContinent([...filterContinent,  continent[0].name])
        }
    }

    function handleClearFilterContinent(){
        
        if(filterContinent.length!==0){
            contienentes = contienentes.map( co => { // quitamos los marcos
                return {...co, active: false}
            })
            setFilterContinent([])
        }
    }

    return (
        <div className="filter-content">
            <div className="head-filter">
                <p>Filtrar por contienentes</p>
                <button type="reset" onClick={()=> handleClearFilterContinent()} >Limpiar</button>
            </div>
            <div className="continents">
                {
                    contienentes.map((continent)=> (
                        <div key={continent.id} className="continent" onClick={() => handleSelectContinent(continent.id)} >
                            <div className={`img-container ${(continent.active==true) && ("select")}`}>
                                <img src={continent.image} alt="Europa" id={continent.name} className="" />
                            </div>
                            <p>{continent.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FilterContinent
