// Usuários e tecnologias

// Crie um programa que armazena um array de usuário, cada usuário tem um nome e tecnologia
// Percorra a lista de usuários com uma estrutura de repetição imprimindo na tela as informações.

const usuarios = [
    {nome: "Lucas", tecnologias: ["JavaScript", " Matlab", " CSS"] },
    {nome: "Luiz Fernando", tecnologias: ["Java", " HTML"]},
    {nome: "Tuane", tecnologias: ["HTML", " Node.js", " CSS", " Java"]}
]

function MostraNomes(usuario) {
    for (let i= 0; i < usuario.length; i++){
        console.log(`${usuario[i].nome} trabalha com ${usuario[i].tecnologias}`)
    } 
}

MostraNomes(usuarios)