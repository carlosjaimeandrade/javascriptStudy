const escola = "Cod3r" // começa no index 0 

console.log(escola.charAt(4)) // tras a letra da estring charat
console.log(escola.charAt(5)) // se a string não tiver 5 carcter ele retorna nada
console.log(escola.charCodeAt(3)) // pega o valor na tabela ASK
console.log(escola.substring(1)) // indica que começar a string no indix 0
console.log(escola.substring(1, 3)) // indico que começara no indice 1 e sem incluir o indice 3


console.log(' escola '.concat(escola).concat("!")) // concatena
console.log(" console " .concat(escola) + "!") //concantena

console.log(escola.replace(3, "e")) // substitui o 3 por é, faz substituição

console.log("ana, maria, pedro".split(',')) //converte a string com base em um separador ',' em um array

