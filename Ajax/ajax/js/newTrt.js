$.ajax({
    url: "/cfrete/api/selectTransportadoras",
    method: 'POST',
    data: {
        request: true
    },
    dataType: 'json',
}).then(function(result) {
    insertElementeValue(result, event)
})


function insertElementeValue(result, event) {
    const cnpjArea = document.querySelector('[cf-insert-cnpj]')
    cnpjArea.innerHTML = `<option value="">Selecione</option>`
    result.forEach(e => {
        const transp = `${e.nome_fantasia} - ${e.cnpj}`
        cnpjArea.insertAdjacentHTML("beforeend", `<option value="${e.id}">${transp}</option>`)
    })
}