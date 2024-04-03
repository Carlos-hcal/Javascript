if (condicao) {
    // Código a ser executado se a condição for verdadeira
  } else {
    // Código a ser executado se a condição for falsa
  }

  const dinheiroDoJose1 = 8.50;
const precoDaDuziaDeOvos1 = 10.20;

// Condição é falsa (10.20 <= 8.50)
if (precoDaDuziaDeOvos1 <= dinheiroDoJose1){
  // Este bloco não será executado
  console.log('José conseguirá comprar uma duzia de ovos!!');
} else {
  // Este bloco será executado
  console.log('José terá que voltar até em casa buscar mais dinheiro!!');
}

const dinheiroDoJose2 = 12; // Novo
const precoDaDuziaDeOvos2 = 10.20;

// Condição é verdadeira (10.20 <= 12)
if (precoDaDuziaDeOvos2 <= dinheiroDoJose2){
  // Este bloco será executado
  console.log('José conseguirá comprar uma duzia de ovos!!');
} else {
  // Este bloco não será executado
  console.log('José terá que voltar até em casa buscar mais dinheiro!!');
}

if (condicao1) {
    // Código a ser executado se a condição 1 for verdadeira
} else if (condicao2) {
  // Código a ser executado se a condição 1 for falsa e a condicao 2 for verdadeira
} else {
  // Código a ser executado se tanto condição 1 quanto condicao 2 forem falsas
}

let num = 15;

if (num > 10) {
  console.log("O número é maior que 10");
} else if (num < 10) {
  console.log("O número é menor que 10");
} else {
  console.log("O número é igual a 10");
}