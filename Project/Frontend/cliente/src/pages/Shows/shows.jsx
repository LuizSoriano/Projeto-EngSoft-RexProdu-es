import React from "react";
import Footer from "../../components/Footer";
import Evento from "../../components/Evento";
import HeaderLogado from '../../components/HeaderLogado'
import './styles.css'
import ShowsEventos from "../../images/shows.png"

function Shows() {
    const parametros = useParams()
    return(
        <div className="divBody">
            <HeaderLogado id={parametros.id}/>
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
                <Evento id={id}/>
            </section>
            <Footer/>
        </div>
    );
}

export default Shows