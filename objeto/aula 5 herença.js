const ferrari ={
    modelo: 'f40',
    VelMax: 20
}

const volvo ={
    modelo: 'v40',
    VelMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)