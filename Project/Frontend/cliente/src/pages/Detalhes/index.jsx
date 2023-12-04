import React from "react";
import HeaderLogado from '../../components/HeaderLogado'
import Footer from "../../components/Footer";
import './styles.css'
import { format } from "date-fns"; 
import Localizacao from '../../images/loc.png'
import Data from '../../images/data.png'
import {Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from "react";

function Detalhes () {

    const parametros = useParams()
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
            const response = await axios.get(`http://localhost:3000/evento/tipoEvento/${parametros.idEvento}`)

            const data = response.data;

            const dadosFormatados = data.map((dado) => ({
                ...dado,
                // Converta a string de data para um objeto Date
                data: new Date(dado.data),
              }));
            

            console.log(dadosFormatados)
            setEvento(dadosFormatados);
        } catch (errr) {
            console.log(errr)
        }
    }


    const getIngressos = async() => {
        try {
            const response = await axios.get(`http://localhost:3000/ingresso/${parametros.idEvento}`)

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
    
    return(
        <div className="divDetalhes">
            <HeaderLogado id={parametros.id}/>
            <div className="subDiv">
                <div className="divImagem">
                    {eventos.map((evento) => (
                        <img src={evento.arte} alt="" className="imagemEvento"/>
                    ))}
                    
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
                                    <p>{format(evento.data, "dd/MM/yyyy")}</p>
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
                                    to={`/finalizar/${parametros.idEvento}/${counter}/${parametros.id}`}
                                    className="botaoVerde">
                                    <button className="buttonIngressos">
                                        COMPRAR
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