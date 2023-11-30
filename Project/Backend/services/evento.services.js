import pg from 'pg'//npm install pg

import eventoPersistence from '../persistence/evento.persistence.js'
import ingressoServices from './ingresso.services.js'
import showServices from './show.services.js'
import res from 'express/lib/response.js'

async function getTodosEventos(){
    //chama presistência
    return await eventoPersistence.getTodosEventos()
}

async function getTipoEvento(tipoEvento){
    //chama presistência
    return await eventoPersistence.getTipoEvento(tipoEvento)
}

async function verEvento(id){
    //chama presistência
    return await eventoPersistence.verEvento(id)
}

async function getUmEvento(id){
     //chama presistência
    return await eventoPersistence.getUmEvento(id)
}

async function criaEvento(nome, local, data, descricao, tipoEvento, duracao, arte, hora, atracao, palco, titulo, tipo, valor){
    //regra de negócio
    var resultado = null
    //chamar services
    resultado = await eventoPersistence.criaEvento(nome, local, data, descricao, tipoEvento, duracao, arte)
    var id = await eventoPersistence.getIdEvento(nome)
    //chamar persistência
    var resultado1 = await ingressoServices.criaIngresso(titulo, tipo, valor, id)
    resultado1 = await showServices.criaShow(hora, atracao, palco, id)
    return resultado
}

async function excluiEvento(id){
    //regra de negócio
    var evento = await eventoPersistence.getUmEvento(id)
    var resultado = null
    //chamar persistência
    if(evento.length > 0)
        resultado = await eventoPersistence.excluiEvento(id)
    return resultado
    
}

async function alteraEvento(idold, idnew, nome, local, data, descricao, tipoEvento, duracao, arte){
    //regra de negócio
    var id1 = await eventoPersistence.getUmEvento(idold)
    var id2 = await eventoPersistence.getUmEvento(idnew)
    var resultado = null
    //chamar persistência
    if(id1.length > 0 && id2 == 0){
        resultado = await eventoPersistence.alteraEvento(idold, idnew, nome, local, data, descricao, tipoEvento, duracao, arte)
    }
    return resultado
}


export default {getTodosEventos, getTipoEvento, verEvento, getUmEvento, criaEvento, excluiEvento, alteraEvento}