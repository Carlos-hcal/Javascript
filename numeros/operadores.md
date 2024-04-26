# Operadores

Você pode aplicar operações matemáticas a números usando alguns operadores básicos como:

- **Adição**: `c = a + b`
- **Subtração**: `c = a - b`
- **Multiplicação**: `c = a * b`
- **Divisão**: `c = a / b`

Você pode usar parênteses como em matemática para separar e agrupar expressões: `c = (a / b) + d`

{% exercício %}
Crie uma variável `x` igual à soma de `a` e `b` dividida por `c` e finalmente multiplicada por `d`.
{% inicial %}
var a = 2034547;
var b = 1,567;
varc = 6758,768;
var d = 45084;

var x =
{% solução %}
var a = 2034547;
var b = 1,567;
varc = 6758,768;
var d = 45084;

var x=((a+b)/c)_d;
{% validação %}
assert(x === (((a + b) / c) _ d));
{% endexercício %}