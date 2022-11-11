
// hamburger Menu
const hamburger = document.querySelector("#hamburger");
const topnav = document.querySelector("#top-nav");
// dim background elements and hide title when hamburger is active
const dimbox = document.querySelector("#dim-box");
const headertitle = document.querySelector("#header-title");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    topnav.classList.toggle("active");
    dimbox.classList.toggle("active");
    headertitle.classList.toggle("active");
})

document.querySelectorAll("#top-nav").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    topnav.classList.remove("active");
    dimbox.classList.remove("active");
    headertitle.classList.remove("active");
}))


// change header color when scrolling down
const header = document.querySelector("#header");

window.onscroll = function(){
    var top = window.scrollY;
    if (top >= 20){
        header.classList.add("active");
    }
    else {
        header.classList.remove("active");
    }
}

// apply class to current page link
const activePage = window.location.pathname;
const pagelink = document.querySelectorAll(".page-link").
forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add("active");
    }
})