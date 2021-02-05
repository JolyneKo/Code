const adicionar = document.getElementById('add');
const remover = document.getElementById('remover');
const textBox = document.getElementById('addItems');
const text = document.getElementById('items');
const body = document.body;

const items = [];

adicionar.addEventListener('click', e => {
    e.preventDefault();
    const content = textBox.value;

    if (content !== '') {
        items.push(content);
        textBox.value = '';
        text.innerText = items.join(', ');
    } else {
        return;
    }
});

remover.addEventListener('click', e => {
    e.preventDefault();
    items.pop();
    text.innerText = items.join(', ');
});
