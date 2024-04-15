# Else

Há também uma cláusula `else` que será aplicada quando a primeira condição não for verdadeira. Isto é muito poderoso se você quiser reagir a qualquer valor, mas destaque um em particular para tratamento especial:

```javascript
var guarda-chuvaObrigatório;

if (país === "Inglaterra") {
   guarda-chuvaMandatório = verdadeiro;
} outro {
   guarda-chuvaMandatório = falso;
}
```

A cláusula `else` pode ser unida a outro `if`. Vamos refazer o exemplo do artigo anterior:

```javascript
if (país === "Inglaterra") {
   ...
} else if (país === "França") {
   ...
} else if (país === "Alemanha") {
   ...
}
```

{% exercício %}
Preencha o valor de `name` para validar a condição `else`.
{% inicial %}
var nome =

if (nome === "João") {

} else if (nome === "Arão") {
//Válida esta condição
}
{% solução %}
var nome = "Arão";

if (nome === "João") {

} else if (nome === "Arão") {
//Válida esta condição
}
{% validação %}
assert(nome === "Arão");
{% endexercício %}