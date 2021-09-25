// criando função

function imprimirValor(a, b){
    console.log(a,b)

}

imprimirValor(1,2)
imprimirValor(1) // o javascrip ele aceita passar apenas um valor
imprimirValor(1,2,3,4,5) // tambem aceita irá aceitar os 2 primeiros e ignorar os demais

// função com retorno
function soma(a, b=0){
    return a + b;
}

console.log(soma(1,3))
console.log(soma(1))