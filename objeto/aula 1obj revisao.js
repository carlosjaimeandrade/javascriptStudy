const produto = new Object
produto.nome = "cadeira"
produto.marca = "generica"
produto.preco = 20


console.log(produto)

delete produto.preco

console.log(produto)

const carro = {
    modelo: 'a4',
    valor: 89000,
    // definindo atributos normais
    endereco:{
        nome: 'raul',
        logradouro: 'rua abc',
        numero: 111
    },
      // definindo atributos com base em um array
    contrurores:[{
        nome: 'junior',
        idade: 23,
        sexo: 'masculino'

    },{
        nome: 'ana',
        idade: 56,
        sexo: 'feminino'
    }],
    // criando uma function
    calcularValorseguro: function(){
        //...
    },

}

console.log(carro.contrurores)

carro.endereco.numero = 22

console.log(carro)

//delete carro.endereco

console.log(carro)

