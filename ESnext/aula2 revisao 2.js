//arrow function nada mais é que um sintece menor
// criar funções em um unica linha
// função arrow sempre será uma função anonima

const soma = (a,b) => a + b // quando tem um unico parametro não precisa colocar o pareentece
console.log(soma(2,3))

// o return deve ser usado quando usamos o {}
const soma2 = (a,b) => {
    return a + b 
}
console.log(soma2(3,3))

// função não arrow mas com o mesmo efeito

//function soma1 (a,b){
    //return a + b
//}

//console.log(soma1(2,3))


/// arrow function (this)

const lexico1 = () => console.log(this === exports)
lexico1()

// parametros default

function log(texto = "node"){
    console.log(texto)
}

log('ola') // atribuindo valor
log() // sem atribuir irá retornar node, pois estamos usando o parecemeto default

//operador rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2,1,2,3))




