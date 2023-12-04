import pg from 'pg'//npm install pg
import ingressoClienteServices from '../services/ingressoCliente.services.js'

async function criaIngressoCliente(req, res){
    const titulo = req.body.titulo
    const idCliente = req.body.idCliente
    const quant = req.body.quantidade

    var resultado = null
    resultado = await ingressoClienteServices.criaIngressoCliente(titulo, idCliente, quant)
    res.send(resultado)
}

async function getIngressoCliente(req, res){
    //capturar dados
    const id = req.params.id
    const resultado = await ingressoClienteServices.getIngressoCliente(id)
    res.send(resultado)
}

export default {criaIngressoCliente, getIngressoCliente}