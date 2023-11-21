import BD from './BD.js'

async function getTodosArtistas(){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("select * from artista")
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

async function getUmArtista(cnpj){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("select * from artista where cnpj=$1", [cnpj])
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

async function criaArtist(cnpj, nome, empresa, telefone, email, contrato){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("insert into artista(cnpj, nome, empresa, telefone, email, contrato) values ($1, $2, $3, $4, $5, $6) returning *", [cnpj, nome, empresa, telefone, email, contrato])
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

async function excluiArtista(cnpj){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("delete from artista where cnpj=$1 returning *", [cnpj])
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

async function alteraArtista(cnpjold, cnpjnew, nome, empresa, telefone, email, contrato){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("update artista set cnpj=$1, nome=$2, empresa=$3, telefone=$4, email=$5, contrato=$6 where cnpj=$7 returning *", [cnpjnew, nome, empresa, telefone, email, contrato, cnpjold])
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

export default {getTodosArtistas, getUmArtista, criaArtista, excluiArtista, alteraArtista}