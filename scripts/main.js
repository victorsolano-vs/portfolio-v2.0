import { experience, projects } from "./objects.js"

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


//  ============== projects section =============

const dropdownBtn = document.querySelector('.dropdownListBtn')
const dropdownText = document.querySelector('.dropdownBtnText')
const dropdownSvg = document.querySelector('.dropdownListBtn svg')
const categoryList = document.querySelector('.categoryList')

dropdownBtn.addEventListener('click', () => {
    dropdownSvg.classList.toggle('transformArrow')
    categoryList.classList.toggle('showCategoryList')
})

    // when clicking outside the list, close the list
document.addEventListener('click', (event) => {
    if(!categoryList.contains(event.target) && !dropdownBtn.contains(event.target)){
        dropdownSvg.classList.toggle('transformArrow')
        categoryList.classList.remove('showCategoryList')
    }
})


// make the selected text change the text on the main btn
const categoryProjectItems = document.querySelectorAll('.categoryList button')

const defaultProjectCategory = document.querySelector('[data-category="all"]');
defaultProjectCategory.classList.add('activeCategory')

categoryProjectItems.forEach((item) => {
    item.addEventListener('click', () => {

        categoryProjectItems.forEach((btn) => {btn.classList.remove('activeCategory')})
        item.classList.add('activeCategory')
        dropdownSvg.classList.toggle('transformArrow')
        
        dropdownText.innerHTML = item.innerHTML
        categoryList.classList.remove('showCategoryList')

        filterProjects(item.innerHTML)
    })
})

renderProjects(projects)

function filterProjects(category){
    if(category === 'All'){
        renderProjects(projects)
    } else {
        let filteredProjects = projects.filter((project, index) => {
            return project.projectType === category 
        })
        renderProjects(filteredProjects)
    }
}

function renderProjects(toRenderProj){
    let projectsContainer = document.querySelector('.projectsContainer')
    let portfolioHTML = ''

    if(toRenderProj.length === 0){
        portfolioHTML = `
            <p class = 'noProjectsMsg'>No projects yet! Currently creating!</p>
        `
    } else {
        toRenderProj.forEach((project) => {

            portfolioHTML += `
                <div class="projectCard">
                <div class="projectIMGContainer">
                        <img src="${project.projectImages.thumbnailView}" alt="" loading = 'lazy'>
                    </div>
                    <div class = 'cardTitle'>
                        <h6>${project.projectName}</h6>
                        <p>${project.projectType}</p>
                    </div>
                       <ul>
                        ${project.projectTechStack.map((p) => `
                        <li>${p}</li> 
                        `).join('&#8226;')}
                       </ul>

                       <div class = 'projectDescription'>
                            ${project.projectDescription}
                        </div>
    
                    <div class="projectLinks">
                        <a href="${project.projectLiveLink}">${project.projectType === 'UI/UX Design' ? 'View Design' : 'Live Demo' }</a>

                        <a href ="">${project.projectType === 'UI/UX Design' ? 'Case Study' : 'Source Code'}</a>
                    </div>
                </div>
            `
        })
    }
    
    projectsContainer.innerHTML = portfolioHTML

    // add animation
    document.querySelectorAll('.projectCard').forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('projectCardShow')
        }, index * 100)
    })
}