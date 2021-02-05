const body = document.body;
const button = document.querySelector('.container');
const p = document.querySelector('.container p')

button.addEventListener('click', e => {
	switch(p.innerText) {
		case 'OFF':
			button.style.backgroundColor = '#7FFF40';
			p.innerText = 'On';
			break;
		case 'ON':
			button.style.backgroundColor = '#FF5252';
			p.innerText = 'Off';
			break;
	}
});