let slideBtnLeft = document.getElementById("slide-btn-left");
let slideBtnRight = document.getElementById("slide-btn-right");
let imgItem = document.querySelectorAll(".image-item");

let startSlider = 0;
let endSlider = (imgItem.length - 1) * 100;

function updateSlider() {
    imgItem.forEach(element => {
        element.style.transform = `translate(${startSlider}%)`;
    });
}

function slideRight() {
    if (startSlider > -endSlider + 100) {
        startSlider = startSlider - 100;
    } else {
        startSlider = 0; // Reset to the beginning
    }
    updateSlider();
}

function slideLeft() {
    if (startSlider < 0) {
        startSlider = startSlider + 100;
    } else {
        startSlider = -endSlider + 100; // Reset to the end
    }
    updateSlider();
}

slideBtnLeft.addEventListener("click", slideLeft);
slideBtnRight.addEventListener("click", slideRight);


// sidebar-nav
const sideBarNavigation = document.getElementById("sidebar-container");
const sideBarOpenNavigation = document.getElementById("open_nav_sidebar");
const sideBarClose = document.getElementById("sidebar-close");

sideBarOpenNavigation.addEventListener("click", () => {
     sideBarNavigation.classList.toggle("sidebar-show");
});
sideBarClose.addEventListener("click", ()=>{
    sideBarNavigation.classList.toggle("sidebar-show");
});
