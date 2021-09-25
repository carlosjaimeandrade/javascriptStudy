function falarDepoisde(segundos, frase){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(frase, 'abc')
        },segundos *1000) 
    })

}

falarDepoisde(3,"que legal!")
    .then(frase => frase.concat('?/'))
    .then(outraFrase => console.log(outraFrase))
