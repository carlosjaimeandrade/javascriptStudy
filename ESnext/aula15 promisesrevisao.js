function gerarNumeroEntre(min, max){
    if(min > max){
        let [max, min] = [min, max]
        
    }

    return new Promise(resolve =>{
        const fator = (max - min +1)
        const aleatorio = parseInt(Math.random() * fator ) + min
        resolve(aleatorio)
    })
}

gerarNumeroEntre(10, 30)
.then(num => num * 10)
.then(numx10 => `o numero é ${numx10}`)
.then(console.log)
