# Comparadores

Vamos agora focar na parte condicional:

```javascript
if (país === "França") {
     ...
}
```

A parte condicional é a variável `país` seguida dos três sinais de igual (`===`). Três sinais de igual testam se a variável `country` tem o valor correto (`France`) e também o tipo correto (`String`). Você também pode testar condições com sinais de igual duplos, no entanto, uma condicional como `if (x == 5)` retornaria verdadeiro para `var x = 5;` e `var x = "5";`. Dependendo do que o seu programa está fazendo, isso pode fazer uma grande diferença. É altamente recomendável, como prática recomendada, que você sempre compare a igualdade com três sinais de igual (`===` e `!==`) em vez de dois (`==` e `!=`).

Outro teste condicional:

- `x > a`: x é maior que a?
- `x <a`: x é menor que a?
- `x <= a`: x é menor ou igual a a?
- `x >=a`: x é maior ou igual a a?
- `x != a`: x não é a?
- `x`: x existe?

{% exercício %}
Adicione uma condição para alterar o valor de `a` para o número 10 se `x` for maior que 5.
{% inicial %}
var x = 6;
var a = 0;
{% solução %}
var x = 6;
var a = 0;

se (x > 5) {
uma = 10;
}
{% validação %}
afirmar(a === 10);
{% endexercício %}

##Comparação Lógica

Para evitar o incômodo do if-else, comparações lógicas simples podem ser utilizadas.

```js
var topper = marcas > 85 ? "SIM NÃO";
```

No exemplo acima, `?` é um operador lógico. O código diz que se o valor das marcas for maior que 85, ou seja, `marcas > 85` , então `topper = YES` ; caso contrário `topper = NO` . Basicamente, se a condição de comparação for verdadeira, o primeiro argumento é acessado e se a condição de comparação for falsa, o segundo argumento é acessado.