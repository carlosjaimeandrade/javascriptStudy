function rand({min = 0, max=1000}){
    const valor = Math.random() * (max - min) + min
    return Math.random()
}

const obj = {min: 20, max: 20}
console.log(rand(obj))