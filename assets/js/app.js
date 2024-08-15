const burguer = document.querySelector('.burguer');
const iclose = document.querySelector('.close');
const menu = document.querySelector('.menu-mobile');

burguer.addEventListener('click', () => {
    menu.classList.add('active')
})

iclose.addEventListener('click', () => {
    menu.classList.remove('active')
})

menu.addEventListener('mouseleave', () =>{
    menu.classList.remove('active')
})
