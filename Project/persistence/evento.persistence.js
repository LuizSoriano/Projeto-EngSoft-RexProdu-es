import BD from './BD.js'

async function getTodosEventos(){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("select * from evento")
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

async function getUmEvento(id){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("select * from evento where id=$1", [id])
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

async function getUmLocalEvento(localEvento){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("select * from evento where local=$1", [localEvento])
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

async function criaEvento(nome, local, data, capacidade, arrecadacao, duracao, arte){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("insert into evento(nome, local, data, capacidade, arrecadacao, duracao, arte) values ($1, $2, $3, $4, $5, $6, $7) returning *", [nome, local, data, capacidade, arrecadacao, duracao, arte])
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

async function excluiEvento(id){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("delete from evento where id=$1 returning *", [id])
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

async function alteraEvento(id, nome, local, data, capacidade, arrecadacao, duracao, arte){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("update ingresso set nome=$1, local=$2, data=$3, capacidade=$4, arrecadacao=$5, duracao=$6, arte=$7 where id=$8 returning *", [nome, local, data, capacidade, arrecadacao, duracao, arte, id])
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

export default {getTodosEventos, getUmEvento, getUmLocalEvento, criaEvento, excluiEvento, alteraEvento}