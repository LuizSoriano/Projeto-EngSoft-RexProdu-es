import BD from './BD.js'


async function criaIngressoCliente(idIngresso, idCliente, quantidade){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("insert into ingressoCliente(idIngresso, idCliente, quantidade) values ($1, $2, $3) returning *", [idIngresso, idCliente, quantidade])
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

async function getIngressoCliente(id){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("SELECT evento.nome AS nome_evento, cliente.cpf, ingresso.titulo, cliente.nome AS nome_cliente, ingresso.valor FROM ingressoCliente JOIN ingresso ON ingresso.id = ingressoCliente.idIngresso JOIN evento ON evento.id = ingresso.idEvento JOIN cliente ON cliente.id = ingressoCliente.idCliente where ingressoCliente.idCliente=$1", [id])
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

export default{criaIngressoCliente, getIngressoCliente}