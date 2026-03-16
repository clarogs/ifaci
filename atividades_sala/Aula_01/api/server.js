const express = require('express')
const cors = require('cors')
const api = express()

//Middlewares
api.use(express.json())
api.use(cors())

const dados = []
let id = 0;

//Rotas
api.get('/usuarios', (req, res)=>{
    let users = dados;

    res.send(users).status(200)
})

const porta = 8080;
api.listen(porta, ()=>{
    console.log(`API rodando na porta ${porta}`)
})