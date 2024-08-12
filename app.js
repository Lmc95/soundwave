const btnMenu = document.getElementById('btn_menu');
const navMenu = document.querySelector('.nav_menu');
const navMenuOpt = document.querySelectorAll('.nav_menu a');

btnMenu.addEventListener('click', () => {
    if(navMenu.classList.contains('nav_menu_abrir')){
        navMenu.classList.remove('nav_menu_abrir');
        navMenuOpt.forEach(e => {
            e.style.opacity = '0';
        })
        document.body.style.overflow = '';
    } else {
        navMenu.classList.add('nav_menu_abrir');
        setTimeout(() => {
            navMenuOpt.forEach(e => {
                e.style.opacity = '100%';
            })
        }, 300);
        document.body.style.overflow = 'hidden';
    }
})

navMenuOpt.forEach(e => {
    e.addEventListener('click', () => {
        navMenu.classList.remove('nav_menu_abrir');
        document.body.style.overflow = '';
    })
})

