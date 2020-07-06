// Lidando com objetos e vetores

// Desafio com o intuito de fortalecer os conceitos de objeto e vetores

// Construção e impressão de objetos
const usuario = {
    nome: "Lucas",
    empresa: {
        nome: "Rocketseat",
        cor: "Roxo",
        foco: "Programação",
        endereço: {
            rua: "Rua Guilherme Gembala",
            numero: 260
        }
    }
}

console.log(`A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.endereço.rua}, ${usuario.empresa.endereço.numero}`)
