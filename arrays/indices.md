# Indices

Então você tem sua matriz de elementos de dados, mas e se quiser acessar um elemento específico? É aí que entram os índices. Um **índice** refere-se a um ponto no array. os índices progridem logicamente um por um, mas deve-se notar que o primeiro índice em uma matriz é 0, como acontece na maioria das linguagens. Colchetes [] são usados para indicar que você está se referindo a um índice de um array.

```javascript
// Este é um array de strings
var frutas = ["maçã", "banana", "abacaxi", "morango"];

// Definimos a variável banana com o valor do segundo elemento de
// a matriz de frutas. Lembre-se de que os índices começam em 0, então 1 é o
// segundo elemento. Resultado: banana = "banana"
var banana = frutas[1];
```

{% exercício %}
Defina as variáveis usando os índices do array
{% inicial %}
var carros = ["Mazda", "Honda", "Chevy", "Ford"]
var honda =
var ford =
var chevy =
varmazda =
{% solução %}
var carros = ["Mazda", "Honda", "Chevy", "Ford"]
var honda = carros[1];
var ford = carros[3];
var chevy = carros[2];
var mazda = carros[0];
{% validação %}
assert(honda === "Honda");
assert(ford === "Ford");
assert(chevy === "Chevy");
assert(Mazda === "Mazda");
{% endexercício %}
