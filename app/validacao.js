function validaChute(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {
            document.body.innerHTML =
                `
                    <h2>Game Over!!!</h2>
                    <h4>Fale "Jogar mais uma vez" para continuar jogando</h4>
                    `
            document.body.style.backgroundColor = "black";
            

        }
        
        if (chute.toUpperCase() === "JOGAR MAIS UMA VEZ") {
            window.location.reload();
        
        }
        else {
            elementoChute.innerHTML += '<div>Valor inválido</div>'
        }



    }

    if (numeroMaiorOuMenorQuePermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <h4 class="jogar-novamente">Fale "Jogar mais uma vez" para continuar jogando</h4>
            <h4 class="terminar-jogo">Terminar o jogo diga "Game Over"</h4>
        `
        confetti.start();
        setTimeout(function () { confetti.stop(); }, 15000);
        



    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

/*document.body.addEventListener('click', (e) => { //essa função recarrega a pagina clicando no botao jogar mais uma vez
    if (e.target.id == 'jogar-novamente')
        window.location.reload();
})*/







