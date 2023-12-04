import { useState } from "react"
import axios from 'axios'



function Login(){

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const handleLogin = async(e) => {
        e.preventDefault()
        console.log(email, senha)

        const url = `http://localhost:3000/cliente/${encodeURIComponent(email)}/${encodeURIComponent(senha)}`;

  try {
    const response = await axios.get(url)

    // Fazer algo com a resposta...
    if(response.data === false)
      console.log("Usuário ou senha incorretos");
    else
      console.log("Achamos você")
    console.log(response.data);
  } catch (error) {
    // Lidar com erros...
    console.error(error);
  }
}

    return(
      <div className="login-form-wrap">
            <h2>Login</h2>
            <form className='login-form'>
              <input type="email" name="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
              <input type="senha" name="senha" placeholder="Senha" required onChange={(e) => setSenha(e.target.value)}/>
              <button type="submit" className='btn-login' onClick={(e) => handleLogin(e)}>Login</button>
            </form>
          </div>
    );
  }

export default Login