import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Evento from "../../components/Evento";
import './styles.css'
import TodosEventos from '../../images/todos.png'

function Todos() {
    return(
        <div className="divBody">
            <Header/>
            <section className="sectionRole">
                <img src={TodosEventos} alt="Todos Eventos" className="imagemUniversitario"/>
                <h1>Todos os Eventos</h1>
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

export default Todos