import "./FilterContinent.css"

import africaImg from "../assets/africa.webp"
import asiaImg from "../assets/asia.webp"
import europaImg from "../assets/europa.webp"
import oceaniaImg from "../assets/oceania.webp"
import norteAmericaImg from "../assets/norte-america.webp"


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
    }
]

const FilterContinent = ({setFilterContinent, filterContinent}) => {

    function handleSelectContinent (id){

        let continent = contienentes.filter(co => co.id == id);
        continent[0].active = !continent[0].active;

        console.log("existe", filterContinent.includes(continent[0].name))
        if(filterContinent.includes(continent[0].name)){ //existe se elimina
            setFilterContinent(filterContinent.filter(co => co !== continent[0].name))

        }else{ // no exite, se agrega
            setFilterContinent([...filterContinent,  continent[0].name])
        }
    }

    function handleClearFilterContinent(){
        contienentes = contienentes.map( co => {
            return {...co, active: false}
        })
        setFilterContinent([])
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
                {/* <div className="continent"  onClick={handleSelectContinent} >
                    <div className="img-container">
                        <img src={europaImg} alt="Europa" id="Europe" className="" />
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
                </div> */}
            </div>
        </div>
    )
}

export default FilterContinent
