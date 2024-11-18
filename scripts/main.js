// ============ burger menu animations ============
const burgerMenu = document.querySelector('.burgerMenu')
const mobileNav = document.querySelector('.navLinks')
const mobileNavLinks = document.querySelectorAll('.navLinks li')

burgerMenu.addEventListener('click', ()=>{
    mobileNav.classList.toggle('openMobileNav')
})

mobileNavLinks.forEach((link) => {
    link.addEventListener('click', ()=>{
        mobileNav.classList.remove('openMobileNav')
    })
})