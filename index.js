const mobileMenu = document.getElementById("mobile-menu");
const hambergurMenu = document.getElementById("hamburger");

const toggleMenu = ()=>{
    mobileMenu.classList.toggle("bg-white");
    hambergurMenu.classList.toggle("hidden");
}

mobileMenu.addEventListener("click", toggleMenu)