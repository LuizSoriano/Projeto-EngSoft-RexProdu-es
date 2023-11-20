import pg from 'pg'//npm install pg
import ingressoServices from '../services/ingresso.services.js'

async function getTodosIngressos(req, res){
    //chama SERVICES
    const resultado = await ingressoServices.getTodosIngressos()
    res.send(JSON.stringify(resultado))
}

async function getUmIngresso(req, res){
    //capturar dados
    const id = req.params.id
    var resultado = null

    //validar dados
    //chama SERVICES
    resultado = await ingressoServices.getUmIngresso(id)
    res.send(resultado)
}

async function excluiIngresso(req, res){
    //capturar dados
    const id = req.params.id
    var resultado = null
    //chama SERVICES
    resultado = await ingressoServices.excluiIngresso(id)
    res.send(resultado)
}

async function alteraIngresso(req, res){
    //capturar dados
    const id = req.params.id
    const titulo = req.body.titulo
    const tipo = req.body.tipo
    const valor = req.body.valor
    const descricao = req.body.descricao
    const tipoEvento = req.body.tipoEvento
    //validação dos dados
    var resultado = null
    //chamada para o services
    resultado = await showServices.alterashow(id, titulo, tipo, valor, descricao, tipoEvento)
    res.send(resultado)
}

export default {getTodosIngressos, getUmIngresso, excluiIngresso, alteraIngresso}