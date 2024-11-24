const navbarToggler = document.querySelector('.burgerMenu')
const mobileNav = document.querySelector('.mobileLinksContainer')
const navbarLinks = document.querySelectorAll('.mobileLink')

const mobileExit = document.querySelector('.exitBtn')

var tl = gsap.timeline({ defaults: { duration: 1, ease: Expo.easeInOut } })

navbarToggler.addEventListener("click", navbarTogglerClick);

tl.paused(true)
tl.to(".mobileLinksContainer", {
  height: "100%",
  pointerEvents: "all"
});
tl.to(".mobileLink", {
  opacity: 1,
  stagger: 0.1
}, "-=1");
tl.to('.mobileNavSeparator', {
    width: '70%',
    opacity: 1
}, '-=0.9')
tl.to('.mobileSocials', {
    opacity: 1,
    stagger: 0.1
}, '-=0.9')
tl.to(".exitBtn", {
  opacity: 1,
  y: "5px"
}, "-=1");
function navbarTogglerClick() {
  tl.play();
};
mobileExit.addEventListener('click', () => {
  tl.reverse(.9);
});
navbarLinks.forEach(item => {
  item.addEventListener('click', () => {
    tl.reverse(.9);
  })
});