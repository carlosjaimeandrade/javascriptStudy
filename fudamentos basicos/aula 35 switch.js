const imprir = function (nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('quadro da honra')
            break
        case 5:
        case 6:       
            console.log('Aprovado')    
        default:
            console.log('invalido')
            
    }

}


imprir(1)