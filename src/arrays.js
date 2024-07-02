const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}

// forEach -- apenas retorna os valores
redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})
const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];

// map -- retorna e manipula os valores
const alunos2 = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        curso: 'Frontend'
    }
})

// push -- adiciona item dentro de array
alunos2.push({
    nome: 'Lucio',
    curso: 'Backend'
})
console.log(alunos2);

// find -- encontra item dentor de array
const paula = alunos2.find(function(item){
    return item.nome === 'Paula' // true ou false
})
console.log(paula)

// findIndex -- retorna indica do item dentro do array
const indiceDaPaula = alunos2.findIndex(function(item){
    return item.nome === 'Paula' // true ou false
})
console.log(indiceDaPaula)


// every -- verifica se todos os itens dentro do array satisfazem a nossa condição
const todosAlunosSaoDeFrontend = alunos2.every(function(item) {
    return item.curso === 'Frontend'
})
console.log(todosAlunosSaoDeFrontend)

// some -- verifica se pelo menos um item dentro do array satisfaz a nossa condição
const existeAlgumAlunoDeBackend = alunos2.some(function(item) {
    return item.curso === 'Backend' && item.curso === 'Frontend'
})
console.log(existeAlgumAlunoDeBackend);


// filter -- filtra dados dentro de um array
function filtraAlunosDeBackend(aluno) {
    return aluno.curso === 'Backend';
}
const alunosDeBackend = alunos2.filter(filtraAlunosDeBackend)
console.log(alunosDeBackend)

// reduce -- reduz conteúdo de array em um único valor
const nuns = [10, 20, 30, 10]

const soma = nuns.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador;
}, 0)
console.log(soma);

const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome} `;
    return acumulador;
}, '')

console.log(nomesDosAlunos)