/* ===========================================================
OPERADORES DE COMPARAÇÃO

    >       Maior
    <       Menor
    >=      Maior igual a
    <=      Menor igual a 
    ==      Igual a
    ===     Iqual e do mesmo tipo
    !=      Diferente de 
    !==     Diferente, inclusive do tipo

==============================================================*/

// DESAFIO 1
const idade = 16
// verificar se a pessoa é maior igual a 18 anos
// se sim, deixar entrar, se não , bloquear a entrada
if (idade >= 18){
    console.log('Deixar entrar')
}   else{
    console.log('Bloquear entrada')
}

// se a pessoa tiver 17 anos
// avisar para voltar quando fizer 18 anos
if (idade === 17){
    console.log('VOlte quando tiver 18 anos.')
}

/* ====================================================
    OPERADORES LÓGICOS

    && "E" As duas condições devem ser verdadeiras
        para que a condição final seja verdadeira.
    || "OU" Uma das condições deve ser verdadeira
        para que a condição final seja verdadeira.
    ! "Não" Nega uma condição

=====================================================*/

// DESAFIO 1
//const idade = 16
// verificar se a pessoa é maior igual a 18 anos
// se sim, deixar entrar, se não , bloquear a entrada
if (!(idade >= 18) || idade == 17){
    console.log('Bloquear a entrada')
}   else{
    console.log('Deixar entrar')
}

/* ====================================================
    OPERADORES DE ARITMÉTICOS

    * Multiplicação
    / divisão
    % Resto da divisão 
    + Adição
    - Subtração

=====================================================*/