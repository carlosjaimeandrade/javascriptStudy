console.log('teste')

const objt = {}
objt.nome = 'bola'

objt['valor'] = 50

console.log(objt.nome)
console.log(objt.valor)


function Obj (nome){
    this.nome = nome
}

const objt2 = new Obj('Cadeira')
const objt3 = new Obj('Cadeira')

console.log(objt2.nome)
console.log(objt3.nome)