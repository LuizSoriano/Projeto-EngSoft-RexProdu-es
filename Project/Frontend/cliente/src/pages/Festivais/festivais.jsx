import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Evento from "../../components/Evento";
import './styles.css'
import FestivaisEventos from "../../images/festival.png"

function Festivais() {
    return(
        <div className="divBody">
            <Header/>
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
                <Evento/>
                <Evento/>
                <Evento/>
                <Evento/>
                <Evento/>
                <Evento/>
            </section>
            <Footer/>
        </div>
    );
}

export default Festivais