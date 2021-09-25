// armazenando função em uma variavel

const imprimerSoma = function (a, b){
    console.log(a + b)
}

imprimerSoma(1 ,2)

// armazenando função arrow em uma variavel
const soma = (a, b) =>{
    return a+b
}

console.log(soma(2,1))


// retorno implicito
const subtracao = (a,b) => a - b;

console.log(subtracao(2,1))