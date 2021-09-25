function Aula (nome,video){
    this.consolenome = nome
    this.video = video

}

const aula = new Aula ('bem vindo', 123)
const aula2 = new Aula ('bem vindo', 123333)

console.log(aula, aula2)

function nome(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}