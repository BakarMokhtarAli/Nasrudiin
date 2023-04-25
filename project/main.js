const menu = document.querySelector('.menu')
const links = document.querySelector('.links')
const open = document.querySelector('.open')
const close = document.querySelector('.close')
menu.addEventListener('click',()=>{
    open.classList.toggle('hide')
    close.classList.toggle('hide')
    links.classList.toggle('links-open')
})