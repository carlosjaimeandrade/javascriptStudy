const array1 = [1, 2, 3, 4];


const itens = array1.reduce(
    (acumulador, valor) => acumulador + `<li>${valor}</li>`, ''
)

console.log(itens)