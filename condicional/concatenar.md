# Concatenar condições

Além disso, você pode concatenar condições diferentes com declarações "ou" ou "e", para testar se uma das declarações é verdadeira ou se ambas são verdadeiras, respectivamente.

Em JavaScript, “ou” é escrito como `||` e “e” é escrito como `&&`.

Digamos que você queira testar se o valor de x está entre 10 e 20 – você poderia fazer isso com uma condição declarando:

```javascript
se (x > 10 && x < 20) {
     ...
}
```

Se quiser ter certeza de que o país é “Inglaterra” ou “Alemanha”, use:

```javascript
if (país === "Inglaterra" || país === "Alemanha") {
     ...
}
```

**Nota**: Assim como as operações com números, as condições podem ser agrupadas usando parênteses, ex: `if ( (nome === "John" || nome === "Jennifer") && país === "França" )`.

{% exercício %}
Preencha as 2 condições para que `primaryCategory` seja igual a `"E/J"` somente se o nome for igual a `"John"` e o país for `"Inglaterra"`, e para que `secondaryCategory` seja igual a `"E|J"` somente se o nome for igual a `"John"` ou o país for `"Inglaterra"`
{% inicial %}
var nome = "João";
var país = "Inglaterra";
var categoria primária, categoria secundária;

if ( /_ Preencha aqui _/ ) {
categoria primária = "E/J";
}
if ( /_ Preencha aqui _/ ) {
categoria secundária = "E|J";
}
{% solução %}
var nome = "João";
var país = "Inglaterra";
var categoria primária, categoria secundária;

if (nome === "John" && país === "Inglaterra") {
categoria primária = "E/J";
}
if (nome === "John" || país === "Inglaterra") {
categoria secundária = "E|J";
}
{% validação %}
assert(categoria primária === "E/J" && categoria secundária === "E|J");
{% endexercício %}