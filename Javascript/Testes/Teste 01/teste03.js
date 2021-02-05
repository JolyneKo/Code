const text = document.querySelector("#text");
const button = document.querySelector("#button");
const body = document.body;

let num = 1;

button.addEventListener('click', e => {
    num++;
    text.innerText = `Clique num: ${num}`;
    text.style.color = "red";

    setTimeout(() => {
        text.style.color = "blue";
    }, 100);

    if (num === 50) {
        const parabens = document.createElement("p");
        body.append(parabens);
        parabens.innerText = "Parabéns!!!";
    }
});

text.style.fontSize = "1.5em";
text.style.color = "blue";

button.setAttribute("title", "Clique me");