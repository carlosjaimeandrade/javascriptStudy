function esperarPor (tempo = 2000) {
   
    return new Promise(function (resolve) {
        setTimeout( () => {
            resolve()
        }, tempo)


    })


}



async function executando(){
    await esperarPor(2000)
    console.log('executando...1')

    await esperarPor(2000)
    console.log('executando...2')

    await esperarPor(2000)
    console.log('executando...3')
}

executando()