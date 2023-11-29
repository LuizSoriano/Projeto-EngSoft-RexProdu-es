import React from "react";
import './styles.css'
import Lista from '../../components/Lista/index.jsx'

const dadosCabecalho = ["Cpf cliente", "Cpf vendedor", "Cod produto", "Data", "Valor"]; 


function Table() {

    const meusItens = ['Mardem', 'Luiz', 'Alexandra']
    return(
        <>
            <h1>Renderização de listas</h1>
            <Lista itens={meusItens}/>
        </>
    );
}

export default Table