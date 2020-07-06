// Vetores e objetos

// Código desenvolvido para armazenar dados de um programador como nome, idade e tecnologias
// Treinamento para a utilização de arrys

const usuario = {
    nome: "Lucas",
    idade: 21
}

const tecnologias = {
    propriedade: [
        {nome: "Matlab", especialidade: "Desktop"},
        {nome: "Java", especialidade: "Desktop"},
        {nome: "JavaScript", especialidade: "Web/Mobile"}
    ]
}

console.log(`O usuaário ${usuario.nome} tem ${usuario.idade} anos e usa a tecnologia ${tecnologias.propriedade[0].nome} com especialidade em ${tecnologias.propriedade[0].especialidade}.`)