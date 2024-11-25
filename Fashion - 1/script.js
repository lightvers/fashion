const slider = document.querySelector('.sliders');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('.stroke_img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function  showPreviousSlide(){
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

function  showNextSlide(){
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block';
        }
        else {
            slide.style.display = 'none';
        }
    });
}

updateSlider();

let menu = document.querySelector(".dop-menu");
let menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", function(e) {
    e.preventDefault();
    menu.classList.toggle("dop-menu");
    menuToggle.classList.toggle("active");
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 480 && menu.classList.contains('dop-menu')) {
        menu.classList.remove('dop-menu');
        menuToggle.classList.remove("active");
    }
});