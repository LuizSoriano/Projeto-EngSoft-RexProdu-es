import "./styles.css"
import HeaderLogado from "../../components/HeaderLogado";
import Botao from "../../components/Botao";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";

function HomeLogado() {
    const {id} = useParams()
    return(
        <body>
            <HeaderLogado/>
            <section className='Botoes'>
                <Botao id={id}/>
            </section>
            <Footer/>
        </body>
    );
}

export default HomeLogado