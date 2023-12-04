import React, { useEffect, useState } from 'react'
import HeaderLogado from '../../components/HeaderLogado';
import Footer from '../../components/Footer';
import './styles.css'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Ingresso from '../../components/Ingresso';

function meusIngressos() {
    const parametros = useParams()

    return(
        <div className='meusIngBody'>
            <HeaderLogado/>
            <div className='main'>
                <h1>MEUS INGRESSOS</h1>
                <div className= 'greybox'>
                    <div className='headers'>
                        <p className='p'>Evento</p>
                        <p className='p'>Ingresso</p>
                        <p className='p'>Valor</p>
                        <p className='p'>CPF</p>
                        <p className='p'>Nome</p>
                        <p className='p'>Quantidade</p>
                    </div>
                    <div className='content'>
                        <Ingresso id={parametros.id}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    );
}

export default meusIngressos