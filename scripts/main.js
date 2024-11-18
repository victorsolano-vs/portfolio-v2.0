import { experience } from "./objects.js"

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


// ============ navbar background on scroll =============
window.onscroll = () => {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        document.querySelector('.siteHeader').style.background = 'white'
        document.querySelector('.siteHeader').style.borderBottom = '1px solid lightgrey'
    } else {
        document.querySelector('.siteHeader').style.background = 'none'
        document.querySelector('.siteHeader').style.borderBottom = 'none'
    }
}




// ========= render experiences ===========
const defaultExpCategory = 'Work'
filterExperience(defaultExpCategory)

function filterExperience(category){
    let filteredExperiences = experience.filter((exp, index) => {
        return exp.type === category
    })

    renderExperiences(filteredExperiences)
}

        //function to render all the experiences
function renderExperiences(expToRender){
    let experienceContainer = document.querySelector('.experienceContainer')
    console.log(expToRender)
    let experienceHTML = ''

    expToRender.forEach((exp) => {

        experienceHTML += `
            <p>${exp.title}</p>
            <p style = 'margin-bottom: 1rem;'>${exp.type}</p>
        `
    })

    experienceContainer.innerHTML = experienceHTML
}


        //code to add filter ability to buttons
const categoryItems = document.querySelectorAll('.experienceCategories button')

categoryItems.forEach((item) => {
    item.addEventListener('click', () => {
        filterExperience(item.innerHTML)
    })
})

