import React from "react";
import FotoEvento from "../../images/balacobaco.png"
import "./styles.css"
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from "react";

function Evento() {

    const [festivais, setFestivais] = useState([])

    const getFestivais = async() => {
        try {
            const response = await axios.get("http://localhost:3000/evento")

            const data = response.data;
            
            setFestivais(data);
        } catch (errr) {
            console.log(errr)
        } finally {
            response.release()
        }
    }

    useEffect(() => {
        getFestivais()
    }, [])

    
    return(
        <>
            {festivais.length === 0 ? (<p>Carregando...</p>) : (
            festivais.map((festival) => (
                <div className="evento" key={festival.id}>
                    <ul className="EventoUl">     
                        <li>                       
                        <img src={FotoEvento} alt="" className="fotoevento" />
                        </li>
                        <li>
                            <p>{festival.nome}</p>
                        </li>
                        <li>
                         <p>{festival.local}</p>
                        </li>
                        <li>
                        <p>{festival.data}</p>
                        </li>
                    </ul>
                    <p>
                        <Link to={`/tipoEvento/${festival.id}` } className="verMais">Ver mais</Link>
                    </p>
                </div>
                ))
            )} 
        </>  
    );
}

export default Evento;