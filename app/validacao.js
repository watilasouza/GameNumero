const elementoChute = document.getElementById('chute');
const inputChute = document.getElementById('inputChute');
const submitChute = document.getElementById('submitChute');
const elementoTentativas = document.getElementById('tentativas');

let tentativas = 0;

submitChute.addEventListener('click', () => {
    const chute = parseInt(inputChute.value.trim());  
    if (isNaN(chute)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        inputChute.value = '';  
        return;
    }

    tentativas++;
    if (tentativas === 1) {
        
        elementoChute.innerHTML = '<div>Você chutou:</div>';
    }
    exibeChuteNaTela(chute);
    verificaSeOChutePossuiUmValorValido(chute);
    inputChute.value = ''; 
});

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML += `
    <span class="box">${chute}</span>
`;
}

function verificaSeOChutePossuiUmValorValido(numero) {
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
            <div>Valor inválido: Digite um número entre ${menorValor} e ${maiorValor}</div>
        `;
        return;
    }

    elementoTentativas.innerHTML = `Tentativas: ${tentativas}`;

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2 style="color: green;">Parabéns! Você acertou!</h2>
            <h3 style="color: green;">O número secreto era</h3>
            <div class="box" style="color: green; border-color: green;">${numeroSecreto}</div>
            <h3 style="color: green;">Você acertou em ${tentativas} tentativas!</h3>
            <button>Jogar Novamente</button>
        `;
        acertou();
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `;
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `;
    }
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

function acertou() {
    document.querySelector('button').addEventListener('click', () => {
        window.location.reload();
    });
}
