# Variáveis

O primeiro passo para realmente compreender a programação é relembrar a álgebra. Se você se lembra da escola, a álgebra começa escrevendo termos como os seguintes.

```
3 + 5 = 8
```

Você começa a realizar cálculos quando introduz uma incógnita, por exemplo x abaixo:

```
3 + x = 8
```

Mudar as pessoas ao seu redor pode determinar x:

```
x = 8 - 3
-> x = 5
```

Ao introduzir mais de um, você torna seus termos mais flexíveis - você está usando variáveis:

```
x + y = 8
```

Você pode alterar os valores de xey e a fórmula ainda pode ser verdadeira:

```
x = 4
y = 4
```

ou

```
x = 3
y = 5
```

O mesmo se aplica às linguagens de programação. Na programação, variáveis são contêineres para valores que mudam. As variáveis ​​podem conter todos os tipos de valores e também os resultados de cálculos. As variáveis têm um nome e um valor separados por um sinal de igual (=). Os nomes das variáveis podem ser qualquer letra ou palavra, mas lembre-se de que existem restrições de idioma para idioma sobre o que você pode usar, pois algumas palavras são reservadas para outras funcionalidades.

Vamos verificar como funciona em Javascript. O código a seguir define duas variáveis, calcula o resultado da adição das duas e define esse resultado como o valor de uma terceira variável.

```js
var x = 5;
var y = 6;
var resultado = x + y;
```