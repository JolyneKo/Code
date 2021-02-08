const input = document.querySelector('#URL');
const button = document.querySelector('#btn');

button.addEventListener('click', e => {
    e.preventDefault();
    const URL = input.value;
    if (URL.includes('https://') && URL.includes('youtu'))
        window.location.href = `http://localhost:5600/download/?URL=${URL}`;
});
