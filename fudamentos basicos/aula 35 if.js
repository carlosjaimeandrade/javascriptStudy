function boaNoticia(nota){
    if (nota>=7){
        console.log("ola, você passou sua nota é", nota)
    }else{
        console.log("você não passou, sua nota foi baixo,", nota)
    }
}

boaNoticia(2)
 
function forVerdade(valor){
    if(valor){
        console.log("é verdade", valor)
    }else{
        console.log('é falso')
    } 
}

forVerdade()