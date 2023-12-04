import pg from 'pg'//npm install pg

import clientePersistence from '../persistence/cliente.persistence.js'
import res from 'express/lib/response.js'

async function getTodosClientes(){
    //chama presistência
    return await clientePersistence.getTodosClientes()
}

async function getUmCliente(cpf){
     //chama presistência
    return await clientePersistence.getUmCliente(cpf)
}

async function getUmClienteID(id){
    //chama presistência
   return await clientePersistence.getUmClienteID(id)
}

async function logarCliente(email, senha){
    //chama presistência
   var resultado = await clientePersistence.logarCliente(email, senha)
   var resultado1 = null;
   if(resultado.length > 0)
     resultado1 = await clientePersistence.getIdCliente(email)
   return resultado1 
}

async function criaCliente(cpf, nome, email, senha){
    //regra de negócio
    var resultado = null
    //chamar persistência
    resultado = await clientePersistence.criaCliente(cpf, nome, email, senha)
    return resultado
}

async function excluiCliente(id){
    //regra de negócio
    var cliente = await clientePersistence.getUmClienteID(id)
    var resultado = null
    //chamar persistência
    if(cliente.length == 1)
        resultado = await clientePersistence.excluiCliente(id)
    return resultado
}

async function alteraCliente(id, cpfnew, nome, email, senha){
    //regra de negócio
    var id = await clientePersistence.getUmClienteID(id)
    var clientenew = await clientePersistence.getUmCliente(cpfnew)
    var resultado = null
    //chamar persistência
    if(id.length == 1 && clientenew.length == 0)
        resultado = await clientePersistence.alteraCliente(id, cpfnew, nome, email, senha)
    return resultado
}


export default {getTodosClientes, getUmCliente, logarCliente, criaCliente, excluiCliente, alteraCliente, getUmClienteID}