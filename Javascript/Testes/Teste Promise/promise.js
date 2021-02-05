const garrafa = {
    nome: 'Garrafa',
    liquido: 'Água',
    quantidadeML: 0,
}

function beber(objeto, ML) {
    let {nome, liquido, quantidadeML} = objeto;
    
    return new Promise((resolve, reject) => {
       if (quantidadeML > 0) {
            objeto.quantidadeML -= ML;
            resolve(`Bebendo ${ML}ML de ${liquido}`);
       } else if (ML === quantidadeML) {
            resolve(`${nome} bebida com sucesso!`);
       } else {
            reject(`${nome} vazio(a)!`);
       }
    });
}

async function doPromise(objeto) {
    try {
        const resultado = await beber(objeto, 1000);
        console.log(resultado);
    } catch (err) {
        console.log(err);
    }
}

doPromise(garrafa);
