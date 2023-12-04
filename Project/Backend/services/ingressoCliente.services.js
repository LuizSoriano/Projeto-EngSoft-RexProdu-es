import pg from 'pg'//npm install pg

import ingressoClientePersistence from '../persistence/ingressoCliente.persistence.js'
import res from 'express/lib/response.js'

async function criaIngressoCliente(idIngresso, idCliente, quantidade){
    //regra de negócio
    var resultado = null
    //chamar persistência
    resultado = await ingressoClientePersistence.criaIngressoCliente(idIngresso, idCliente, quantidade)
    return resultado
}

async function getIngressoCliente(id){
    //chama presistência
   return await ingressoClientePersistence.getIngressoCliente(id)
}

export default{criaIngressoCliente, getIngressoCliente}