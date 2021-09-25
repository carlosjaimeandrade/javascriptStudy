// como funciona o let

var numero = 1 // var ela será visivel em qualquer lugar

{
    let numero = 2 // essa variavel só é visivel dentro do bloco 
    console.log ('dentro', numero)
    
}

console.log ('fora', numero)