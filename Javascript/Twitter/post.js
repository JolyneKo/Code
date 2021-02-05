const fav = document.getElementById('fav');
const like = document.getElementById('like');
const compartilhar = document.getElementById('compartilhar');
const body = document.body;

let numsFavs = 467;
let numsLikes = 300;
let numsComp = 52;

const divInfo = document.createElement('div')
const textInfo = document.createElement('p');

body.append(divInfo);
divInfo.appendChild(textInfo);

fav.addEventListener('click', e => {
	e.preventDefault();
	numsFavs++;
	textInfo.innerText = `Fav: ${numsFavs}`;
	divInfo.classList.toggle('infos');
	setTimeout(() => {
		textInfo.innerText = '';
		divInfo.classList.toggle('infos');
	}, 2000)
});

like.addEventListener('click', e => {
	e.preventDefault();
	numsLikes++;
	textInfo.innerText = `Likes: ${numsLikes}`;
	divInfo.classList.toggle('infos');
	setTimeout(() => {
		textInfo.innerText = '';
		divInfo.classList.toggle('infos');
	}, 2000);
});

compartilhar.addEventListener('click', e => {
	e.preventDefault();
	numsComp++;
	textInfo.innerText = `reps: ${numsLikes}`;
	divInfo.classList.toggle('infos');
	setTimeout(() => {
		textInfo.innerText = '';
		divInfo.classList.toggle('infos');
	}, 2000);
});