import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Evento from "../../components/Evento";
import './styles.css'
import ShowsEventos from "../../images/shows.png"

function Shows() {
    return(
        <div className="divBody">
            <Header/>
            <section className="sectionRole">
                <img src={ShowsEventos} alt="Shows" className="imagemUniversitario"/>
                <h1>Shows</h1>
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
            </section>
            <Footer/>
        </div>
    );
}

export default Shows