import React from "react";
import FotoEvento from "../../images/balacobaco.png"
import "./styles.css"
import {Link} from 'react-router-dom'

function Evento() {
    return(
        <div className="evento">
            <ul className="EventoUl">
                <li>
                    <img src={FotoEvento} alt="" className="fotoevento" />
                </li>
                <li>
                    <p>Nome do Evento</p>
                </li>
                <li>
                    <p>Local do Evento</p>
                </li>
                <li>
                    <p>Data do Evento</p>
                </li>

            </ul>
            <p>
                <Link to='/detalhes' className="verMais">Ver mais</Link>
            </p>

        </div>
    );
}

export default Evento;