const menorIdade = (func, funcAtual) =>{ //

    
    //return func.idade > funcAtual.idade ? func : funcAtual
    if (func.idade < funcAtual.idade) {
        return func
    }else{
        return funcAtual
    }
}

const sexoM = p => .spexo === "m" 
const sexoF = p => p.sexo === "f"
const pessoas ={

    contrurores:[{
        nome: 'Paula',
        idade: 23,
        sexo: 'f'

    },{
        nome: 'ana',
        idade: 18,
        sexo: 'f'
    },
    {
        nome: 'Paulo',
        idade: 5,
        sexo: 'm'
    },
    {
        nome: 'Jao',
        idade: 10,
        sexo: 'm'
    }],


    retornar () {
        return pessoas.contrurores

    }
    
}

a = pessoas.retornar()
.filter(sexoF)
.reduce(menorIdade)

console.log(a.nome,a.idade)