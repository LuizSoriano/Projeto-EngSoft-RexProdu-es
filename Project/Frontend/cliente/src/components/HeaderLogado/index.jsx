import React from 'react'
import './styles.css'
import BuscaImagem from '../BuscaImagem/';
import Usuario from '../Usuario';

function Header() {
    return(
        <header>
            <nav>
                <BuscaImagem/>
                <Usuario/>
            </nav>
        </header>
    );
}

export default Header;