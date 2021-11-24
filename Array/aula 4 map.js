const array = [{
        nome: 'carlos'
    },
    {
        nome: 'joão'
    }
]


// for com proposito, gera um novo array não modiica o que recebeu

let result = array.map(function(e) {
    let tr = `<td>${e.nome}</td>`
    return tr
})

console.log(result)

result.forEach(e => {
    console.log(e)
})