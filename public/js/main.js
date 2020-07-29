document
.querySelector(".menu-btn")
.addEventListener("click", () =>
    document.querySelector(".hamburger ").classList.toggle("is-active")
);
document
.querySelector(".menu-btn")
.addEventListener("click", () =>
    document.querySelector(".main-menu").classList.toggle("is-active")
);
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollpos = window.pageYOffset;
    if(prevScrollpos > currentScrollpos) {
        document.getElementById("navbar").style.top = "0";

    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollpos
}