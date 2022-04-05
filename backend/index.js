const express = require('express')
const server = express();
const cors = require('cors');

server.use(cors()) //Essa linha aqui


const alunos = ['Wesley', 'Marina', 'Bruno', 'Paula'];

server.get('/alunos', (req, res) =>{
    return res.json(alunos)
})

server.listen(4000)