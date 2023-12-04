import React from "react";
import "./styles.css"
import axios from 'axios'
import { useState, useEffect } from "react";

function Ingresso({id}) {
    const [dados, setDados] = useState([])

    const getInfoIngressos = async() => {
        try {
            const response = await axios.get(`http://localhost:3000/clienteingresso/${id}`)

            const data = response.data
            console.log(data)
            setDados(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getInfoIngressos()
    }, [])

    
    return(
        <>
            {dados.length === 0 ? (<p>Carregando...</p>) : (
            dados.map((dado) => (
                <ul>
                    <li>
                        <p>{dado.nome_evento}</p>
                    </li>
                    <li>
                        <p>{dado.titulo}</p>
                    </li>
                    <li className='mudanca'>
                        <p>R${dado.valor}</p>
                    </li>
                    <li>
                        <p>{dado.cpf}</p>
                    </li>
                    <li>
                        <p>{dado.nome_cliente}</p>
                    </li>
                    <li>
                        <p>{dado.quantidade}</p>
                    </li>
                </ul>
                ))
            )} 
        </>  
    );
}

export default Ingresso;