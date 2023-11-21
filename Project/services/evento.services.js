import pg from 'pg'//npm install pg

import eventoPersistence from '../persistence/evento.persistence.js'
import res from 'express/lib/response.js'
import showServices from './show.services.js'
import ingressoServices from './ingresso.services.js'

async function getTodosEventos(){
    //chama presistência
    return await showPersistence.getTodosEventos()
}

async function getUmEvento(id){
     //chama presistência
    return await showPersistence.getUmEvento(id)
}

async function criaEvento(nome, local, data, capacidade, arrecadacao, duracao, arte, hora, atracao, palco, titulo, tipo, valor, descricao, tipoEvento){
    //regra de negócio
    var resultado = null
    var resultado1 = null
    //chamar services
    resultado = await ingressoServices.criaIngresso(titulo, tipo, valor, descricao, tipoEvento)
    resultado = await eventoPersistence.criaEvento(nome, local, data, capacidade, arrecadacao, duracao, arte)
    resultado1 = await showServices.criaShow(hora, atracao, palco, local)
    //chamar persistência
    return resultado
}

async function excluiEvent(id){
    //regra de negócio
    var evento = await eventoPersistence.getUmEvento(id)
    var resultado = null
    //chamar persistência
    if(evento.length > 0)
        resultado = await eventoPersistence.excluiEvento(id)
    return resultado
    
}

async function alteraEvento(id, nome, local, data, capacidade, arrecadacao, duracao){
    //regra de negócio
    var evento = await showPersistence.getUmShow(id)
    var resultado = null
    //chamar persistência
    if(evento.length > 0){
        resultado = await eventoPersistence.alteraEvento(id, nome, local, data, capacidade, arrecadacao, duracao)
    }
    return resultado
}


export default {getTodosEventos, getUmEvento, criaEvento, excluiEvento, alteraEvento}