// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}

console.log (a) //consegue acessar
//console.log(b) // vai da erro pois o let não permite pegar fora do {} bloco

// template string

const produto = 'ipad'

console.log(`${produto} é caro !`)

// destructuring

const [l, e, ...tras] = "cod3r"
console.log(l,e, tras)

const [x,y] = [1,2,3]
console.log(x,y)

const { idade: i, nome} = { nome: 'ana', idade: 9}
console.log(i, nome)