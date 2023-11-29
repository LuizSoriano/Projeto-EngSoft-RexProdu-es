import React from 'react'
import Header from '../Header'
import Botao from '../Botao'
import Footer from '../Footer'

function Main () {
    return(
        <body>
            <Header/>
            <section className='Botoes'>
                <Botao/>
            </section>
            <Footer/>
        </body>
    );
}

export default Main