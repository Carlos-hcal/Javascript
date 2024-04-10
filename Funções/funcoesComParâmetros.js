// Introdução
// Nesta atividade você irá praticar declarações de função, utilização de parâmetros e retorno.

// Exercício 1
// Desenvolva uma função com apenas um parâmetro. A função deve retornar o valor de caractere P se o parâmetro for positivo, e N se o parâmetro for zero ou negativo.

function testeNumero(numero) {
    if(numero>0){
        return "P"
    }
    else if(numero<=0){
        return "N"
    }
}

console.log(testeNumero(-10))

// Exercício 2
// Desenvolva uma função que informe a quantidade de dígitos de um determinado número inteiro informado por parâmetro.

function numeroCaracteres (numero) {
    return numero.toString().length;
}

console.log(numeroCaracteres(10));

// Exercício 3
// Desenvolva uma função que some dois números passados por parâmetro. A soma só deve acontecer se o primeiro número passado por parâmetro for maior que o segundo.
// Caso contrário você deverá retornar a seguinte frase: "O primeiro número não é maior que o segundo."

function somaNumeros(numA, numB) {
    if (numA > numB) {
        return numA + numB
    }

    return "O primeiro número não é maior que o segundo.";
}

console.log(somaNumeros(6, 5));

// Exercício 4
// Desenvolva uma função com 2 parâmetros. O primeiro deve se chamar palavra, e o segundo deve se chamar letra. Se a palavra passada no primeiro parâmetro começar com a letra passada como segundo parâmetro, retorne true. Se a palavra passada no primeiro parâmetro não começar com a letra passada no segundo parâmetro, retorne false.

function testePalavra(palavra, letra) {

    if(palavra [0].tolowerCase() == letra) {
        return true;
    }
    return false
}

console.log(testePalavra("Luiz", "L"));

// Exercício 5
// Desenvolva uma função com o parâmetro horaAtendimento para saber se o horário corresponde com o funcionamento do /pergunta. Se o horário de inicio for maior ou igual a 11 e menor ou igual a 23, retorne "O /pergunta está em horário de funcionamento." Caso contrário retorne "O /pergunta não está em horário de funcionamento."

function verificaQuacker(horaAtendimento) {

    if(horaAtendimento => 11 && horaAtendimento < 23) {
        return "O /pergunta está em horario de funcionamento."
    }
    return "O /pergunta não está em horario de funcionamento."
}

console.log(verificaQuacker(11));