import BD from './BD.js'

async function getTodosClientes(){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("select * from cliente")
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

async function getUmCliente(cpf){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("select * from cliente where cpf=$1", [cpf])
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

async function criaCliente(cpf, nome, salario, nasc){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("insert into cliente(cpf, nome, salario, nasc) values ($1, $2, $3, $4) returning *", [cpf, nome, salario, nasc])
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

async function excluiCliente(cpf){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("delete from cliente where cpf=$1 returning *", [cpf])
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

async function alteraCliente(cpfold, cpfnew, nome, salario, nasc){
    var resultado = null;
    const con = await BD.conectar()//espera uma conexão
    try{
        var query = await con.query("update cliente set cpf=$1, nome=$2, salario=$3, nasc=$4 where cpf=$5 returning *", [cpfnew, nome, salario, nasc, cpfold])
        console.log(query.rows)
        resultado = query.rows
    }catch(err){
        console.log(err)
    }finally{
        con.release()
    }
    return resultado
}

export default {getTodosClientes, getUmCliente, criaCliente, excluiCliente, alteraCliente}