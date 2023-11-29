import React from 'react'
import './styles.css'
import BuscaImagem from '../BuscaImagem/';
import LoginCadastro from '../LoginCadastro';

function Header() {
    return(
        <header>
            <nav>
                <BuscaImagem/>
                <LoginCadastro/>
            </nav>
        </header>
    );
}

export default Header;