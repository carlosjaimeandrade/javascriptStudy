// par nome/valor

const saudacao = 'opa' // contexto lexico 1
console.log(saudacao)

function exec(){ //contexto lexico 2
    const saudacao = "fala"
    return saudacao
}

console.log(exec())

const cliente = {
    nome: 'pedro',
    idade: 12,
    peso: 30,
    endereço:{
        loudradouro: 'rua x',
        numero: 23
    }
}

console.log(cliente)
