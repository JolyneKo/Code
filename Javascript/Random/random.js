const text = document.querySelector('#número');
const button = document.querySelector('#btn');

button.addEventListener('click', e => {
    let num = Math.floor(Math.random() * 10000) + 1;
    text.innerText = num;
});
