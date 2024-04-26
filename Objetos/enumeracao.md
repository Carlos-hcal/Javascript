# Enumeração

A instrução `for in` pode percorrer todos os nomes de propriedades em um objeto. A enumeração incluirá funções e propriedades do protótipo.

```js
var fruta = {
     maçã: 2,
     laranja: 5,
     pêra: 1,
   },
   frase = "Eu tenho",
   quantidade;
para (tipo de fruta) {
   quantidade = fruta[tipo];
   frase += quantidade + " " + tipo + (quantidade === 1 ? "" : "s") + ", ";
}
// A linha a seguir remove o vírgula final.
sentença = sentença.substr(0, sentença.comprimento - 2) + ".";
// Tenho 2 maçãs, 5 laranjas, 1 pêra.
```