for (let letras of "Cod3er"){
    console.log(letras)
}

const assuntos = ['mapp', 'set', 'promises']

for (let assunto of assuntos){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}], 
    ['set', {abordado: true}],
    ['promises', {abordado: false}]
])

for (let assunto of assuntosMap){
    console.log(assunto)
}

for (let chave of assuntosMap.keys()){
    console.log(chave)
}

for (let valor of assuntosMap.values()){
    console.log(valor)
}

for (let [ch,vl] of assuntosMap.entries()){
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letras of s){
    console.log(letras)
}

