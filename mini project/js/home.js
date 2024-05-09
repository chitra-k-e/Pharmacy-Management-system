let menu = document.querySelector('#menu-btn');
let navbaar = document.querySelector('.navbar');

menu.onclick = () =>
{
    menu.classList.toggle('fa-times');
    navbaar.classList.toggle('active');
}
window.onscroll = () =>
{
    menu.classList.remove('fa-times');
    navbaar.classList.remove('active');
}