const player = document.querySelector('.player');
const body = document.body;

var topo = 43;
var esq = 47;

body.addEventListener('keydown', e => {
    if (topo === 0) {
        return ++topo;
    } else if (esq === 0) {
        return ++esq;
    } else if (topo > 87) {
        return --topo;
    } else if (esq > 92) {
        return --esq;
    }

    switch(e.key) {
        case "ArrowDown":
            player.style.top = `${topo++}vh`;
            break;
        case "ArrowUp":
            player.style.top = `${topo--}vh`;
            break;
        case "ArrowLeft":
            player.style.left = `${esq--}vw`;
            break;
        case "ArrowRight":
            player.style.left = `${esq++}vw`;
            break;
        default:
            return;
    }
});
