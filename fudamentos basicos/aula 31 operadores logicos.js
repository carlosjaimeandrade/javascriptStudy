// and e or e not !

function compras (trabalho1 , trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 // || or 
    const comprarTv50 = trabalho1 && trabalho2 // && and 
    const comprarTv32 = trabalho1 != trabalho2 // != diferente
    const manterSaudadevel = !comprarSorvete // != diferente

    return {comprarSorvete, comprarTv50,  comprarTv32, manterSaudadevel }
}

console.log(compras(true, true))