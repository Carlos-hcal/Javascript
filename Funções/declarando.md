# Declarando Funções

Funções, assim como variáveis, devem ser declaradas. Vamos declarar uma função `double` que aceita um **argumento** chamado `x` e **retorna** o dobro de x :

```javascript
função duplo(x) {
   retornar 2*x;
}
```

> _Nota:_ a função acima **pode** ser referenciada antes de ser definida.

Funções também são valores em JavaScript; eles podem ser armazenados em variáveis (assim como números, strings, etc...) e dados para outras funções como argumentos:

```javascript
var duplo = função (x) {
   retornar 2*x;
};
```

> _Nota:_ a função acima **não** pode ser referenciada antes de ser definida, assim como qualquer outra variável.

{% exercício %}
Declare uma função chamada `triple` que recebe um argumento e retorna seu triplo.
{% solução %}
var triplo = função(x) {
retornar x\*3;
}
{% validação %}
afirmar(triplo);
assert(triplo(4) === 12);
assert(triplo(10) === 30);
{% endexercício %}