import pg from 'pg'//npm install pg
import artistaServices from '../services/artista.services.js'

async function getTodosArtistas(req, res){
    //chama SERVICES
    const resultado = await artistaServices.getTodosArtistas()
    res.send(JSON.stringify(resultado))
}

async function getUmArtista(req, res){
    //capturar dados
    const cnpj = req.params.cnpj
    var resultado = null

    //validar dados
    if(cnpjValido(cnpj)){
        //chama SERVICES
        resultado = await artistaServices.getUmArtista(cnpj)
    }
    res.send(resultado)
}

function cnpjValido(cnpj) {
    // Remova caracteres não numéricos
    cnpj = cnpj.replace(/[^\d]/g, '');

    // Verifique se o CNPJ tem 14 dígitos
    if (cnpj.length !== 14) {
        return false;
    }

    // Verifique se todos os dígitos são iguais
    if (/^(\d)\1{13}$/.test(cnpj)) {
        return false;
    }

    // Calcula os dígitos verificadores
    let soma = 0;
    let peso = 2;

    for (let i = 11; i >= 0; i--) {
        soma += parseInt(cnpj.charAt(i)) * peso;
        peso = peso === 9 ? 2 : peso + 1;
    }

    let resto = soma % 11;
    let digito1 = resto < 2 ? 0 : 11 - resto;

    soma = 0;
    peso = 2;

    for (let i = 12; i >= 0; i--) {
        soma += parseInt(cnpj.charAt(i)) * peso;
        peso = peso === 9 ? 2 : peso + 1;
    }

    resto = soma % 11;
    let digito2 = resto < 2 ? 0 : 11 - resto;

    // Verifique se os dígitos calculados são iguais aos dígitos informados
    return digito1 === parseInt(cnpj.charAt(12)) && digito2 === parseInt(cnpj.charAt(13));
}


async function criaArtista(req, res){
    //capturar dados
    const cnpj = req.body.cnpj
    const nome = req.body.nome
    const empresa = req.body.empresa
    const telefone = req.body.telefone
    const email = req.body.email
    const contrato = req.body.contrato
    //validação dos dados
    var resultado = null
    if(cnpjValido(cnpj)){
    //chamada para o services
        resultado = await artistaServices.criaArtista(cnpj, nome, empresa, telefone, email, contrato)
    }
    res.send(resultado)
}

async function excluiArtista(req, res){
    //capturar dados
    const cnpj = req.params.
    const nome = req.params.nome
    var resultado = null
    if(cnpjValido(cnpj)){
        //chama SERVICES
        resultado = await artistaServices.excluiArtista(nome, cnpj)
    }
    res.send(resultado)
}

async function alteraArtista(req, res){
    //capturar dados
    const cnpjold = req.params.cnpj
    const cnpjnew = req.body.cnpj
    const nome = req.body.nome
    const empresa = req.body.empresa
    const telefone = req.body.telefone
    const email = req.body.email
    const contrato = req.body.contrato
    //validação dos dados
    var resultado = null
    if(cnpjValido(cnpjold) && cnpjValido(cnpjnew)){
        //chamada para o services
        resultado = await artistaServices.alteraArtista(cnpjold, cnpjnew, nome, empresa, telefone, email, contrato)
    }
    res.send(resultado)
}

export default {getTodosArtistas, getUmArtista, cnpjValido, criaArtista, excluiArtista, alteraArtista}