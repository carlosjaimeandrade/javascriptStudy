
valor = [1,2,3,4]

valor.forEach((n, indice) =>{
    console.log("do foreach", n)
    console.log("do foreach",indice)
})


////////////////////////////
for (i in valor){
    console.log("do for", i)
}

///////////////////////////

valor = 2
valor = 1 ? console.log("é igual", valor) :  console.log("não é")


///////////////////////////
valor = 2
if (valor = 1) {
    console.log("é igual", valor) 
}else{
    console.log("não é")  
}

///////////////////////////
//função anonima
const a = (b, a) =>{
    console.log(b, a)
}

a("show!", "skrillex")


const b = (c,a) => console.log(c,a)

b('ola',"xaaa")