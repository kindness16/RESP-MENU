const burger = document.querySelector('.burger')
burger.addEventListener('click', func)

function func(){
    const menu = document.querySelector('.menu')
    menu.classList.toggle('active')
}