import React from "react";
import HeaderLogado from '../../components/HeaderLogado'
import Footer from "../../components/Footer";
import './styles.css'
import AvatarBranco from '../../images/avatarBranco.png'
import Detalhes from '../../images/detalhes.png'
import Pencil from '../../images/pencil.png'
import AlteraSenha from '../../images/alteraSenha.png'
import Excluir from '../../images/excluir.png'
import Sair from '../../images/sair.png'
import {Link} from 'react-router-dom'

function Perfil() {
    return(
        <div className="geral">
            <HeaderLogado/>
            <div className="conteudo">
                <div className="usuAva">
                    <img src={AvatarBranco} alt="" />
                    <p className="nomeU">FULANO DE TAL</p>
                </div>
                <div className="opcoes">
                    <div className="opcao">
                        <img src={Detalhes} alt="" />
                        <Link to='/' className="linkPerfil"><p>Detalhes Conta</p></Link>
                    </div>
                    <div className="opcao">
                        <img src={Pencil} alt="" />
                        <Link to='/' className="linkPerfil"><p>Alterar Info</p></Link>
                    </div>
                    <div className="opcao">
                        <img src={AlteraSenha} alt="" />
                        <Link to='/' className="linkPerfil"><p>Alterar Senha</p></Link>
                    </div>
                    <div className="opcao">
                        <img src={Excluir} alt="" />
                        <Link to='/' className="linkPerfil"><p>Excluir Minha Conta</p></Link>
                    </div>
                    <div className="opcao">
                        <img src={Sair} alt="" />
                        <Link to='/table' className="linkPerfil"><p>Sair</p></Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Perfil