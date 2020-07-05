// Cálculo de IMC

// Se o IMC for maior ou igual a 30: Pessoa está acima do peso;
// Se o IMC form menor que 29.9? Pessoa não está acima do peso.

const nome = 'Lucas'
const peso = 60
const altura = 1.65

const IMC = peso/(altura*altura)

if (IMC >= 30){
    console.log(`O seu IMC é ${IMC}, portanto você está acima do peso.`)
}   else{
    console.log(`O seu IMC é de ${IMC}, logo você não está acima do peso.`)
}