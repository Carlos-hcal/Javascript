//Exercício 1
//Crie um programa que concatene dois nomes e retorne uma frase de saudação.
//Entrada: nome1 = "João", nome2 = "Silva" Saída: "Olá João Silva!"

let nome1 = "João"
let sobrenome1 = "Silva"

console.log("Olá" + " " + nome1 + " " + sobrenome1 + "!")
console.log(`Olá ${nome1} ${sobrenome1}!`)

//Exercício 2
//Crie um programa que adicione uma string ao final de outra string e retorne a string resultante.
//Entrada: string1 = "hello", string2 = "world" Saída: "helloworld"

let string1 = "Hello"
let string2 = "world"

console.log(string1 + string2)

//Exercício 3
//Crie um programa que receba uma string em formato de número decimal e retorne o número inteiro equivalente.
//Entrada: "12.5" Saída: 12

let decimal = "12.5"
console.log(parseInt(decimal))

//Exercício 4
//Crie um programa que converta uma string em formato de número inteiro para um número inteiro.
//Entrada: "12" Saída: 12

let inteiro = "12"
console.log(parseInt (inteiro))

//Exercício 5
//Crie um programa que converta duas strings em formato de número inteiro para um número inteiro, faça uma soma desses números e apresente o resultado
//Entrada 1: "12" Entrada 2: "3" Saída: 15

let entrada1 = "12"
let entrada2 = "3"

let entrada1Convertida = parseInt (entrada1)
let entrada2Convertida = parseInt (entrada2)

let soma = entrada1Convertida + entrada2Convertida

console.log(entrada1Convertida + entrada2Convertida)
console.log(soma)