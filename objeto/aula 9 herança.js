console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// adicionando informação dentroda função String
String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('escola'.reverse())

