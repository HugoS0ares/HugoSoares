let testIndex = 0;

function moveTestimonials(direction) {
    const slider = document.getElementById('testimonialSlider');
    const cards = document.querySelectorAll('.testimonial-card');
    const totalCards = cards.length;
    
    let cardsVisible = window.innerWidth > 900 ? 3 : 1;
    const cardWidth = cards[0].getBoundingClientRect().width + 30; 

    // 3. Atualiza o índice
    testIndex += direction;

    // 4. Lógica de Loop Infinito
    const maxIndex = totalCards - cardsVisible;
    
    if (testIndex < 0) {
        testIndex = maxIndex;
    } else if (testIndex > maxIndex) {
       
        testIndex = 0;
    }

    // 5. Aplica o movimento
    slider.style.transform = `translateX(${-testIndex * cardWidth}px)`;
}

window.addEventListener('resize', () => {
    testIndex = 0;
    const slider = document.getElementById('testimonialSlider');
    if(slider) slider.style.transform = `translateX(0)`;
});