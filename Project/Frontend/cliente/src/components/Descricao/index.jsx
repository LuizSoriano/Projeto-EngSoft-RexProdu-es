import React from 'react'

import './styles.css'



function Descricao({id}) {

    return(
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
                        </div>
                        ))
                    )}
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
    )
}

export default Descricao