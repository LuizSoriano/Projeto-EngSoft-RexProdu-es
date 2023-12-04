import React from 'react'
import Avatar from '../../images/avatar.png'
import {Link} from 'react-router-dom'

function Usuario({id}) {
    return(
        <ul className="ulLogado">
            <li className='meusIngressos'>
                <Link to={`/ingressos/${id}`} className='meusingressos'>Meus Ingressos</Link>
            </li>
            <li className='avatar'>
                <Link to='/perfil'><img src={Avatar} alt="" /></Link>
            </li>
        </ul>
    );
}


export default Usuario