const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const saudacao = require('./saudacaoMid');
const usuarioApi = require('./api/usuarios')
require('./api/produto')(app, 'com param!')


app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(saudacao('carlos'))

// ppode travar alterando o use para get ou post [all retorna todos]
app.use('/opa', (req, res, next) => {
    console.log('antes')
    next()
})

app.get('/clientes/relatorio', (req, res) => {
    res.send(`cliente ${req.query.completo} selecionado, ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => { //forma "manual " sem uso do baryparse vem no corpo da requisição
    //let corpo = ''

    //req.on('data', function (parte) {
    //    corpo += parte
    // }) //quando tiver chegando dados

    //req.on('end', ()=>{ //quando finalizar
    ///    res.send(corpo)
    //})
    res.send(req.body)
        //res.send(JSON.stringify(req.body))
})

app.get('/clientes/:id', (req, res) => {
    res.send(`cliente ${req.params.id} selecionado`)
})



app.get('/opa', (req, res, next) => { //função middleware
    console.log('durante')
        //res.send('HTML ola <b>estou bem<b>') //html
    res.json([
        { name: "Carlos", idade: 21 },
        { name: "Carlos", idade: 21 },
    ])

    next()
})

app.get('/opa', (req, res, next) => {
    console.log('depois')
})

app.listen(3006, () => {
    console.log("backend executando 2")
})