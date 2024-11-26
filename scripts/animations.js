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




document.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger)

  // animations for main section on load
  var tl = gsap.timeline()

  tl.from('.logo, .burgerMenu, .linksContainer li', {
    delay:0.2,
    opacity: 0,
    duration: 0.3,
    stagger: 0.1
  })

  .from('.mainContent h1', {
    opacity: 0,
    duration: 0.2
  })
  .from('.tag', {
    duration: 0.9, 
    stagger: 0.1,
    ease: Expo.easeInOut,
    opacity: 0
  })
  .from('.aboutMeText',{
    y: '10px',
    opacity: 0,
    duration: 0.5
  })

  .from('.socialLinks a', {
    y: '10px',
    opacity: 0,
    stagger: 0.1
  })
  .from('.myStack h3', {
    opacity: 0
  })
  .from('.langCard', {
    y: '10px',
    opacity: 0,
    stagger: 0.1
  })
  .from('.blob', {
    opacity: 0,
    stagger: 0.1
  })

  .from('.location, .themeToggle', {
    y: '10px',
    opacity: 0,
    stagger: 0.1
  })

})