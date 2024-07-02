class Boletim {
    constructor (nomeDoAluno, notaDoAluno) {
        this.nome = nomeDoAluno;
        this.nota = notaDoAluno;
    }

    mostraAprovadas() {
        if (this.nota >= 6) {
            console.log(`${this.nome} foi aprovada, com a nota: ${this.nota}`)
        }
    }

    mostraTodas() {
        if (this.nota >= 6) {
            console.log(`${this.nome} foi aprovada, com a nota: ${this.nota}`)
        } else {
            console.log(`${this.nome} foi reprovadoa, com a nota: ${this.nota}`)
        }
    }
}

const alunaMaria = new Boletim('Maria', 7);
const alunaJoana = new Boletim('Joana', 4);
const alunaClara = new Boletim('Clara', 5);
const alunaJennifer = new Boletim('Jennifer', 10);

// console.log(alunaMaria)
// console.log(alunaJoana)
// console.log(alunaClara)
// console.log(alunaJennifer)
alunaMaria.mostraAprovadas();
alunaJoana.mostraAprovadas();
alunaClara.mostraAprovadas();
alunaJennifer.mostraAprovadas();
// alunaMaria.mostraTodas();
// alunaJoana.mostraTodas();
// alunaClara.mostraTodas();
// alunaJennifer.mostraTodas();