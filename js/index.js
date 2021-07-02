
document.querySelector(".navbar-toggler").addEventListener("click", function () {
    $(".navbar-toggler").toggleClass("is-menu-open");
  });


const reveal = () => {
    const fadeUp = document.querySelectorAll("[data-scroll=fade-up]");
    const fadeSide = document.querySelectorAll("[data-scroll=fade-left],[data-scroll=fade-right]");
    const zoomOut = document.querySelectorAll("[data-scroll=zoom-out]");

    let revealPosition = (element) => {
        let windowHeight = window.innerHeight
        let revealtop = element.getBoundingClientRect().top
        let revealpoint = 100
        
        return (revealtop - windowHeight) < revealpoint
    }
    
    fadeUp.forEach(element => {

        if(revealPosition(element)) {
            element.classList.add("fade-up")
        }
        else {
            element.classList.remove("fade-up")
        }
    })

    fadeSide.forEach(element => {

        if(revealPosition(element)) {
            element.classList.add("fade-side")
        }
        else {
            element.classList.remove("fade-side")
        }
    })

    zoomOut.forEach(element => {

        if(revealPosition(element)) {
            element.classList.add("zoom-out")
        }
        else {
            element.classList.remove("zoom-out")
        }
    })
    

}
window.addEventListener("scroll", reveal)
