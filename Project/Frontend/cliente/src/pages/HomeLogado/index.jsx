import "./styles.css"
import HeaderLogado from "../../components/HeaderLogado";
import Botao from "../../components/Botao";
import Footer from "../../components/Footer";

function HomeLogado() {
    return(
        <body>
            <HeaderLogado/>
            <section className='Botoes'>
                <Botao/>
            </section>
            <Footer/>
        </body>
    );
}

export default HomeLogado