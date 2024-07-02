// rest
function somar() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
}

console.log(somar(10, 20, 30))

function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10, 20, 30))


const somarComRest2 = (...numeros) => {
    const soma2 = numeros.reduce((total2, numeroAtual2) => {
        total2 += numeroAtual2;
        return total2;
    }, 0)
    return soma2
}

console.log(somarComRest2(10, 20, 30));

//spread
const numeros = [1, 2, 3, 4]
console.log(...numeros)

const timesDeSaoPaulo = ['Santos', 'Palmeiras', 'Bragantino', 'São Paulo'];
const timesDoRio = ['Vasco', 'Botafogo', 'Flamengo', 'Fluminense'];

// const timesDeFutebol = timesDeSaoPaulo.concat(timesDoRio);
const timesDeFutebol = [...timesDeSaoPaulo, ...timesDoRio];

// timesDeSaoPaulo.concat(timesDoRio);
console.log(timesDeFutebol);

const carroDaJulia = {
    modelo: 'Gol',
    marca: 'WolksVagen',
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}

console.log(carroDaAna)

// desestruturação
// const motorDoCarroDaAna = carroDaAna.motor;
const { motor: motorDoCarroDaAna } = carroDaAna;
const { motor: motorDoCarroDaJulia } = carroDaJulia;

console.log(motorDoCarroDaAna);
console.log(motorDoCarroDaJulia);

const [item1, item2, item3, ...outrosTimes] = timesDeFutebol

console.log(item1)
console.log(item2)
console.log(item3)
console.log(outrosTimes)
