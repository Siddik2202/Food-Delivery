// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};
window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('open');
}

let darkmod = document.querySelector("#darkmood");
darkmod.onclick = ()=>{
    if(darkmod.classList.contains('bx-moon')){
        darkmod.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('dark');
    }else{
        darkmod.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('dark')

    }
}











