const doaçãoHeader = document.querySelector('.main__doe__header');
const doaçãoText = document.querySelector('.main__doe__text');
const doaçãoBtn = document.querySelector('.main__doe__button');

const extrasIcon = document.querySelectorAll('.main__infos__extras__container .icon');
const extrasHeader = document.querySelectorAll('.main__infos__extras__container__header');
const extrasText = document.querySelectorAll('.main__infos__extras__container__text');
const extrasBtn = document.querySelectorAll('.main__infos__extras__container__button');

// Adicionar animação quando o usuário descer a página
document.addEventListener('scroll', (e) => {
    if (window.scrollY > 150) {
        doaçãoHeader.style.animation = 'main_header_text 1s forwards';
        doaçãoText.style.animation = 'main_header_text 1s forwards';
        doaçãoBtn.style.animation = 'main_header_button 1.5s forwards 0.5s';
    }
    
    if (window.scrollY > 1545) {
        // Para cada um, adicionar animação
        extrasIcon.forEach(icon => {
            icon.style.animation = 'main_header_button 1.5s forwards';
        });

        extrasHeader.forEach(header => {
            header.style.animation ='main_header_text 1s forwards';
        });

        extrasText.forEach(text => {
            text.style.animation = 'main_header_text 1s forwards';
        })

        extrasBtn.forEach(button => {
            button.style.animation = 'main_header_button 1.5s forwards 0.5s';
        });
    }
});