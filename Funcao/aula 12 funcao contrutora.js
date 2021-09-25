function carro( valocidadeMaxima = 200, delta = 5){
    let velocidadeAtual = 0
    // metodo publico
    this.acelarar = function(){
        if (velocidadeAtual + delta <= valocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = valocidadeMaxima
        }
    }
    //metodo publico
    this.getvelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new carro

uno.acelarar()
console.log(uno.getvelocidadeAtual())


const ferrari = new carro(358,20)
ferrari.acelarar()
console.log(ferrari.getvelocidadeAtual())