class Lancamento{
    constructor(nome = "generico", valor = 0){
        this.nome = nome;
        this.valor = valor;
    }
}

class Ciclofinanceiro{
    constructor (mes, ano){
        this.mes = mes;
        this.ano = ano;

   
        this.lancamento = []
    }       

    adddlancamento(...lancamento){
        lancamento.forEach(l => this.lancamento.push(l))
        //for (let l of lancamento){
            //this.lancamento.push(l)
        //}
    }

    sumario(){
        let consolidado = 0;
        this.lancamento.forEach(i => {this.consolidado += i.valor})
        return consolidado
    }
   
}

const salario = new Lancamento ('Salario', 45000)
const contaLuz = new Lancamento ("luz", -222)

const contas = new Ciclofinanceiro(6,2018)
contas.adddlancamento(salario, contaLuz)
console.log(contas.sumario())

//class avo extende filhos