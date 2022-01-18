function duplicateCnpj(event) {

    const cnpj = event.target.value
    $.ajax({
        url: "/cfrete/api/cnpjtransportadora",
        method: 'POST',
        data: {
            cnpj: cnpj
        },
        dataType: 'json',
    }).then(function(result) {
        insertElementeValue(result)
    })
}

function insertElementeValue(confirm) {
    const msgArea = document.querySelector('[cf-cnpj-newt]')
    if (confirm == true) {
        msgArea.innerHTML = "já possui cadastro"
    } else {
        msgArea.innerHTML = ""
    }
}