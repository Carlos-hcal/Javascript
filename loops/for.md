# For Loop

A forma mais fácil de loop é a instrução for. Este possui uma sintaxe semelhante a uma instrução if, mas com mais opções:

```javascript
for (condição; condição final; alteração) {
     // faça isso, faça agora
}
```

Vamos, por exemplo, ver como executar o mesmo código dez vezes usando um loop `for`:

```javascript
para (var i = 0; i < 10; i = i + 1) {
   //faça esse código dez vezes
}
```

> **_Nota_**: `i = i + 1` pode ser escrito `i++`.

{% exercício %}
Usando um loop for, crie uma variável chamada `message` que seja igual à concatenação de inteiros (0, 1, 2, ...) de 0 a 99.
{% inicial %}
var mensagem = "";
{% solução %}
var mensagem = "";

for(var i = 0; i < 100; i++){
mensagem = mensagem + i;
}
{% validação %}
var mensagem2 = ""

for(var i = 0; i < 100; i++){
mensagem2 = mensagem2 + i;
}
assert(mensagem === mensagem2);
{% endexercício %}