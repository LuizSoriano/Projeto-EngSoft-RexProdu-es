import React from "react";
import HeaderLogado from '../../components/HeaderLogado'
import Footer from "../../components/Footer";
import './styles.css'
import AvatarBranco from '../../images/avatarBranco.png'
import Detalhes from '../../images/detalhes.png'
import Pencil from '../../images/pencil.png'
import Excluir from '../../images/excluir.png'
import Sair from '../../images/sair.png'
import {Link, useParams} from 'react-router-dom'

function Perfil() {
    const parametros = useParams()
    return(
        <div className="geral">
            <HeaderLogado id={parametros.id}/>
            <div className="conteudo">
                <div className="usuAva">
                    <img src={AvatarBranco} alt="" />
                    <p className="nomeU">FULANO DE TAL</p>
                </div>
                <div className="opcoes">
                    <div className="opcao">
                        <img src={Detalhes} alt="" />
                        <Link to={`/detalhesConta/${parametros.id}`} className="linkPerfil"><p>Detalhes Conta</p></Link>
                    </div>
                    <div className="opcao">
                        <img src={Pencil} alt="" />
                        <Link to={`/alterarInfo/${parametros.id}` }className="linkPerfil"><p>Alterar Info</p></Link>
                    </div>
                    <div className="opcao">
                        <img src={Excluir} alt="" />
                        <Link to={`/excluirConta/${parametros.id}`}className="linkPerfil"><p>Excluir Minha Conta</p></Link>
                    </div>
                    <div className="opcao">
                        <img src={Sair} alt="" />
                        <Link to={`/login`} className="linkPerfil"><p>Sair</p></Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Perfil