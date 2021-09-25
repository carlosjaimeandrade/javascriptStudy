const produtos = [
    { nome:'notebook', preco: 2454, fragil: true },
    { nome:'ipad', preco: 2222, fragil: true },
    { nome:'Computador', preco: 2124, fragil: true },
    { nome:'Carro', preco: 23232, fragil: false },
];

a = produtos.filter(function(p){
    return p.preco > 2400 
})

console.log(a)