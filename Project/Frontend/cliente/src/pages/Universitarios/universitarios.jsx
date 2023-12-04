import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Evento from "../../components/Evento";
import './styles.css'
import Roles from '../../images/roles.png'
import { useParams } from "react-router-dom";

function Universitarios() {
    const {id} = useParams()
    return(
        <div className="divBody">
            <Header/>
            <section className="sectionRole">
                <img src={Roles} alt="Rolês Universitários" className="imagemUniversitario"/>
                <h1>Rolês Universitários</h1>
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

export default Universitarios