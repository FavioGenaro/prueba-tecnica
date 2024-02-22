import { IoClose } from "react-icons/io5";
import './CardCountry.css'

import bandera from "../assets/bandera.webp"

const CardCountry = ({dataCountry, setPaisSeleccionado}) => {

    return (
        <div className="fixed text-black w-full bottom-0 sm:w-auto sm:bottom-0 sm:right-0 bg-white py-4 px-8 border-2 border-gray-200">
            <div>
                <IoClose className="ml-auto" size={20} onClick={() => setPaisSeleccionado('')}/>
            </div>
            <div>
                <img src="" alt="Imagen Pais" />
                <div className="headCountry flex gap-3">
                    <div className="mr-4 flex items-center">
                        <img src={bandera} alt="bandera" className="w-14 h-auto " />
                    </div>
                    <div className="feature">
                        <h3 className="text-xl">{dataCountry.name}</h3>
                        <p>{dataCountry.continent.name}</p>
                    </div>
                </div>
            </div>
            <div className="descriptioCountry">
                <div className="feature">
                    <h3>Capital: </h3>
                    <p>{dataCountry.capital}</p>
                </div>
                <div className="feature">
                    <h3>Language: </h3>
                    <p>{dataCountry.languages[0].name}</p>
                </div>
                <div className="feature">
                    <h3>Currency: </h3>
                    <p>
                        {
                            dataCountry.currencies.map(cu => (
                                cu
                            ))
                        }
                    </p>
                </div>
                <div className="feature">
                    <h3>Region: </h3>
                    <div className="features">
                        {
                            (dataCountry.states.length==0) ? (
                                <p>No hay regiones</p>
                            ) : (
                                <div className="listState overflow-auto h-full max-h-24">
                                    {
                                        dataCountry.states.map((co)=> (
                                            <p key={co.name}>{co.name}</p>
                                        ))
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCountry
