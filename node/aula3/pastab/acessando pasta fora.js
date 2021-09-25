const moduloa = require('../../aula1/moduloa');

console.log(moduloa.ola)

const http = require('http')

http.createServer((req, res) =>{
    res.write('bom dia!')
    res.end()
}).listen(8080)