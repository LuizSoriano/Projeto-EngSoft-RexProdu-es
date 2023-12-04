import React from "react";
import Footer from "../../components/Footer";
import Evento from "../../components/Evento";
import HeaderLogado from '../../components/HeaderLogado'
import './styles.css'
import TodosEventos from '../../images/todos.png'
import { useParams } from "react-router-dom";

function Todos() {
    const {id} = useParams()
    return(
        <div className="divBody">
            <HeaderLogado/>
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
                <Evento id={id}/>
            </section>
            <Footer/>
        </div>
    );
}

export default Todos