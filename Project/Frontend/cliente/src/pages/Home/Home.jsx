import "./styles.css"
import Botao from "../../components/Botao";
import Footer from "../../components/Footer";
import Header from "../../components/HeaderLogado";

function Home() {
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

export default Home