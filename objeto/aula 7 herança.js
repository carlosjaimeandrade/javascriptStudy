const pai = { nome: 'pedro', cabelo: 'preto'}

const filha = Object.create(pai)

console.log(filha.cabelo)

const filha2 = Object.create(pai, { 
    nome:{value: 'bia', writable: false, Enumerator: true }
})

console.log(filha2.nome)

for(let key in filha2){
    console.log(key)
}