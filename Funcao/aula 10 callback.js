const notas = [1,2,3,4,5,6,4,3,2]

let notasbaixas = []

for (let i in notas){
    notasbaixas.push(notas[i])
}

console.log(notasbaixas)


/// com callback

notasbaixas = notas.filter(function(nota){
    return nota  < 5
})

console.log(notasbaixas)


const notasbaixas3 = notas.filter(nota => nota < 7)

console.log(notasbaixas3)