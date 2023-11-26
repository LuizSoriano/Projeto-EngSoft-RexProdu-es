import pg from 'pg'//npm install pg

async function conectar(){
    const pool = new pg.Pool({
        connectionString: "postgres://gmrmqfdp:S7kqcpieFN0gVaWCimAASdWjhtd0yhJp@isabelle.db.elephantsql.com/gmrmqfdp"
    })
    return pool.connect()
}

export default {conectar}