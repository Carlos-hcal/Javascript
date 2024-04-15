# While Loop

While Loops executam repetidamente um bloco de código, desde que uma condição especificada seja verdadeira.

```javascript
enquanto (condição) {
   //faça isso desde que a condição seja verdadeira
}
```

Por exemplo, o loop neste exemplo executará repetidamente seu bloco de código enquanto a variável i for menor que 5:

```javascript
var eu = 0,
   x = "";
enquanto (eu < 5) {
   x = x + "O número é" + i;
   eu++;
}
```

**Nota**: Tenha cuidado para evitar loop infinito se a condição for sempre verdadeira!

{% exercício %}
Usando um loop while, crie uma variável chamada `message` que seja igual à concatenação de inteiros (0, 1, 2, ...) desde que seu comprimento (`message.length`) seja menor que 100.
{% inicial %}
var mensagem = "";
{% solução %}
var mensagem = "";
var eu = 0;

while (message.length <100) {
mensagem = mensagem + i;
eu = eu + 1;
}
{% validação %}
var mensagem2 = "";
var i2 = 0;

enquanto (message2.length <100) {
mensagem2 = mensagem2 + i2;
i2 = i2 + 1;
}
assert(mensagem === mensagem2);
{% endexercício %}