import { experience } from "./objects.js"

// ============ light/dark theme toggle =============
function initializeTheme() {
    const themeToggleBtn = document.querySelector('.themeToggle')
    const body = document.body

            // initialize
    const savedTheme = localStorage.getItem('theme') || 'light'
    body.setAttribute('data-theme', savedTheme)

            // toggle theme and save to local storage
            themeToggleBtn.addEventListener('click', () => {
                const newTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
                body.setAttribute('data-theme', newTheme)
                localStorage.setItem('theme', newTheme)
            })
}

initializeTheme()



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
        document.querySelector('.siteHeader').classList.add('navScrolled')
    } else {
        document.querySelector('.siteHeader').classList.remove('navScrolled')
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
            <div class="expBlock">
            <div class = 'tagsContainer'>
                <span class = 'expTag expDuration'>${exp.duration}</span>
            </div>
            <div class="expInfo">
                <h1 class="expTitle">
                    ${exp.title}
                </h1>
                <ul class="expTasks">
                    ${exp.description.map((desc) => 
                        `
                            <li>${desc}</li>
                        `
                    ).join('')}
                </ul>
            </div>
         </div>
        `
    })

    experienceContainer.innerHTML = experienceHTML
}


        //code to add filter ability to buttons
const categoryItems = document.querySelectorAll('.experienceCategories button')

const defaultCategory = document.querySelector('.workBtn')
defaultCategory.classList.add('activeExpBtn')

categoryItems.forEach((item) => {
    item.addEventListener('click', () => {

        categoryItems.forEach((btn) => {
            btn.classList.remove('activeExpBtn')
        })
        item.classList.add('activeExpBtn')

        filterExperience(item.innerHTML)
    })
})

