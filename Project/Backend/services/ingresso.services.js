import pg from 'pg'//npm install pg

import ingressoPersistence from '../persistence/ingressos.persistence.js'
import res from 'express/lib/response.js'

async function getTodosIngressos(){
    //chama presistência
    return await ingressoPersistence.getTodosIngressos()
}

async function getUmIngresso(id){
     //chama presistência
    return await ingressoPersistence.getUmIngresso(id)
}

async function criaIngresso(titulo, tipo, valor, id){
    //regra de negócio
    var resultado = null
    //chamar persistência
    resultado = await ingressoPersistence.criaIngresso(titulo, tipo, valor, id)
    return resultado
}

async function excluiIngresso(id){
    //regra de negócio
    var ingresso = await ingressoPersistence.getUmIngresso(id)
    var resultado = null
    //chamar persistência
    if(ingresso.length > 0)
        resultado = await ingressoPersistence.excluiIngresso(id)
    return resultado
    
}

async function alteraIngresso(id, titulo, tipo, valor){
    //regra de negócio
    var ingresso = await ingressoPersistence.getUmIngresso(id)
    var resultado = null
    //chamar persistência
    if(ingresso.length > 0){
        resultado = await ingressoPersistence.alteraIngresso(id, titulo, tipo, valor)
    }
    return resultado
}


export default {getTodosIngressos, getUmIngresso, criaIngresso, excluiIngresso, alteraIngresso}