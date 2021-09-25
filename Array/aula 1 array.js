let aprovados = new Array('bia', 'carlos', 'ana');

aprovados = ['bia', 'carlos', 'ana']

//sem for
console.log(aprovados[0])

// adicionando no array
aprovados.push("Hortencia")

//for
console.log("")
for(let i of aprovados){
    console.log (i)
}

// ordenar
console.log(aprovados.sort())

console.log("----")
//delete 
delete aprovados[0]
console.log(aprovados)
console.log("----")
// splice deleta com base nas informção, primeiro numero idica de onde irá começar,
// segundo numero indica quanto apos o primeiro deve deletar
aprovados = ['bia', 'carlos', 'ana']
aprovados.splice(1,1) 
console.log(aprovados)
console.log("----")

// aplice subtituindo valor no elementos, deleta 2 e subtitui 2 
aprovados = ['bia', 'carlos', 'ana']
aprovados.splice(1,2, "hortencia", "joão") 
console.log(aprovados)

// mostra o total que tem no array
console.log(aprovados.length)