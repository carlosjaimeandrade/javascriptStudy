function getpreco(imposto = 0, moeda = 'R$'){
    return moeda, this.preco * (1-this.desc) * (1 + imposto);

    const x = {
        nome: "notebook",
        preco: 4589,
        desc: 0.15,
        getpreco
    }
    
}

console.log(getpreco())
console.log(x.getpreco())