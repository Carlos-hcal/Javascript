# Operadores Avançados

Alguns operadores avançados podem ser usados, como:

- **Módulo (resto da divisão)**: `x = y % 2`
- **Incremento**: Dado a = 5
   - `c = a++`, Resultados: c = 5 e a = 6
   - `c = ++a`, Resultados: c = 6 e a = 6
- **Decremento**: Dado a = 5
   - `c = a--`, Resultados: c = 5 e a = 4
   - `c = --a`, Resultados: c = 4 e a = 4

{% exercício %}
Defina uma variável `c` como o módulo do valor decrementado de `x` em 3.
{% inicial %}
var x = 10;

varc =
{% solução %}
var x = 10;

var c = (--x)% 3;
{% validação %}
afirmar(c === 0);
{% endexercício %}