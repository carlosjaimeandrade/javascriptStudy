const valores = [7.7, 8.8, 6.3, 9.2]
console.log(valores[1], valores[3])

valores[1] = 10

console.log(valores[1], valores[3])
console.log(valores.length) // consegue saber quantas variaveis tem no array
valores.push('ola') // adiciona no array
console.log(valores)

console.log(valores.pop()) // tira o ultimo valor do array
console.log(valores)

delete valores[0]// deleta um determinado valor do array
console.log(valores) 

console.log(typeof valores) // array é um tipo objeto em java script

