# Funções de ordem superior

Funções de ordem superior são funções que manipulam outras funções.
Por exemplo, uma função pode receber outras funções como argumentos e/ou produzir uma função como valor de retorno.
Essas técnicas funcionais _extravagantes_ são construções poderosas disponíveis em JavaScript e outras linguagens de alto nível, como python, lisp, etc.

Criaremos agora duas funções simples, `add_2` e `double`, e uma função de ordem superior chamada `map`. `map` aceitará dois argumentos, `func` e `list` (sua declaração começará, portanto, `map(func,list)`), e retornará um array. `func` (o primeiro argumento) será uma função que será aplicada a cada um dos elementos do array `list` (o segundo argumento).

```javascript
//Define duas funções simples
var add_2 = função (x) {
   retornar x + 2;
};
var duplo = função (x) {
   retornar 2*x;
};

// map é uma função legal que aceita 2 argumentos:
//funciona a função a ser chamada
// lista um array de valores para chamar a função
var mapa = função (func, lista) {
   var saída = []; //lista de saída
   for (idx na lista) {
     saída.push(func(lista[idx]));
   }
   saída de retorno;
};

// Usamos map para aplicar uma função a uma lista inteira
// de entradas para "mapeá-las" para uma lista de saídas correspondentes
mapa(adicionar_2, [5, 6, 7]); // => [7, 8, 9]
mapa(duplo, [5, 6, 7]); // => [10, 12, 14]
```

As funções no exemplo acima são simples. Entretanto, quando passados como argumentos para outras funções, eles podem ser compostos de maneiras imprevistas para construir funções mais complexas.

Por exemplo, se notarmos que usamos as invocações `map(add_2, ...)` e `map(double, ...)` com muita frequência em nosso código, poderíamos decidir que queremos criar duas listas de propósito especial funções de processamento que possuem a operação desejada incorporada a elas. Usando composição de funções, poderíamos fazer isso da seguinte maneira:

```javascript
process_add_2 = função (lista) {
   retornar mapa (add_2, lista);
};
process_double = função (lista) {
   return mapa(duplo, lista);
};
process_add_2([5, 6, 7]); // => [7, 8, 9]
process_double([5, 6, 7]); // => [10, 12, 14]
```

Agora vamos criar uma função chamada `buildProcessor` que recebe uma função `func` como entrada
e retorna um processador `func`, ou seja, uma função que aplica `func` a cada entrada na lista.

```javascript
// uma função que gera um processador de lista que executa
var buildProcessor = função (func) {
   var process_func = função (lista) {
     retornar mapa(func, lista);
   };
   retornar process_func;
};
// chamar buildProcessor retorna uma função que é chamada com uma entrada de lista

// usando buildProcessor poderíamos gerar os processadores add_2 e double list da seguinte forma:
process_add_2 = buildProcessor(add_2);
process_double = buildProcessor(duplo);

process_add_2([5, 6, 7]); // => [7, 8, 9]
process_double([5, 6, 7]); // => [10, 12, 14]
```

Vejamos outro exemplo.
Criaremos uma função chamada `buildMultiplier` que recebe um número `x` como entrada e retorna uma função que multiplica seu argumento por `x` :

```javascript
var buildMultiplier = função (x) {
   função de retorno (y) {
     retornar x * y;
   };
};

var duplo = buildMultiplier(2);
var triplo = buildMultiplier(3);

duplo(3); // => 6
triplo(3); // => 9
```

{% exercício %}
Defina uma função chamada `negate` que recebe `add1` como argumento e retorna uma função, que retorna a negação do valor retornado por `add1`. (As coisas ficam um pouco mais complicadas;))
{% inicial %}
var add1 = função (x) {
retornar x + 1;
};

var negar = function(func) {
// PENDÊNCIA
};

// Deve retornar -6
// Porque (5+1) \* -1 = -6
negar(adicionar1)(5);

{% solução %}
var add1 = função (x) {
retornar x + 1;
}

var negar = function(func) {
função de retorno(x) {
retornar -1 \* função(x);
}
}

negar(adicionar1)(5);
{% validação %}
assert(negar(adicionar1)(5) === -6);
{% endexercício %}