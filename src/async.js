function funcaoMuitoPesada() {
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++) {
        execucoes++;
    }
    return execucoes;
}

// promise -- executa o código de forma paralela
const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;
        for (let i = 0; i < 1000000000; i++) {
            execucoess++;
        }
        resolve (execucoes);
    } catch (e) {
        reject ('Deu erro na interação dos números')
    }
})

console.log("inicio");
// console.log(funcaoMuitoPesada());
funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
console.log("fim");

// async await -- pede para o js esperar a funcao escolhida ser executada para continuar (retorna ao sincronismo inicial padrao, na ordem que quiser)
async function execucaoPrincipal() {
    console.log("inicio");

    try {
        const resultado = await funcaoMuitoPesadaPromise;
        console.log(resultado)
    } catch(e) {
        console.log(e)
    }

    console.log("fim");
}

execucaoPrincipal();

//

const promiseComParametros = (login, senha) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Logado com o usuário: ${login}`)
    }, 3000)

})

async function execucaoPrincipal() {
    console.log("inicio");

    promiseComParametros('matheus@gmail.com', 123456).then(resultado => {
        console.log(resultado);
    })
    try {
        const resultado = await funcaoMuitoPesadaPromise;
        console.log(resultado)
    } catch(e) {
        console.log(e)
    }

    console.log("fim");
}