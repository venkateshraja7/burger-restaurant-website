const menuIcon = document.getElementById('hamburger');
const nav = document.getElementsByTagName('nav').item(0);
const menuItems = document.getElementById('menu');
let open = false;
            
function menu() {
    if(!open) {
        menuIcon.classList.add('open');
        nav.classList.add('open');
        document.body.classList.add('open');
        menuItems.classList.add('open');
        open = true;
    } else {
        menuIcon.classList.remove('open');
        nav.classList.remove('open');
        document.body.classList.remove('open');
        menuItems.classList.remove('open');
        open = false;
    }                
}

menuIcon.addEventListener("click", menu);