{{{var sera = 'sera???'}}} //var ele determina a varivel global

console.log(sera)


function teste(){ //se você criar fora da função o var será global
    var local = 123
    console.log(local)
}

////////////////////////////////

var numero = 1 
{
    var numero = 2
    console.log("dentro = " + numero)
}

console.log('fora =', numero)
