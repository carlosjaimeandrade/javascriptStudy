

const tecnlogias = new Map()

tecnlogias.set('react', {framework: false})
tecnlogias.set('Angular', {framework: true})

console.log(tecnlogias.react) // modo errado
console.log(tecnlogias.get('react').framework)

const chavesVariadas = new Map([
    [function(){}, 'função' ],
    [{}, 'Objeto'],
    [123, "Números"]
])


chavesVariadas.forEach((vl, ch)=>{
    console.log(vl, ch)
})


console.log(chavesVariadas.has(123)) // verifica se tem no objeto
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)
