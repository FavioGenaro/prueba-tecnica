import { useState } from "react"
import "./FilterContinent.css"

import africaImg from "../assets/africa.webp"
import asiaImg from "../assets/asia.webp"
import europaImg from "../assets/europa.webp"
import oceaniaImg from "../assets/oceania.webp"
import norteAmericaImg from "../assets/norte-america.webp"


const FilterContinent = ({setFilterContinent, filterContinent}) => {

    function handleSelectContinent (e){
        e.target.classList.add('select')
        setFilterContinent(new Set([...filterContinent,  e.target.id]))
    }

    return (
        <div className="filter-content">
            <div className="head-filter">
                <p>Filtrar por contienentes</p>
                <button type="reset" onClick={()=> setFilterContinent(new Set([]))} >Limpiar</button>
            </div>
            <div className="continents">
                <div className="continent" >
                    <div className="img-container select">
                        <img src={europaImg} alt="Europa" id="Europe" className="" onClick={handleSelectContinent} />
                    </div>
                    <p>Europa</p>
                </div>
                <div className="continent">
                    <div className="img-container">
                        <img src={norteAmericaImg} alt="América" id="North America" onClick={handleSelectContinent}/>
                    </div>
                    <p>América</p>
                </div>
                <div className="continent">
                    <div className="img-container">
                        <img src={asiaImg} alt="Asia" id="Asia" className="" onClick={handleSelectContinent}/>
                    </div>
                    <p>Asia</p>
                </div>
                <div className="continent">
                    <div className="img-container">
                        <img src={oceaniaImg} alt="Oceanía" id="Oceania" className="" onClick={handleSelectContinent}/>
                    </div>
                    <p>Oceanía</p>
                </div>
                <div className="continent">
                    <div className="img-container">
                        <img src={africaImg} alt="Africa" id="Africa" className="" onClick={handleSelectContinent}/>
                    </div>
                    <p>Africa</p>
                </div>
            </div>
        </div>
    )
}

export default FilterContinent
