# Tipos de variáveis

Os computadores são sofisticados e podem fazer uso de variáveis mais complexas do que apenas números. É aqui que entram os tipos de variáveis. As variáveis vêm em vários tipos e diferentes linguagens suportam diferentes tipos.

Os tipos mais comuns são:

- **Números**

- **Float**: um número, como 1,21323, 4, -33,5, 100004 ou 0,123
- **Inteiro**: um número como 1, 12, -33, 140, mas não 1,233

- **String**: uma linha de texto como "barco", "elefante" ou "caramba, você é alto!"

- **Booleano**: verdadeiro ou falso, mas nada mais

- **Arrays**: uma coleção de valores como: 1,2,3,4,'Estou entediado agora'

- **Objetos**: uma representação de um objeto mais complexo

- **null**: uma variável que contém null não contém nenhum número, string, booleano, array ou objeto válido

- **indefinido**: o valor indefinido é obtido quando se utiliza uma propriedade de objeto que não existe, ou uma variável que foi declarada, mas não possui valor atribuído a ela.

JavaScript é uma linguagem _“de tipo livre”_, o que significa que você não precisa declarar explicitamente que tipo de dados são as variáveis. Você só precisa usar a palavra-chave `var` para indicar que está declarando uma variável, e o intérprete descobrirá qual tipo de dados você está usando a partir do contexto e do uso de aspas.

{% exercício %}
Crie uma variável chamada `a` usando a palavra-chave `var`.
{% solução %}
var a;
{% validação %}
a;
{% endexercício %}