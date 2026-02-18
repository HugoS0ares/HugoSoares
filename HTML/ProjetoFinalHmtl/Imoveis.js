  let currentPage = 0;
        function moveImoveis(direction) {
            const slider = document.getElementById('imoveisSlider');
            const pages = document.querySelectorAll('.imoveis-page');
            currentPage += direction;
            if (currentPage >= pages.length) currentPage = 0;
            if (currentPage < 0) currentPage = pages.length - 1;
            slider.style.transform = `translateX(${-currentPage * 100}%)`;
        }