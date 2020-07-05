// Cálculo de aposentadoria

// Tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos
// Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem 
// precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 
// 85 anos na soma

const nome = 'Lucas'
const sexo = 'F'
const idade = 60
const contribuicao = 29
const soma = idade + contribuicao

if (sexo != 'F'){
    if(contribuicao >= 35){
        if(soma >= 95){
            console.log(`O seu tempo de contribuição é de ${soma}, portanto você pode se aposentar!!`)
        }else{
            console.log(`O Seu tempo de constribuição foi de ${soma} menor que 95 anos, então você ainda não pode se aposentar!!`)
        }
        
    } else{
        console.log('Você tem menos de 35 anos de contribuição, logo não pode se aposentar')
    }
}   else{
    if(contribuicao >= 30){
        if(soma >= 85){
            console.log(`O seu tempo de contribuição é de ${soma}, então você pode se aposentar!!`)
        }else{
            console.log(`O seu tempo de constribuição é de ${soma} menor que 85 anos, então você ainda não pode se aposentar.`)
        }
    } else{
        console.log('Você tem menos de 30 anos de contribuição, logo não pode se aposentar.')
    }
}

