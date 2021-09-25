
const pessoa={
    nome: "ana",
    idade: 5,
    enderço: {
        logradouro: "rua abc",
        numero: 1000
    }
}

const {nome, idade } = pessoa

console.log(nome, idade)

const { nome: a, idade: b } = pessoa

console.log(a, b)

const {sobrenome, bemhumorada = true} = pessoa
console.log(sobrenome, bemhumorada)

