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
  }, '-=0.5')
  .from('.tag', {
    duration: 0.9, 
    stagger: 0.1,
    ease: Expo.easeInOut,
    opacity: 0
  }, '-=0.6')
  .from('.aboutMeText',{
    y: '10px',
    opacity: 0,
    duration: 0.5
  }, '-=0.5')

  .from('.socialLinks a', {
    y: '10px',
    opacity: 0,
    stagger: 0.1
  }, '-=0.5')
  .from('.myStack h3', {
    opacity: 0
  }, '-=0.6')
  .from('.langCard', {
    y: '10px',
    opacity: 0,
    stagger: 0.1
  }, '-=0.7')
  .from('.blob', {
    opacity: 0,
    stagger: 0.1
  }, '-=0.4')

  .from('.location, .themeToggle', {
    y: '10px',
    opacity: 0,
    stagger: 0.1
  }, '-=0.5')


  // scroll trigger

  var scrollTL = gsap.timeline({
    scrollTrigger: {
      trigger: '#experienceSection',
      start: 'top center'
    }
  })
  scrollTL.from('#experienceSection .sectionTitle', {
    y: '5px',
    opacity: 0,
    duration: 0.5
  })
  scrollTL.from('.experienceCategories button', {
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.5,
    stagger: 0.1
  }, '-=0.4')
  scrollTL.from('.experienceContainer', {
    opacity: 0,
    duration: 0.5
  }, '-=0.5')


  var scrollTL_1 = gsap.timeline({
    scrollTrigger: {
      trigger: '#portfolioSection',
      start: 'top center'
    }
  })
  scrollTL_1.from('#portfolioSection .sectionTitle', {
    y: '5px',
    opacity: 0,
    duration: 0.5
  })
  scrollTL_1.from('.projectsCategories, .categoryList li', {
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.5,
    stagger: 0.1
  }, '-=0.4')


  scrollTL_1.from('.projectsContainer', {
    opacity: 0,
    duration: 0.5
  }, '-=0.5')


  var scrollTL_2 = gsap.timeline({
    scrollTrigger: {
      trigger: '#contactSection',
      start: 'top center'
    }
  })
  scrollTL_2.from('#contactSection .sectionTitle', {
    y: '5px',
    opacity: 0,
    duration: 0.5
  })
  scrollTL_2.from('.formInput label, .formInput input, .formInput textarea, #submitBtn', {
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.5,
    stagger: 0.1
  }, '-=0.4')

})

