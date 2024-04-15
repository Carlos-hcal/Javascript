# Do...while Loop

A instrução do...while cria um loop que executa uma instrução especificada até que a condição de teste seja avaliada como falsa. A condição é avaliada após a execução da instrução.
Sintaxe para do... while is

```javascript
fazer {
   // declaração
} enquanto (expressão);
```

Vamos, por exemplo, ver como imprimir números menores que 10 usando o loop `do...while`:

```javascript
var eu = 0;
fazer {
   documento.write(i + " ");
   eu++; //incrementando i em 1
} enquanto (i < 10);
```

> **_Nota_**: `i = i + 1` pode ser escrito `i++`.

{% exercício %}
Usando um loop do...while, imprima números menores que 5.
{% inicial %}
var eu = 0;
{% solução %}
var eu = 0;
fazer {
eu++; //incrementando i em 1
} enquanto (i < 5);
{% endexercício %}