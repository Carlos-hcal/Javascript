const nome = "João da Silva";

// usando toUpperCase
const nomeEmMaiusculas = nome.toUpperCase();
console.log(nomeEmMaiusculas); // Output: "JOÃO DA SILVA"

// usando toLowerCase
const nomeEmMinusculas = nome.toLowerCase();
console.log(nomeEmMinusculas); // Output: "joão da silva"

//Concatenando

const primeiraString = "Olá";
const segundaString = "mundo";

// Concatenando com o operador +
const terceiraString = primeiraString + " " + segundaString;
console.log(terceiraString); // Output: "Olá mundo"

// Concatenando com o método concat
const quartaString = primeiraString.concat(" ", segundaString);
console.log(quartaString); // Output: "Olá mundo"

//Tamplate Strings

const nome2 = "João";
const sobrenome = "Silva";
const idade = 30;
const cidade = "São Paulo";

// Usando template string com várias variáveis
const mensagem = `Olá, meu nome é ${nome} ${sobrenome} e tenho ${idade} anos. Moro em ${cidade}.`;
console.log(mensagem);
// Output: "Olá, meu nome é João Silva e tenho 30 anos. Moro em São Paulo."

//Convertendo Strings para números

const numero1 = "10";
const numero2 = "20.5";

console.log(typeof numero1); // string
console.log(typeof numero2); // string

// Usando parseInt
const resultado1 = parseInt(numero1);
console.log(resultado1); // Output: 10
console.log(typeof resultado1); // number

// Usando parseFloat
const resultado2 = parseFloat(numero2);
console.log(resultado2); // Output: 20.5
console.log(typeof resultado2); // number

