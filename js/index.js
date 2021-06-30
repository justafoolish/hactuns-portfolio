
document.querySelector(".navbar-toggler").addEventListener("click", function () {
    $(".navbar-toggler").toggleClass("is-menu-open");
  });


const reveal = () => {
    var fadeUp = document.querySelectorAll("[data-scroll=fade-up]");
    var fadeSide = document.querySelectorAll("[data-scroll=fade-left],[data-scroll=fade-right]");
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

}
window.addEventListener("scroll", reveal)
