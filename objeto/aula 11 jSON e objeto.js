const obj = {
    a:1,
    b:2,
    c:3,
    soma(){
    return a + b + c
    }

}
// convertendo para json
console.log(JSON.stringify(obj))

// converte json para object
console.log(JSON.parse('{"a":1, "b":2, "c":3}'))

// [1,2,3] array 
// [{},{}] array com objetos
// {a:1} objetct
// {'"a":1'} json