# Criação

Criar um número é fácil, pode ser feito como qualquer outro tipo de variável usando a palavra-chave `var`.

Os números podem ser criados a partir de um valor constante:

```javascript
// Este é um flutuador:
var a = 1,2;

//Este é um número inteiro:
var b = 10;
```

Ou do valor de outra variável:

```javascript
var a = 2;
var b = uma;
```

{% exercício %}
Crie uma variável `x` que seja igual a `10` e crie uma variável `y` que seja igual a `a`.
{% inicial %}
var a = 11;
{% solução %}
var a = 11;

var x = 10;
var y = a;
{% validação %}
afirmar(x === 10 && y === a);
{% endexercício %}