const avo = { atri: 'a'}
const pai = {_proto_: avo, atri1: 'b'}
const filho = {_proto_: pai, atri2: 'c'}

console.log(filho)