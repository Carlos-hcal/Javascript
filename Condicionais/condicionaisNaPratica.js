//Exercício 1
//Faça um algoritmo declarando as variáveis A, B, C iniciando-as com os respectivos valores 10, 20 e 30, e imprima na tela se a soma de A + B é menor que C.

// let a = 10;
// let b = 20;
// let c = 30;

// let soma = a + b;

// if (soma < c) {
//     alert('A soma é menor do que C!');
// } else (soma > c) {
//     alert('A soma é maior do que C!');
// }

//Exercício 2
//Faça um algoritmo declarando uma variável com um valor numérico qualquer e informe na tela se esse numero é par ou ímpar.

// let num = 5;

// if (num % 2 == 0) {
//     alert("O número é par");
// } else {
//     alert("O número é ímpar");
// }

//Exercício 3
//Declare duas variáveis que armazenam valores boleanos(lógicos) e então determina se ambos são VERDADEIROS ou FALSOS.

// let bool1 = true;
// let bool2 = true

// if (bool1 && bool2 == true) {
//     alert('Ambos são verdadeiros');
// }

//Exercício 4
//Declare três variáveis que armazenam valores numéricos inteiros e diferentes e mostre-os em ordem decrescente.

// let num1 = 7;
// let num2 = 9;
// let num3 = 5;

// if (num1 > num2 && num2 > num3) {
//     console.log('Número 1 sendo maior -> num1, num2, num3')
//     alert(num1 + "->" + num2 + "->" + num3);
// } 
//     else if (num1 < num2 && num2 > num3) {
//         console.log('Número 2 sendo maior -> num2, num1, num3')
//         alert(num2 + "->" + num1 + "->" + num3);
// }
//     else if (num3 > num2 && num2 > num1) {
//         console.log('Número 3 sendo maior -> num3, num2, num1')
//         alert(Num3 + "->" + num2 + "->" + num1)
// }
//     else if (num1 > num3 && num2 > num3) {
//         console.log('Número 1 sendo maior -> num1, num3, num2')
//         alert(Num1 + "->" + num3 + "->" + num2)
// }
//     else if (num2 > num3 && num3 > num1) {
//         console.log('Número 2 sendo maior -> num2, num3, num1')
//         alert(Num2 + "->" + num3 + "->" + num1)
// }
//     else if (num3 > num1 && num1 > num2) {
//         console.log('Número 3 sendo maior -> num3, num1, num2')
//         alert(Num3 + "->" + num1 + "->" + num2)
// }

//Exercício 5
//Escreva um algoritmo que receba dois números. ⁠Alerte em tela qual o maior valor recebido.

let a = 4;
let b = 5;

if (a > b) {
    alert('A é maior que B');
} else if(b > a) {
    alert('B é maior que A');
} else {
    alert('Os numeros são iguais');
}

//Dica: Para alertar você pode utilizar a função alert(), ou se preferir, mostre no console através da função console.log()