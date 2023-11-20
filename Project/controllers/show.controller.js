import pg from 'pg'//npm install pg
import showServices from '../services/show.services.js'

async function getTodosShows(req, res){
    //chama SERVICES
    const resultado = await showServices.getTodosShows()
    res.send(JSON.stringify(resultado))
}

async function getUmShow(req, res){
    //capturar dados
    const id = req.params.id
    var resultado = null

    //validar dados
        //chama SERVICES
    resultado = await showServices.getUmShow(id)
    res.send(resultado)
}

async function excluiShow(req, res){
    //capturar dados
    const id = req.params.id
    var resultado = null
    //chama SERVICES
    resultado = await showServices.excluiShow(id)
    res.send(resultado)
}

async function alteraShow(req, res){
    //capturar dados
    const id = req.params.id
    const hora = req.body.hora
    const atracao = req.body.atracao
    const palco = req.body.palco
    const localEvento = req.body.localEvento
    //validação dos dados
    var resultado = null
    //chamada para o services
    resultado = await showServices.alteraShow(id, hora, atracao, palco, localEvento)
    res.send(resultado)
}

export default {getTodosShows, getUmShow, excluiShow, alteraShow}