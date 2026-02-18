let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const slider = document.querySelector('.slider');

function updateSlider() {
    if (!slider) return; // Segurança caso o elemento não exista
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[currentIndex]) {
        dots[currentIndex].classList.add('active');
    }
}

function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex >= slides.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = slides.length - 1;
    updateSlider();
}

function currentSlide(index) {
    currentIndex = index;
    updateSlider();
}
function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    slides.forEach(slide => slide.querySelector('img').style.borderColor = 'transparent');
    
    slides[currentIndex].querySelector('img').style.borderColor = 'var(--dourado)';
}