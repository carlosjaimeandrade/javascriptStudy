$(document).ready(function() {
    $(`#search`).on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(`#table-search tr`).filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

$(document).ready(function() {
    $("#format-real-1").mask('#.##0,00', { reverse: true });
    $("#format-real-2").mask('#.##0,00', { reverse: true });
    $('#format-telefone').mask('(00) 0 0000-0000');
    $("#format-cnpj").mask("99.999.999/9999-99");
});



const loading = document.querySelector('.loading-container')
if (loading) {
    loading.style.display = "none";
}



function onLoadFile(event) {
    const elementInsert = document.querySelector("[cf-name-file]")
    if (event.target.files.length > 0) {
        const nameFile = event.target.files[0].name
        elementInsert.innerText = nameFile
    } else {
        elementInsert.innerText = ""
    }
}


const btnOpen = document.querySelector("[cf-open-modal]")
const modal = document.querySelector(".modal-info")
const closeModal = document.querySelector("[cf-close-modal]")
if (btnOpen) {
    btnOpen.onclick = () => {
        modal.style.display = modal.style.display == "flex" ? "none" : "flex"
    }
    closeModal.onclick = () => {
        modal.style.display = "none"
    }
}

const exportarBtn = document.querySelector('.btn-exportar')

if (exportarBtn) {
    exportarBtn.onclick = () => {
        var htmltable = document.querySelector('[e-excelExport]');
        let html = htmltable.outerHTML
        var data_type = "data:application/vnd.ms-excel;charset=utf-8";
        var a = document.createElement('a');
        a.href = data_type + ', ' + escape(html);
        a.download = 'relatorio.xls';
        a.click();
    }
}