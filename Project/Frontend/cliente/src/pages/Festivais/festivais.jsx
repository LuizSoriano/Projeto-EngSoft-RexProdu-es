import React from "react";
import Footer from "../../components/Footer";
import Evento from "../../components/Evento";
import './styles.css'
import FestivaisEventos from "../../images/festival.png"
import HeaderLogado from '../../components/HeaderLogado'
import { useParams } from "react-router-dom";

function Festivais() {
    const {id} = useParams()
    return(
        <div className="divBody">
            <HeaderLogado/>
           
            <section className="sectionRole">
                <img src={FestivaisEventos} alt="Eventos Festivais" className="imagemUniversitario"/>
                <h1>Festivais</h1>
                <ul className="titulos">
                    <li>
                        <p>Evento</p>
                    </li>
                    <li>
                        <p>Local</p>
                    </li>
                    <li>
                        <p>Data</p>
                    </li>
                </ul>
                <Evento id={id}/>
            </section>
            <Footer/>
            </div>
    );
}

export default Festivais