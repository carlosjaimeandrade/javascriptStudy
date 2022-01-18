const iconMenu = document.querySelectorAll('.fa-ellipsis-v')


iconMenu.forEach(e => {
    e.onclick = (e) => {
        let menu = e.target.parentNode.children[1]
        menu.style.display = menu.style.display == 'flex' ? 'none' : 'flex'
        if (menu.style.display == 'flex') {
            e.target.classList.toggle('fa-ellipsis-v')
            e.target.classList.toggle('fa-times-circle-o')
        }
        if (menu.style.display == 'none') {
            e.target.classList.toggle('fa-times-circle-o')
            e.target.classList.toggle('fa-ellipsis-v')

        }

    }
})