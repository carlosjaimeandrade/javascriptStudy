function MeuObjeto(){}
console.log(MeuObjeto.prototype)


const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(MeuObjeto.prototype === obj1.__proto__)
