import React from "react";
import "./styles.css"
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {Link} from 'react-router-dom'

function FinalizarCompra() {
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
                            <p><strong>2x</strong> Área Vip - R$ 180,00</p>
                            <p><strong>1x</strong> Frontstage Sicoob - R$ 250,00</p>
                        </div>
                        <div>
                            <p><strong>Total:</strong>      R$ 590,00</p>
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