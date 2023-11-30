import React from "react";
import './styles.css'
import axios from 'axios'
import { useState, useEffect } from "react";

const dadosCabecalho = ["Cpf cliente", "Cpf vendedor", "Cod produto", "Data", "Valor"]; 


function Table() {
    
    const [posts, setPosts] = useState([])

    const getPosts = async() => {
        try {
            const response = await axios.get("http://localhost:3000/evento/Festival/")

            const data = response.data;
            
            setPosts(data);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    const meusItens = ['Mardem', 'Luiz', 'Alexandra']
    return(
        <>  
            <h1>Renderização de listas</h1>
            {posts.length === 0 ? (<p>Carregando...</p>) : (
                posts.map((post) => (
                    <div className="post" key={post.id}>
                        <h2>{post.nome}</h2>
                    </div>
                ))
            )}
        </>
    );
}

export default Table