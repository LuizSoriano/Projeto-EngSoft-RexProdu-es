import BD from './BD.js'


async function criaIngressoCliente(idIngresso, cpf){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("insert into ingressoCliente(idIngresso, cpf) values ($1, $2) returning *", [idIngresso, cpf])
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

export default{criaIngressoCliente}