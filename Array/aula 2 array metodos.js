const pilotos = ["vittel", 'alonso', 'antonio', 'massa']

//
console.log("remove o ultimo elemento do array")
pilotos.pop()
console.log(pilotos)

//
console.log("adiciona elemento no final do array")
pilotos.push('Carlos')
console.log(pilotos)

//
console.log("remove o primeiro elemento do array")
pilotos.shift()
console.log(pilotos)

//
console.log("adiciona um valor no começo do array")
pilotos.unshift('Hortencia')
console.log(pilotos)

//
console.log("adiciona valor no meio do array")
pilotos.splice(2, 0, "pedrin", "joão") // a contagem não começa no 0
console.log(pilotos)

//
console.log("remover")
pilotos.splice(3,1) // a contagem não começa no 0
console.log(pilotos)

//
console.log("cria um array com base em um array existente")
const novo_array = pilotos.slice(1) // o numero indica de onde deve começar no array existente
console.log(novo_array)

//
console.log("cria um array com base em um array existente")
const novo_array2 = pilotos.slice(1,4) //1de até 4
console.log(novo_array2)



