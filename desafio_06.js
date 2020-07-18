// Busca por tecnologias

// Baseado no desafio 05, utilize a mesma lista usuarios construída.
// Crie uma função que recebe os dados de um objeto de usuários e retorna SE
// o usuário trabalha com CSS ou não.

const usuarios = [
    {nome: "Lucas", tecnologias: ["JavaScript", "Matlab", "CSS"]},
    {nome: "Luiz Fernando", tecnologias: ["Java", "HTML"]},
    {nome: "Tuane", tecnologias: ["HTML", "Node.js", "CSS", "Java"]}
]


function TesteUnico(usuario) {
    for (let i = 0; i < usuario.length; i++){
        for (let j = 0; j < usuario.length; j++){
            if (usuario[i].tecnologias[j] == "CSS"){
                console.log(`O usuário ${usuario[i].nome} trabalha com CSS`)
            }else{
                console.log(`O usuário ${usuario[i].nome} não trabalha com CSS`)
            }
        }     
    } 
}

TesteUnico(usuarios)