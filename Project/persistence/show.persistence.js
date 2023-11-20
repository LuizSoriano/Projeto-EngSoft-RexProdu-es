import BD from './BD.js'

async function getTodosShows(){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("select * from show")
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

async function getUmShow(id){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("select * from show where id=$1", [id])
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

async function getShowArtista(nome){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("select * from show where atracao=$1", [nome])
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

async function criaShow(hora, atracao, palco, localEvento){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("insert into show(hora, atracao, palco, local) values ($1, $2, $3, $4) returning *", [hora, atracao, palco, localEvento])
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

async function excluiShow(id){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("delete from show where id=$1 returning *", [id])
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

async function alteraShow(id, hora, atracao, palco, localEvento){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("update show set hora=$1, atracao=$2, palco=$3, local=$4, where id=$5 returning *", [hora, atracao, palco, localEvento, id])
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

export default {getTodosShows, getUmShow, getShowArtista, criaShow, excluiShow, alteraShow}