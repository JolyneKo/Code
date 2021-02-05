// Barra_lateral
const button = document.querySelector("#icone");
const barraLateral = document.querySelector(".barra-lateral");

button.addEventListener('click', e => {
	if (barraLateral.style.visibility === 'visible') {
		barraLateral.style.visibility = 'hidden';
		barraLateral.style.width = '0';
		button.style.transform = 'scaleX(1)';
		button.style.right = '30px';
	} else {
		barraLateral.style.visibility = 'visible';
		barraLateral.style.width = '300px';
		button.style.transform = 'scaleX(-1)';
		button.style.right = '330px';
	}
});

// Botão Ir ao Topo
const buttonTopo = document.querySelector("#botãoHelp");

buttonTopo.addEventListener('mouseover', e => 
	buttonTopo.style.opacity = '100%');

buttonTopo.addEventListener('mouseout', e =>
	buttonTopo.style.opacity ='0');