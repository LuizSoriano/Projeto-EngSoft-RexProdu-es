import express from 'express'//npm install express
import bodyParset from 'body-parser'//npm install body-parser
import clienteRouter from './routes/cliente.routes.js'
import artistaRouter from './routes/artista.routes.js'

const app = express()

//converte objeto request no formato json
app.use(express.json())

//configura o nome da pasta onde os arquivos estáticos estarão
app.use(express.static('public'))

//Faz o arser dos pacotes recebidos
app.use(bodyParset.urlencoded({extends:true}))

app.use("/cliente", clienteRouter)
app.use("/artista", artistaRouter)

app.listen(3000, mensagemServidor)

function mensagemServidor(){
    console.log("Servidor está rodando!!!")
}