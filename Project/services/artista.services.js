import pg from 'pg'//npm install pg

import artistaPersistence from '../persistence/artista.persistence.js'
import res from 'express/lib/response.js'
import showServices from './show.services.js'

async function getTodosArtistas(){
    //chama presistência
    return await artistaPersistence.getTodosArtistas()
}

async function getUmArtista(cnpj){
     //chama presistência
    return await artistaPersistence.getUmArtista(cnpj)
}

async function criaArtista(cnpj, nome, empresa, telefone, email, contrato){
    //regra de negócio
    var artista = await artistaPersistence.getUmArtista(cnpj)
    var resultado = null
    //chamar persistência
    if(artista.length == 0)
        resultado = await artistaPersistence.criaArtista(cnpj, nome, empresa, telefone, email, contrato)
    return resultado
}

async function excluiArtista(nome, cnpj){
    //regra de negócio
    var artista = await artistaPersistence.getUmArtista(cnpj)
    var teste = await showServices.testeShowArtista(nome)
    var resultado = null
    //chamar persistência
    if(artista.lengt > 0 && !teste)
        resultado = await artistaPersistence.excluiArtista(cnpj)
    return resultado
    
}

async function alteraArtista(cnpjold, cnpjnew, nome, empresa, telefone, email, contrato){
    //regra de negócio
    var artistaold = await artistaPersistence.getUmArtista(cnpjold)
    var resultado = null
    //chamar persistência
    if(artistaold.length > 0){
        resultado = await artistaPersistence.alteraArtista(cnpjold, cnpjnew, nome, empresa, telefone, email, contrato)
    }
    return resultado
}


export default {getTodosArtistas, getUmArtista, criaArtista, excluiArtista, alteraArtista}