"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}

// forEach -- apenas retorna os valores
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na rede social: ").concat(nomeDaRedeSocial));
});
var alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];

// map -- retorna e manipula os valores
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'Frontend'
  };
});

// push -- adiciona item dentro de array
alunos2.push({
  nome: 'Lucio',
  curso: 'Backend'
});
console.log(alunos2);

// find -- encontra item dentor de array
var paula = alunos2.find(function (item) {
  return item.nome === 'Paula'; // true ou false
});
console.log(paula);

// findIndex -- retorna indica do item dentro do array
var indiceDaPaula = alunos2.findIndex(function (item) {
  return item.nome === 'Paula'; // true ou false
});
console.log(indiceDaPaula);

// every -- verifica se todos os itens dentro do array satisfazem a nossa condição
var todosAlunosSaoDeFrontend = alunos2.every(function (item) {
  return item.curso === 'Frontend';
});
console.log(todosAlunosSaoDeFrontend);

// some -- verifica se pelo menos um item dentro do array satisfaz a nossa condição
var existeAlgumAlunoDeBackend = alunos2.some(function (item) {
  return item.curso === 'Backend' && item.curso === 'Frontend';
});
console.log(existeAlgumAlunoDeBackend);

// filter -- filtra dados dentro de um array
function filtraAlunosDeBackend(aluno) {
  return aluno.curso === 'Backend';
}
var alunosDeBackend = alunos2.filter(filtraAlunosDeBackend);
console.log(alunosDeBackend);

// reduce -- reduz conteúdo de array em um único valor
var nuns = [10, 20, 30, 10];
var soma = nuns.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);
var nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, '');
console.log(nomesDosAlunos);