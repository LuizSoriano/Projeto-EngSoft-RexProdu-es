import React from 'react'
import HeaderLogado from '../../components/HeaderLogado';
import Footer from '../../components/Footer';
import './styles.css'

function meusIngressos() {
    return(
        <div className='meusIngBody'>
            <HeaderLogado/>
            <div className='main'>
                <h1>MEUS INGRESSOS</h1>
                <div className='greybox'>
                    <div className='headers'>
                        <p>Evento</p>
                        <p>Ingresso</p>
                        <p>Valor</p>
                        <p>CPF</p>
                        <p>Nome</p>
                    </div>
                    <div className='content'>
                        <ul>
                            <li>
                                <p>nomeFestival</p>
                            </li>
                            <li>
                                <p>nomeIngresso</p>
                            </li>
                            <li>
                                <p>R$20,00</p>
                            </li>
                            <li>
                                <p>CPF</p>
                            </li>
                            <li>
                                <p>Nome</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    );
}

export default meusIngressos