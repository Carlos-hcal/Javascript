// Introdução
// Esta atividade ajudará você a praticar os conceitos de reutilização de funções em outros contextos e escopos. É recomendado que leia o exercício por completo e depois comece a realizá-lo.

// Exercício 1
// É necessário realizar a soma com uma função e depois reutilizar esta função para fazer outra operação matemática. Siga os tópicos a seguir:
// Declare uma função somaReutilizavel que receberá dois parâmetros a e b.
// Desenvolva a lógica deste algoritmo para obter o resultado da soma dos dois parâmetros.
// Após isso e já fora da função, declare uma variável resultado e atribua um valor 0 a ela.
// Utilizando a função somaReutilizavel, você deve realizar a operação 10 + 10 e multiplicar por 5, armazenando o valor total na variável resultado.
// Mostre o valor da variável resultado através do console.

function somaReutilizavel(a, b) {
    // const sum =  a + b
    // return sum
    return a + b
}

let resultado = 0
resultado = somaReutilizavel(10, 10) * 5

console.log(resultado)

// Exercício 2
// É necessário obter o nome completo de um usuário e depois selecionar apenas as letras iniciais do nome e sobrenome, e para isso é possível desenvolver três funções para a tarefa ser concluída. Siga os tópicos a seguir:
// Declare uma função letraInicial que receberá dois parâmetros nome e sobrenome e retornará a apenas a primeira letra maiúscula de nome e a primeira letra maiúscula de sobrenome.
// Declare uma função nomeCompleto que não receberá parâmetros e retornará uma frase contendo as iniciais do nome e sobrenome. É necessário reutilizar a função letraInicial para retornar a seguinte frase: "As letras inicias do meu nome completo são -letraInicialDoNome- -letraInicialDoSobrenome-"
// Mostre a frase através do console.

function letraInicial(nome, sobrenome) {
    const primeiraLetraNome = nome[0].toUpperCase()
    const primeiraLetraSobrenome = sobrenome[0].toUpperCase()

    return `${primeiraLetraNome} e ${primeiraLetraSobrenome}`
}

function nomeCompleto() {

    const letrasIniciais = letraInicial("Luiz", "paulo")
    return `As letras iniciais do meu nome completo são ${letrasIniciais}`
}

console.log(nomeCompleto());

// Exercício 3
// O objetivo deste exercício é desenvolver três funções para obter um resultado final. É necessário obter o número de letras de um produto e verificar se o total de caracteres é par ou ímpar. Siga os tópicos a seguir:
// Declare uma função par que receberá um parâmetro n, e este parâmetro representa um número. Desenvolva a lógica para retornar true se o número foi par ou false se não for par.
// Declare uma função impar que receberá uma parâmetro n, e este parâmetro representa um número. Desenvolva a lógica para retornar true se o número foi ímpar ou false se não for ímpar.
// Declare uma função letrasProduto que receberá um parâmetro produto, e este produto representará uma string. Você deverá obter o número de caracteres, ou seja, o tamanho da palavra produto e reutilizando as funções par e impar você deverá verificar se o tamanho é par ou ímpar.
// Retorne "O número de letras deste produto é par" se o tamanho da palavra produto for par ou "O número de letras deste produto é ímpar" se o tamanho da palavra produto for ímpar.

function par(n) {
    
    if(n%2 == 0){
        return true    
    }
    return false
}

function impar(n) {
    if(n%2 !== 0) {
        return true
    }
    return false
}

function letrasProduto(produto) {
    const tamanhoProduto = produto.length

    if()
}