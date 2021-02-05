const text = document.querySelector('#relógio');

setInterval(() => {
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    text.innerText = `${hour}:${min}:${sec}`;
}, 1000);
