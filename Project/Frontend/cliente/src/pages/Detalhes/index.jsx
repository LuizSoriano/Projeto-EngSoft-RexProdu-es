import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './styles.css'
import ImagemProvisoria from '../../images/balacobaco.png'
import Localizacao from '../../images/loc.png'
import Data from '../../images/data.png'
import {Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from "react";

function Detalhes () {

    const {id} = useParams()
    const [eventos, setEvento] = useState([])
    const [counter, setCounter] = useState(0)
    const [ingresso, setIngresso] = useState([])

    const handleClick1 = () => {
        setCounter(counter+1)
    }

    const handleClick2 = () => {
        setCounter(counter-1)
    }

    const getDetalhes = async() => {
        try {
            const response = await axios.get(`http://localhost:3000/evento/tipoEvento/${id}`)

            const data = response.data;
            console.log(data)
            setEvento(data);
        } catch (errr) {
            console.log(errr)
        }
    }


    const getIngressos = async() => {
        try {
            const response = await axios.get(`http://localhost:3000/ingresso/${id}`)

            const data = response.data
            
            setIngresso(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getDetalhes()
        getIngressos()
    }, [])
    console.log(ingresso.titulo)
    return(
        <div className="divDetalhes">
            <Header />
            <div className="subDiv">
                <div className="divImagem">
                    <img src={ImagemProvisoria} alt="" className="imagemEvento"/>
                </div>
                <div className="gerall">
                    
                <div className="descricao">
                    {eventos.length === 0 ? (<p>Carregando...</p>) : (
                        eventos.map((evento) => (
                            <div>
                            <h1 className="nome">{evento.nome}</h1>
                            <div className="dataLoc">
                                <div className="data">
                                    <img src={Data} alt="" />
                                    <p>{evento.data}</p>
                                </div>  
                                <div className="loc">
                                    <img src={Localizacao} alt="" />
                                    <p>{evento.local}</p>
                                </div>
                            </div>
                            
                        
                
                        <div className="atracoes">
                            <h2>Atrações</h2>
                            <ul className="listaAtracoes">
                                <li className="atracao">
                                    <span>{evento.atracao}</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="setores">
                            <h2>Descricao:</h2>
                            <ul>
                                <li>{evento.descricao}</li>
                            </ul>
                        </div>
                        </div>
                        ))
                    )}
                    </div>
                    <div>
                        <div className="ingresso">
                            <h2>INGRESSOS</h2>
                            <div className="caixaIngressos">
                                <div className="contadores">
                                    {ingresso.map((ing) => (
                                    <p><strong>{ing.titulo}</strong></p>
                                    ))
                                    }
                                    <p className="contador"><div onClick={handleClick2}>-</div>  <div className="counter">{counter} </div>  <div onClick={handleClick1}>+</div></p>
                                </div>
                                <div className="total">
                                    <hr />  
                                    <div>
                                            <p>Total</p>
                                            {ingresso.map((ing) => (
                                                <p>R$   {counter*ing.valor},00</p>
                                            ))
                                        }
                                    </div>
                                </div>
                                <Link
                                    to={`/finalizar/${id}/${counter}`}
                                    className="botaoVerde">
                                    <button className="buttonIngressos">
                                        FAÇA LOGIN PARA COMPRAR
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Detalhes