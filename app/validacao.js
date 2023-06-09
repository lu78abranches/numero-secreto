function validaChute(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        console.log('Valor inválido');
    }

    if (numeroMaiorOuMenorQuePermitido(numero)) {
        console.log(`Número inválido: O chute precisa estar entre ${menorValor} e ${maiorValor}`)
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

    