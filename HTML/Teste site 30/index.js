const btnRight = document.getElementById('btn-right');
const btnLeft = document.getElementById('btn-left');
const images = document.querySelector('figure');
const imageNum = document.querySelectorAll('figure img').length;

let translateX = 0;
let imageIndex = 1;

btnRight.addEventListener('click', () => {
    console.log('click');

    if (imageIndex < 5) {
        imageIndex++;
        console.log(imageIndex);
        translateX -= 100;
        images.style.transform = `translateX(${translateX}%)`;
    }
});

btnLeft.addEventListener('click', () => {
    console.log('click');

    if (imageIndex > 1) {
        imageIndex--;
        console.log(imageIndex);
        translateX += 100;
        images.style.transform = `translateX(${translateX}%)`;
    } 
});