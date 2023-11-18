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

async function criaCliente(cpf, nome, salario, nasc){
    //regra de negócio
    var resultado = null
    var cliente = await clientePersistence.getUmCliente(cpf)
    //chamar persistência
    if(cliente.length == 0)
        resultado = await clientePersistence.criaCliente(cpf, nome, salario, nasc)
    return resultado
}

async function excluiCliente(cpf){
    //regra de negócio
    var cliente = await clientePersistence.getUmCliente(cpf)
    var resultado = null
    //chamar persistência
    if(cliente.length == 1)
        resultado = await clientePersistence.excluiCliente(cpf)
    return resultado
}

async function alteraCliente(cpfold, cpfnew, nome, salario, nasc){
    //regra de negócio
    var clienteold = await clientePersistence.getUmCliente(cpfold)
    var clientenew = await clientePersistence.getUmCliente(cpfnew)
    var resultado = null
    //chamar persistência
    if(clienteold.length == 1 && clientenew.length == 0)
        resultado = await clientePersistence.alteraCliente(cpfold, cpfnew, nome, salario, nasc)
    return resultado
}


export default {getTodosClientes, getUmCliente, criaCliente, excluiCliente, alteraCliente}