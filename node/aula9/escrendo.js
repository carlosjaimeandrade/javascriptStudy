const fs = require('fs')


fs.writeFile(__dirname + '/arquivogerado.txt', "aaagagagag \n sad", err => {
    console.log(err || 'arquivo gerado')
})