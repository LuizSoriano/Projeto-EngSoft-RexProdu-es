import pg from 'pg'//npm install pg

import ingressoClientePersistence from '../persistence/ingressoCliente.persistence.js'
import res from 'express/lib/response.js'

async function criaIngressoCliente(idIngresso, cpf){
    //regra de negócio
    var resultado = null
    //chamar persistência
    resultado = await ingressoClientePersistence.criaIngressoCliente(idIngresso, cpf)
    return resultado
}

export default{criaIngressoCliente}