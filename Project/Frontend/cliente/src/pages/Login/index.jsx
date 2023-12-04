import { useState } from "react"
import axios from 'axios'
import './styles.css'
import { Navigate } from 'react-router-dom';

function Login(){

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null)
    
    const handleLogin = async(e) => {
        e.preventDefault()
        console.log(email, senha)

        const url = `http://localhost:3000/cliente/${encodeURIComponent(email)}/${encodeURIComponent(senha)}`;

      try {
        const response = await axios.get(url)

        // Fazer algo com a resposta...
        if(response.data === false)
          console.log("Usuário ou senha incorretos");
        else {
          const data = response.data
          console.log(data)
          console.log("Achamos você")
          setLoggedIn(true)
          
          setUserId(data[0].id)
        }
          

      } catch (error) {
        // Lidar com erros...
        console.error(error);
      }
    }

    if (isLoggedIn) {
      return <Navigate to={`/home/${userId}`}/>
    }

    return(
        <div className="wrap">
          <div className="login">
            <h2>Login</h2>
            <form className='login-form'>
              <input type="email" name="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
              <input type="senha" name="senha" placeholder="Senha" required onChange={(e) => setSenha(e.target.value)}/>
              <button type="submit" className='btn-login' onClick={handleLogin}>Login</button>
            </form>
          </div>
        </div>
    );
  }

export default Login