import React from 'react'
import HeaderLogado from '../../components/HeaderLogado'
import Footer from '../../components/Footer'
import './styles.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function alterarInfo() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(true);
    const parametros = useParams();

  const getCliente = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/cliente/busca/porid/${parametros.id}`);
      const data = response.data;

      setNome(data.nome);
      setEmail(data.email);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:3000/cliente/${parametros.id}`, {
        nome,
        email,
      });

      console.log('Resposta do servidor:', response.data);

      // Aqui você pode redirecionar o usuário para a página de detalhes ou fazer outra ação
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  useEffect(() => {
    getCliente();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

    return(
        <div className='details'>
            <HeaderLogado/>  
            <div>
                <h1>Editar Informações do Cliente</h1>
                <form onSubmit={handleUpdate}>
                    <label>
                    Nome:
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </label>
                    <br />
                    <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <br />
                    <button type="submit">Atualizar Informações</button>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default alterarInfo