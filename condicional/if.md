# Condição if

A condição mais fácil é uma instrução if e sua sintaxe é `if(condição){ faça isso… }`. A condição deve ser verdadeira para que o código entre chaves seja executado. Você pode, por exemplo, testar uma string e definir o valor de outra string dependendo do seu valor:

```javascript
var país = "França";
var clima;
var comida;
var moeda;

if (país === "Inglaterra") {
   clima = "horrível";
   comida = "recheio";
   moeda = "libra esterlina";
}

if (país === "França") {
   clima = "bom";
   food = "impressionante, mas quase nunca vegetariano";
   moeda = "engraçado, pequeno e colorido";
}

if (país === "Alemanha") {
   clima = "média";
   comida = "a salsicha de sempre";
   moeda = "engraçado, pequeno e colorido";
}

var mensagem =
   "isto é" +
   país +
   ", o tempo está " +
   clima +
   ", a comida é " +
   comida +
   " e o " +
   "moeda é" +
   moeda;
```

**Observação:** As condições também podem ser aninhadas.

{% exercício %}
Preencha o valor de `name` para validar a condição.
{% inicial %}
var nome =

if (nome === "João") {

}
{% solução %}
var nome = "João";

if (nome === "João") {

}
{% validação %}
assert(nome === "João");
{% endexercício %}