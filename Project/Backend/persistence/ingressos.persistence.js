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

async function getUmIngresso(idEvento){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("select titulo, valor from ingresso where idEvento=$1", [idEvento])
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

async function getIdIngresso(titulo){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("SELECT id FROM ingresso WHERE titulo = $1", [titulo]);

        // Verifica se a consulta retornou algum resultado
        if (query.rows.length > 0) {
            resultado = query.rows[0].id;  // Extrai o valor do ID do primeiro resultado
            console.log(resultado)
        }
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

async function criaIngresso(titulo, tipo, valor, id){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("insert into ingresso(titulo, tipo, valor, idEvento) values ($1, $2, $3, $4) returning *", [titulo, tipo, valor, id])
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

async function alteraIngresso(id, titulo, tipo, valor){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("update ingresso set titulo=$1, tipo=$2, valor=$3, where id=$4 returning *", [titulo, tipo, valor, id])
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

export default {getTodosIngressos, getUmIngresso, criaIngresso, excluiIngresso, alteraIngresso, getIdIngresso}