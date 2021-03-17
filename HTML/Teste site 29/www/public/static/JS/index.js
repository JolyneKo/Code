$(document).on('scroll', function(e) {
    if (window.scrollY > 150) {
        $('.main__doe__header').css('animation', 'main_header_text 1s forwards');
        $('.main__doe__text').css('animation', 'main_header_text 1s forwards');
        $('#doar_imagem').css('animation', 'main_header_button 1.5s forwards 0.5s');
    }
    
    if (window.scrollY > 1545) {
        $('.main__infos__extras__container .icon').css('animation', 'main_header_button 1.5s forwards');
        $('.main__infos__extras__container__header').css('animation', 'main_header_text 1s forwards');
        $('.main__infos__extras__container__text').css('animation', 'main_header_text 1s forwards');
        $('.main__infos__extras__container__button').css('animation', 'main_header_button 1.5s forwards 0.5s');
    }
});