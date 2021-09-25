const fs = require('fs');



const caminho = __dirname + '/braip.txt'
//sincrono... 

const conteudo = fs.readFileSync(caminho, 'utf8')
console.log(conteudo)

//assincrono

//fs.readFile(caminho, 'utf8',(err,conteudo) => {
    //const config = conteudo
    //console.log(conteudo)

//})

fs.readdir(__dirname,(err,arquivos) => {
    console.log(arquivos)

})

