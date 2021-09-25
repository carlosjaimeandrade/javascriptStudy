// operador ...rest (juntar)// spread (espalhar)


// usando spread com objeto

const funcionario = { nome: 'maria', salario: 121245}

const clone = { ativo: true, ...funcionario}

console.log(clone)

// usando spreed com array
const grupoA = ['joao', 'pedro', 'gloria']

const grupoFinal = ['Maria', 'Rafaela', ...grupoA]

console.log(grupoFinal)