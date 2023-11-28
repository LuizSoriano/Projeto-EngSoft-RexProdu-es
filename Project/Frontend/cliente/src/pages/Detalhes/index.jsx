import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './styles.css'
import ImagemProvisoria from '../../images/balacobaco.png'
import Localizacao from '../../images/loc.png'
import Data from '../../images/data.png'
import {Link} from 'react-router-dom'

function Detalhes () {
    return(
        <div className="divDetalhes">
            <Header />
            <div className="subDiv">
                <div className="divImagem">
                    <img src={ImagemProvisoria} alt="" className="imagemEvento"/>
                </div>
                <div className="gerall">
                    <div className="descricao">
                        <div>
                            <h1 className="nome">Nome do Evento</h1>
                            <div className="dataLoc">
                                <div className="data">
                                    <img src={Data} alt="" />
                                    <p>Data do Evento</p>
                                </div>
                                <div className="loc">
                                    <img src={Localizacao} alt="" />
                                    <p>Local do Evento</p>
                                </div>
                            </div>
                        </div>
                        <div className="atracoes">
                            <h2>Atrações</h2>
                            <ul className="listaAtracoes">
                                <li className="atracao">
                                    <span>Atração 1</span>
                                </li>
                                <li className="atracao">
                                    <span>Atração 1</span>
                                </li>
                                <li className="atracao" >
                                    <span>Atração 1</span>
                                </li>
                                <li className="atracao">
                                    <span>Atração 1</span>
                                </li>
                            </ul>
                        </div>
                        <div className="setores">
                            <h2>Setores:</h2>
                            <ul>
                                <li className="setor">
                                    <strong>Área Vip:</strong> Classificação 14 anos
                                </li>
                                <li className="setor">
                                    <strong>Front Stage:</strong> Vodka, Gin, Cerveja, Amstel, Tônica, Suco, Regri e Água. De frente ao palco com open
                                </li>
                                <li className="setor">
                                    <strong>Camarote Gold:</strong> Vodka, Gin, Cerveja, Amstel, Tônica, Suco, Regri e Água. De frente ao palco com open Vodka, Gin, Cerveja, Amstel, Tônica, Suco, Regri e Água. De frente ao palco com open
                                </li>
                                <li className="setor">
                                    <strong>Camarote Black:</strong> Vodka, Gin, Cerveja, Amstel, Tônica, Suco, Regri e Água. De frente ao palco com open Vodka, Gin, Cerveja, Amstel, Tônica, Suco, Regri e Água. De frente ao palco com open Vodka, Gin, Cerveja, Amstel, Tônica
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="ingresso">
                            <h2>INGRESSOS</h2>
                            <div className="caixaIngressos">
                                <div className="contadores">
                                    <p>Área vip</p>
                                    <p>-  0   +</p>
                                </div>
                                <div className="contadores">
                                    <p>Área vip</p>
                                    <p>-  0   +</p>
                                </div>
                                <div className="contadores">
                                    <p>Área vip</p>
                                    <p>-  0   +</p>
                                </div>
                                <div className="contadores">
                                    <p>Área vip</p>
                                    <p>-  0   +</p>
                                </div>
                                <div className="total">
                                    <hr />  
                                    <div>
                                        <p>Total</p>
                                        <p>R$0,00</p>
                                    </div>
                                </div>
                                <Link to='/finalizar' className="botaoVerde"><button className="buttonIngressos">
                                    FAÇA LOGIN PARA COMPRAR
                                </button></Link>
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