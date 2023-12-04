import React from "react";
import "./styles.css"
import HeaderLogado from '../../components/HeaderLogado'
import Footer from '../../components/Footer'
import {Link, useParams} from "react-router-dom";
import axios from 'axios'
import { useState, useEffect } from "react";


function FinalizarCompra() {
    const parametros = useParams()
    const [ingresso, setIngresso] = useState([])
    const [dadosCliente, setDadosCliente] = useState([])

    const getIngressos = async() => {
        try {
            const response = await axios.get(`http://localhost:3000/ingresso/${parametros.idEvento}`)

            const data = response.data
            
            setIngresso(data)
        } catch (err) {
            console.log(err)
        }
    }

    const getCliente = async() => {
        try{
            const response  = await axios.get(`http://localhost:3000/cliente/busca/porid/${parametros.id}`)

            const data = response.data
            console.log(data)

            setDadosCliente(data)
        }catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getIngressos()
        getCliente()
    }, [])

    return(
        <div className="finalizarDiv">
            <HeaderLogado/>
            <div className="mainCompra">
                <h1>Finalizar Compra</h1>
                <div className="compra">
                    <div className="dadosComprador">                        
                        {dadosCliente.map((dado) => (
                            <>
                        <div className="compraTitulo">
                            <h2>Dados do Comprador</h2>
                        </div>
                        <div className="info">
                            <p><strong>Nome:</strong> {dado.nome}</p>
                            <p><strong>Cpf:</strong> {dado.cpf}</p>
                            <p><strong>Email:</strong> {dado.email}</p>
                        </div>
                        <div className="metodoPagamento">
                            <p><strong>Método de Pagamento</strong></p>
                            <div>
                            <img src="" alt="" />
                            <p>Pix</p>
                            </div>
                        </div>
                            </>
                        ))}
                    </div>
                    <div className="ingres">

                        <div className="ingressoTitulo">
                            <h2>Ingressos</h2>
                        </div>
                        <div>
                            {ingresso.map((ing) => (
                                <p>{parametros.cont}x - {ing.titulo} - R$ {ing.valor}</p>
                            ))}
                        </div>
                        <div>
                            {ingresso.map((ing) => (
                            <p><strong>Total:</strong>      R$ {parametros.cont * ing.valor}.00</p>
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