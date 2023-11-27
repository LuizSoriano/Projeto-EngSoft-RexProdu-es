import pg from 'pg'//npm install pg
import ingressoClienteServices from '../services/ingressoCliente.services.js'

async function criaIngressoCliente(req, res){
    const idIngresso = req.body.idIngresso
    const cpf = req.body.cpf

    var resultado = null
    resultado = await ingressoClienteServices.criaIngressoCliente(idIngresso, cpf)
    res.send(resultado)
}

export default {criaIngressoCliente}