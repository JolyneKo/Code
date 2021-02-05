// Criando elementos
const lista = document.createElement('ul');
const main = document.createElement('div');
const body = document.body;
const myArray = ["Chocolate", "Cenoura", "Água"];
const divButtons = document.createElement('div');
const adicionar = document.createElement('button');
const remover = document.createElement('button');
const form = document.createElement('form');
const itemInput = document.createElement('input');
const label = document.createElement('label');
const aviso = document.createElement('p');

// Anexar Elementos
body.append(main);
main.appendChild(lista);
main.append(form);
form.append(label);
form.append(itemInput);
main.append(divButtons);
divButtons.appendChild(adicionar)
divButtons.appendChild(remover);
main.append(aviso);

// Editar elementos
adicionar.innerText = "adicionar";
remover.innerText = "remover";
label.innerText = "Adicionar Item:";
label.setAttribute('id', 'addItem')
itemInput.setAttribute('type', 'text');
itemInput.setAttribute('id', 'addItem');
itemInput.setAttribute('title', 'Digite o item para adicionar');
itemInput.setAttribute('placeholder', 'Item para adicionar')
aviso.innerText = "Primeiro escreva o item pra adicionar";
aviso.style.display = 'none';

// Adicionar classes
main.classList.add('main');
lista.classList.add('list');
form.classList.add('inputs');
divButtons.classList.add('buttons')
aviso.classList.add('aviso');

// Criar Lista
myArray.forEach(item => {
	let li = document.createElement('li');
	li.innerText = item;
	lista.append(li);
});

// Eventos
adicionar.addEventListener('click', e => {
	const listItems = document.querySelectorAll('li');
	const semValor = listItems[0].innerText === "Sem valor";

	if (itemInput.value !== '' && !semValor) {
		let li = document.createElement('li');
		li.innerText = itemInput.value;
		lista.append(li);
		itemInput.value = "";
	} else if (semValor) {
		listItems[0].innerText = itemInput.value;
		itemInput.value = "";
	} else {
		aviso.style.display = 'block';
		itemInput.classList.toggle('inputError');
		setTimeout(() => {
			itemInput.classList.toggle('inputError');
			aviso.style.display = 'none';
		}, 3000);
	}
});

remover.addEventListener('click', e => {
	const li = document.querySelectorAll('li');
	if (li.length === 1) {
		li[0].innerText = 'Sem valor';
	} else {
		li[li.length - 1].remove();
	}
});



