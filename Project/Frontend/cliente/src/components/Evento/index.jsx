import React from "react";
import FotoEvento from "../../images/balacobaco.png"
import "./styles.css"
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from "react";
import { format } from "date-fns"; 

function Evento() {

    const [festivais, setFestivais] = useState([])

    const getFestivais = async() => {
        try {
            const response = await axios.get("http://localhost:3000/evento")

            const data = response.data;

            const festivaisFormatados = data.map((festival) => ({
                ...festival,
                // Converta a string de data para um objeto Date
                data: new Date(festival.data),
              }));
            
            setFestivais(festivaisFormatados);
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
                        <p>{format(festival.data, "dd/MM/yyyy")}</p>
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