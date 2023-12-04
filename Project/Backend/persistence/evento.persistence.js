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

async function getTipoEvento(tipoEvento){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("select nome, local, data from evento where tipoEvento=$1", [tipoEvento])
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

async function verEvento(id){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("SELECT evento.nome, show.atracao, data, local, titulo, descricao, arte FROM evento JOIN ingresso ON evento.id = ingresso.idEvento JOIN show ON evento.id = show.idEvento where evento.id=$1", [id])
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

async function getIdEvento(nome) {
    var resultado = null;
    const con = await BD.conectar();

    try {
        var query = await con.query("SELECT id FROM evento WHERE nome = $1", [nome]);

        // Verifica se a consulta retornou algum resultado
        if (query.rows.length > 0) {
            resultado = query.rows[0].id;  // Extrai o valor do ID do primeiro resultado
            console.log(resultado)
        }
    } catch (err) {
        console.error(err);
    } finally {
        con.release();
    }

    return resultado;
}



async function criaEvento(nome, local, data, descricao, tipoEvento, duracao, arte){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("insert into evento(nome, local, data,descricao, tipoEvento, duracao, arte) values ($1, $2, $3, $4, $5, $6, $7) returning *", [nome, local, data, descricao, tipoEvento, duracao, arte])
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

async function alteraEvento(idold, idnew, nome, local, data, descricao, tipoEvento, duracao, arte){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("update evento set nome=$1, local=$2, data=$3, descricao=$4, tipoEvento=$5, duracao=$6, arte=$7, id=$8 where id=$9 returning *", [nome, local, data, descricao, tipoEvento, duracao, arte, idnew, idold])
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

export default {getTodosEventos, getTipoEvento, verEvento, getUmEvento, getIdEvento, criaEvento, excluiEvento, alteraEvento}