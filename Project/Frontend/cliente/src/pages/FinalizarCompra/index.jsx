import React from "react";
import "./styles.css"
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {Link, useParams} from "react-router-dom";
import axios from 'axios'
import { useState, useEffect } from "react";


function FinalizarCompra() {
    const parametros = useParams()
    const [ingresso, setIngresso] = useState([])

    const getIngressos = async() => {
        try {
            const response = await axios.get(`http://localhost:3000/ingresso/${parametros.id}`)

            const data = response.data
            
            setIngresso(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getIngressos()
    }, [])

    return(
        <div className="finalizarDiv">
            <Header/>
            <div className="mainCompra">
                <h1>Finalizar Compra</h1>
                <div className="compra">
                    <div className="dadosComprador">
                        <div className="compraTitulo">
                            <h2>Dados do Comprador</h2>
                        </div>
                        <div className="info">
                            <p><strong>Nome:</strong> Fulano de Tal</p>
                            <p><strong>Cpf:</strong> 543.321.675-02</p>
                            <p><strong>Nome:</strong> Fulano de Tal</p>
                        </div>
                        <div className="metodoPagamento">
                            <p><strong>Método de Pagamento</strong></p>
                            <div>
                            <img src="" alt="" />
                            <p>Pix</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="ingres">

                        <div className="ingressoTitulo">
                            <h2>Ingressos</h2>
                        </div>
                        <div>
                            {ingresso.map((ing) => (
                                <p>{parametros.cont}x - R$ {ing.valor}</p>
                            ))}
                        </div>
                        <div>
                            {ingresso.map((ing) => (
                            <p><strong>Total:</strong>      R$ {parametros.cont * ing.valor}</p>
                            ))}
                        </div>
                        <div className="botones">
                        <Link to='/logado' className="botonesVerde"><button>FINALIZAR COMPRA</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default FinalizarCompra