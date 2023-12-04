// src/CadastroForm.js
import React, { useState } from 'react';
import axios from 'axios'
import { Navigate } from 'react-router-dom';

const CadastroForm = () => {
  const [cpf, setCpf] = useState('');  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cadastrado, setCadastro] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Enviar os dados para o servidor usando Axios
      const response = await axios.post('http://localhost:3000/cliente', {
        cpf,
        nome,
        email,
        senha,
      });
      // Se a requisição for bem-sucedida, você pode lidar com a resposta aqui
      if(response.data == false) {
        console.log("Houve uma falha no cadastro")
      } else {
        setCadastro(true)
      }
    } catch (error) {
      // Se ocorrer um erro, você pode lidar com ele aqui
      console.error('Erro ao enviar os dados:', error);
    }
  };

  if (cadastrado) {
    return <Navigate to={`/`}/>
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Cpf:
        <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
      </label>
      <br />
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
      <label>
        Senha:
        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
      </label>
      <br />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default CadastroForm;