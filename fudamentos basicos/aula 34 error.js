function tratarerror(erro){
    //throw this.erro
    console.log('ouve um erro')
}


    function imprimirNome(obj){
    try{
        console.log(obj.name)
    }catch(e){
        tratarerror(e)
    }finally{
        console.log('acabou')
    }
    }   





const obj = {name: 'roberto'}
imprimirNome(obj)