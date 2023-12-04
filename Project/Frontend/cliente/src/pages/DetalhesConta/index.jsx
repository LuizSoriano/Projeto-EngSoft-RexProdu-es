import React from 'react'
import HeaderLogado from '../../components/HeaderLogado'
import Footer from '../../components/Footer'
import './styles.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function detalhesConta() {
    const [dados, setDados] = useState([])
    const parametros = useParams()

    const getInfoClientes = async() => {
        try {
            const response = await axios.get(`http://localhost:3000/cliente/busca/porid/${parametros.id}`)

            const data = response.data
            console.log(data)
            setDados(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getInfoClientes()
    }, [])

    return(
        <div className='details'>
            <HeaderLogado id={parametros.id}/>  
            <div className='container'>
                <h1>Dados Cliente</h1>
                {dados.map((dado) => (
                <div key={dado.id}>
                    <ul className='listDet'>
                        <li>
                            <p><strong>Cpf:</strong> {dado.cpf}</p>
                        </li>
                        <li>
                            <p><strong>Nome:</strong> {dado.nome}</p>
                        </li>
                        <li>
                            <p><strong>Email:</strong> {dado.email}</p>
                        </li>
                    </ul> 
                </div>
            ))}
            </div>
            <Footer/>
        </div>
    )
}

export default detalhesConta