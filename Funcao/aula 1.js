
// criar de forma literal
function fun1(){
}

// armazenar em uma variavel
const fun2 = function (){   
}

// armazenar em um array
const array = [function (a,b){return a + b}, fun1, fun2];
console.log(array[0](2,3))

// armazenar em um atributo objeto
const obj = {}
obj.falar = function () {return 'opa'}
console.log (obj.falar())

// passar funcao como param
function run (fun){
    fun()
}

function fun(){
    console.log('executando')
}

run(fun)

// uma função pode retornar / conter outra fução

function soma( a, b){
    return function (c){
        console.log(a + b+ c)
    }
}

soma(1,2)(4)