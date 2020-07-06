// Criar um programa que calcula a média 
// das notas entre os alunos e envia 
// mensagem do cálculo da média.

const aluno01 = 'Lucas'
const notaAluno01 = 9.8

const aluno02 = 'Mayk'
const notaaluno02 = 10

const aluno03 = 'Fulano'
const notaAluno03 = 2

const media = (notaAluno01 + notaaluno02 + notaAluno03)/ 3

// Se a média for maior que 5, parabenizar a turma

if (media > 5){
    console.log(`A média foi de ${media}. Parabéns`)
} else {
    conseole.log(`Sua nota está abaixo da média`)
}

console.log(media)

const alunos = [
    {
        nome:"Mayk",
        nota:9.8
    },
    {
        nome: "Lucas",
        nota:10
    },
    {
        nome: "Fulano",
        nota:2
    }        
]

const nomeDeAlunos = ["Lucas", "Mayk", "Fulano"]

const aluno01 = {
    nome: "Lucas",
    nota: 9.8
}

const aluno02 = {
    nome: "Diego",
    nota: 10
}

const aluno03 = {
    nome: "Fulano",
    nota: 2
}

const media = (aluno01.nota + aluno02.nota + aluno03.nota)/3