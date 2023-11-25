import pg from 'pg'//npm install pg

import showPersistence from '../persistence/show.persistence.js'
import res from 'express/lib/response.js'
import eventoPersistence from '../persistence/evento.persistence.js'

async function getTodosShows(){
    //chama presistência
    return await showPersistence.getTodosShows()
}

async function getUmShow(id){
     //chama presistência
    return await showPersistence.getUmShow(id)
}

async function testeShowArtista(nome){
    //chama presistência
    var resultado = await showPersistence.getShowArtista(nome)
    if(resultado.length > 0)
        return true
    return false
}

async function criaShow(hora, atracao, palco, id){
    //regra de negócio
    var resultado = null
    //chamar persistência
    resultado = await showPersistence.criaShow(hora, atracao, palco, id)
    return resultado
}

async function excluiShow(id){
    //regra de negócio
    var show = await showPersistence.getUmShow(id)
    var resultado = null
    //chamar persistência
    if(show.length > 0)
        resultado = await showPersistence.excluiShow(id)
    return resultado
    
}

async function alteraShow(id, hora, atracao, palco){
    //regra de negócio
    var show = await showPersistence.getUmShow(id)
    var resultado = null
    //chamar persistência
    if(show.length > 0){
        resultado = await showPersistence.alteraShow(id, hora, atracao, palco)
    }
    return resultado
}


export default {getTodosShows, getUmShow, testeShowArtista, criaShow, excluiShow, alteraShow}