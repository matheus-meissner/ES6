// map
let meuMap = new Map();
meuMap.set("nome", "Matheus");
meuMap.set("stack", "HTML", "CSS", "JS");
console.log(meuMap);

// get -- recupera valor de uma detrminada chave dentro de um Map
const nome = meuMap.get("nome");
console.log(nome);

// size -- retorna o tamanho do map
console.log(meuMap.size);

// has -- verifica se o map tem a chave solicitada (bool)
console.log(meuMap.has('nome'));

// keys -- recupera a chave selecionada
for (let chave of meuMap.keys()) {
    console.log(chave);
}

// values -- recupera valor da chave selecionada
for (let valor of meuMap.values()) {
    console.log(valor);
}

// entries -- recupera valor da chave selecionada
for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

// delete -- deleta um valor dentro do map
meuMap.delete("stack");
console.log(meuMap);

// clear -- limpa o conteúdo do map
meuMap.clear()
console.log(meuMap.size);

// set
const cpfs = new Set();

cpfs.add('43667250029')
cpfs.add('27344700042')
cpfs.add('99813550031')

console.log(cpfs)

console.log(cpfs.keys())
console.log(cpfs.values())

// forEach -- pra cada item faz o que é solicitado (serve para map tbm)
cpfs.forEach((valor) => {
    console.log(valor);
})

const array = ['Gian Souza', 'Jose Paulo', 'Maria Isabel', 'Luana', 'Luana', 'Gian Souza']

const arrayComoSet = new Set([...array])
const arraySemItensDuplicados = [...arrayComoSet]

console.log(arrayComoSet);
console.log(arraySemItensDuplicados);