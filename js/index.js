
document.querySelector(".navbar-toggler").addEventListener("click", function () {
    $(".navbar-toggler").toggleClass("is-menu-open");
  });

const revealPosition = () => {
    let windowHeight = window.innerHeight
    let revealtop = element.getBoundingClientRect().top
    let revealpoint = 100
    
    return revealtop - windowHeight < revealpoint
}


const reveal = () => {
    var fadeUp = document.querySelectorAll("[data-scroll=fade-up]");
    var fadeSide = document.querySelectorAll("[data-scroll=fade-left],[data-scroll=fade-right]");
    var zoomOut = document.querySelectorAll("[data-scroll=zoom-out]");
    
    fadeUp.forEach(element => {

        let windowHeight = window.innerHeight
        let revealtop = element.getBoundingClientRect().top
        let revealpoint = 100

        if(revealtop - windowHeight < revealpoint) {
            element.classList.add("fade-up")
        }
        else {
            element.classList.remove("fade-up")
        }
    })

    fadeSide.forEach(element => {
        let windowHeight = window.innerHeight
        let revealtop = element.getBoundingClientRect().top
        let revealpoint = 100

        if(revealtop - windowHeight < revealpoint) {
            element.classList.add("fade-side")
        }
        else {
            element.classList.remove("fade-side")
        }
    })

    zoomOut.forEach(element => {
        let windowHeight = window.innerHeight
        let revealtop = element.getBoundingClientRect().top
        let revealpoint = 100

        if(revealtop - windowHeight < revealpoint) {
            element.classList.add("zoom-out")
        }
        else {
            element.classList.remove("zoom-out")
        }
    })
    

}
window.addEventListener("scroll", reveal)
