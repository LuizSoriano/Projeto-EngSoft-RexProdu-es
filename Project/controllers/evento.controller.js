import pg from 'pg'//npm install pg
import eventoServices from '../services/evento.services.js'

async function getTodosEventos(req, res){
    //chama SERVICES
    const resultado = await eventoServices.getTodosEventos()
    res.send(JSON.stringify(resultado))
}

async function getUmEvento(req, res){
    //capturar dados
    const id = req.params.id
    var resultado = null

    //validar dados
        //chama SERVICES
    resultado = await showServices.getUmEvento(id)
    res.send(resultado)
}


async function criaEvento(req, res){
    //capturar dados
    const nome = req.body.nome
    const local = req.body.local
    const data = req.body.data
    const capacidade = req.body.capacidade
    const arrecadacao = req.body.arrecadacao
    const duracao = req.body.duracao
    const arte = req.body.arte
    const hora = req.body.hora
    const atracao = req.body.atracao
    const palco = req.body.palco
    const titulo = req.body.titulo
    const tipo = req.body.tipo
    const valor = req.body.valor
    const descricao = req.body.descricao
    const tipoEvento = req.body.tipoEvento
    //validação dos dados
    var resultado = null
    //chamada para o services
    resultado = await eventoServices.criaEvento(nome, local, data, capacidade, arrecadacao, duracao, arte, hora, atracao, palco, titulo, tipo, valor, descricao, tipoEvento)
    res.send(resultado)
}

async function excluiEvento(req, res){
    //capturar dados
    const id = req.params.id
    var resultado = null
    //chama SERVICES
    resultado = await eventoServices.excluiEvento(id)
    res.send(resultado)
}

async function alteraEvento(req, res){
    //capturar dados
    const id = req.params.
    const hora = req.body.hora
    const atracao = req.body.atracao
    const palco = req.body.palco
    const localEvento = req.body.localEvento
    //validação dos dados
    var resultado = null
    //chamada para o services
    resultado = await eventoServices.alteraEvento(id, hora, atracao, palco, localEvento)
    res.send(resultado)
}

export default {getTodosEventos, getUmEvento, criaEvento, excluiEvento, alteraEvento}