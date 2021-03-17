let isOpen = false;

$('.header__menu__icon').click(() => {
    $('.menu').toggleClass('menu--open');
    $('.mobile__wrapper').toggleClass('menu--open');
    $('.header').toggleClass('menu--open');
});

$('.menu__links__link').click(function () {
    if (!isOpen) {
        let conteúdo = $(this).data('categorias').match(/([a-zA-Z\-\_\só]+)/g)
        
        console.log(conteúdo);
        const links = $(this).data('links').split(' ');

        links.forEach((link, index) => {
            const item = conteúdo[index];

            const elementos = `
                <li class="menu__links__link category--item" style="margin-left: 20px;">
                    <a href="${link}">${item}</a>
                </li>
            `;

            $(elementos).insertAfter(this);
        });

        isOpen = !isOpen;
    } else {
        $('.category--item').remove();
        isOpen = !isOpen;
    }
});