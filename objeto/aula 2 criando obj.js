
const obj = {
    modelo: 'a4',

    b = () =>{
        return modelo
    }

};

console.log(obj)


// criar objeto de forma funcao
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPreco = function(){
        return preco * (1 - desc)
    }
}

const p1 = new Produto('caneta', 25, 0.1)
console.log(p1.getPreco())


//funçãocactory

function criarFuncionario (nome, salario, faltas){
    return{
        nome,
        salario,
        faltas,
        getSalario(){
            return (salario / 30) * (30- faltas)
        }
    }
}

const f1 = new criarFuncionario('carlos', 5555,0)
console.log(f1)

// objeto.create
const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)

const fromaJson = JSON.parse('{"Info": "sou um JSON"}')

console.log(fromaJson.Info)