
// navbar transfom
let navBar = document.querySelector('#header')

document.addEventListener("scroll", () => {
    let scrollTop = window.scrollY

    if(scrollTop > 0){
        navBar.classList.add('rolar')
    } else(
        navBar.classList.remove('rolar')
    )
})

// modal
let modalSite = document.querySelector('dialog')
let btnFechar = document.querySelectorAll('dialog button')

let cont = 0;

document.addEventListener('mouseleave', ()=>{
    
    if(cont == 0){
        modalSite.showModal()
    }
    
})
btnFechar.forEach(button => {
    button.addEventListener('click',() =>{
        modalSite.close()
        cont = 1
    })
})

// card
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
    glare:true,
    "max-glare":
     0.5
});

// preload
gsap.fromTo(".loading-page", {opacity:1}, {
    opacity:0,
    duration:1.5,
    delay:3.5,
    display: "none"
});

gsap.fromTo(".logo-name" , {
    y:50,
    opacity:0,
}, {
    y:0,
    opacity:1,
    duration:2,
    delay:0.5,
})
