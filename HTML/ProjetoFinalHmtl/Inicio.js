document.addEventListener('DOMContentLoaded', () => {
    
    // 1. ANIMAÇÃO DE ENTRADA (CASCATA)
    // Procuramos os elementos principais de qualquer uma das 3 páginas
    const elementsToAnimate = [
        document.querySelector('.welcome-title'),
        document.querySelector('.auth-title'),
        document.querySelector('.welcome-subtitle'),
        document.querySelector('.auth-subtitle'),
        document.querySelector('.welcome-buttons'),
        document.querySelector('form'),
        document.querySelector('.auth-footer')
    ];

    // Filtramos apenas os que existem na página atual e aplicamos o estilo inicial
    elementsToAnimate.forEach((el, index) => {
        if (el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(25px)';
            el.style.transition = 'all 0.8s ease-out';
            
            // Faz a revelação com um pequeno atraso entre cada um (efeito cascata)
            setTimeout(() => {
                el.style.opacity = el.classList.contains('auth-footer') ? '0.7' : '1';
                el.style.transform = 'translateY(0)';
            }, 200 * (index + 1)); 
        }
    });

    // 2. FEEDBACK NO BOTÃO (PARA LOGIN E REGISTO)
    const loginForm = document.querySelector('form');
    if (loginForm) {
        loginForm.addEventListener('submit', function() {
            const btn = this.querySelector('.btn-luxo');
            if (btn) {
                btn.style.width = btn.offsetWidth + "px"; // Mantém a largura
                btn.innerHTML = '<span class="loader"></span> A processar...';
                btn.style.opacity = '0.7';
                btn.style.pointerEvents = 'none'; // Impede cliques duplos
            }
        });
    }
});