function produto(altura, largura, comprimento, quantidade, peso){
    this.altura = altura;
    this.largura = largura;
    this.quantidade = quantidade;
    this.peso = peso;
    this.comprimento = comprimento;

 
    this.cubagem = () =>{
      this.resultado = (this.altura*this.largura*this.comprimento)/1000000 * this.quantidade
      return this.resultado
    }

    this.peso_total = ()=>{
        this.resultado_total = this.quantidade*this.peso
        return this.resultado_total
    }

}

p1 = new produto(80,50,30,58,458)
console.log(p1.cubagem(),'m3')
console.log(p1.peso_total())
console.log(p1)