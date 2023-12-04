import React from 'react'
import '../../App.css'
import logo from '../../images/prototipo.png'
import { Link } from 'react-router-dom'
 
function BuscaImagem ({id}) { // Praticamente não tem difereneça
    //JS
    
    return (
        <ul className="ulBusca">
            <li className="rexImage">    
                <Link to={`/home/${id}`}>
                    <img src={logo} alt="Rex"/>
                </Link>
            </li>
            <li className="busca">
                <form action="">
                    <input type="text" placeholder="Buscar Eventos"/>
                </form>
            </li>
        </ul>
    )
}

// export default exporta o objeto em si

// export não default exporta parte do objeto

export default BuscaImagem