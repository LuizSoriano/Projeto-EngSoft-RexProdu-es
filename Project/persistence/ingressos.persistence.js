import BD from './BD.js'

async function getTodosIngressos(){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("select * from ingresso")
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

async function getUmIngresso(id){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("select * from ingresso where id=$1", [id])
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

async function criaIngresso(titulo, tipo, valor, descricao, tipoEvento){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("insert into ingresso(titulo, tipo, valor, descricao, tipoEvento) values ($1, $2, $3, $4, $5) returning *", [titulo, tipo, valor, descricao, tipoEvento])
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

async function excluiIngresso(id){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("delete from ingresso where id=$1 returning *", [id])
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

async function alteraIngresso(id, titulo, tipo, valor, descricao, tipoEvento){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("update ingresso set titulo=$1, tipo=$2, valor=$3, descricao=$4, tipoEvento=$5 where id=$6 returning *", [titulo, tipo, valor, descricao, tipoEvento, id])
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

export default {getTodosIngressos, getUmIngresso, criaIngresso, excluiIngresso, alteraIngresso}