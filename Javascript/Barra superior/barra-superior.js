// Selecionando elementos
const buttons = document.querySelectorAll(".navegação button");
const body = document.body;
const div = document.createElement('div');

// Anexando elementos
body.append(div);

// Eventos para cada botão
buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		div.classList.toggle('lista');
		div.style.left = `${button.getBoundingClientRect().left}px`;
	});
})