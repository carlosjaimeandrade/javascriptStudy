let comparar = function (param) {
    console.log(this === param)
}

comparar(global)

const obj = {}
comparar = comparar.bind(obj)


function apresentar(a){
    console.log(a)
}

apresentar ('ola')
