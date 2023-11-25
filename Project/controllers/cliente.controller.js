import pg from 'pg'//npm install pg
import clienteServices from '../services/cliente.services.js'

async function getTodosClientes(req, res){
    //chama SERVICES
    const resultado = await clienteServices.getTodosClientes()
    res.send(JSON.stringify(resultado))
}

async function getUmCliente(req, res){
    //capturar dados
    const cpf = req.params.cpf
    var resultado = null

    //validar dados
    if(cpfValido(cpf)){
        //chama SERVICES
        resultado = await clienteServices.getUmCliente(cpf)
    }
    res.send(resultado)
    //const resultado = await clienteServices.getTodosClientes()
    //res.send(JSON.stringify(resultado))
}

async function logarCliente(req, res){
    //capturar dados
    const email = req.body.email
    const senha = req.body.senha
    var resultado = null

    //validar dados
    //chama SERVICES
    resultado = await clienteServices.logarCliente(email, senha)
    res.send(resultado)
    //const resultado = await clienteServices.getTodosClientes()
    //res.send(JSON.stringify(resultado))
}

function cpfValido(cpf) {
    // Remova caracteres não numéricos
    cpf = cpf.replace(/[^\d]/g, '');

    // Verifique se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
        return false;
    }

    // Verifique se todos os dígitos são iguais
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    // Calcula os dígitos verificadores
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    let resto = 11 - (soma % 11);
    let digito1 = resto === 10 || resto === 11 ? 0 : resto;

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }

    resto = 11 - (soma % 11);
    let digito2 = resto === 10 || resto === 11 ? 0 : resto;

    // Verifique se os dígitos calculados são iguais aos dígitos informados
    return digito1 === parseInt(cpf.charAt(9)) && digito2 === parseInt(cpf.charAt(10));
}



async function criaCliente(req, res){
    //capturar dados
    const cpf = req.body.cpf
    const nome = req.body.nome
    const email = req.body.email
    const senha = req.body.senha
    //validação dos dados


    //chamada para o services
    const resultado = await clienteServices.criaCliente(cpf, nome, email, senha)
    res.send(resultado)
}

async function excluiCliente(req, res){
    //capturar dados
    const cpf = req.params.cpf
    var resultado = null
    if(cpfValido(cpf)){
        //chama SERVICES
        resultado = await clienteServices.excluiCliente(cpf)
    }
    res.send(resultado)
}

async function alteraCliente(req, res){
    //capturar dados
    const cpfold = req.params.cpf
    const cpfnew = req.body.cpf
    const nome = req.body.nome
    const email = req.body.email
    const senha = req.body.senha
    //validação dos dados


    //chamada para o services
    const resultado = await clienteServices.alteraCliente(cpfold, cpfnew, nome, email, senha)
    res.send(resultado)
}

export default {getTodosClientes, getUmCliente, logarCliente, cpfValido, criaCliente, excluiCliente, alteraCliente}