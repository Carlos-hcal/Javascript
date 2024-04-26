# global footprint

Se você estiver desenvolvendo um módulo, que pode estar sendo executado em uma página da Web, que também executa outros módulos, você deve tomar cuidado com a sobreposição de nomes de variáveis.

Suponha que estejamos desenvolvendo um módulo contador:

```js
var meuContador = {
   número: 0,
   maisMais: função () {
     este.número = este.número + 1;
   },
   éMaiorThanTen: function () {
     retorne este.número > 10;
   },
};
```

> **_Nota:_** esta técnica é frequentemente usada com fechamentos, para tornar o estado interno imutável do lado de fora.

O módulo agora leva apenas um nome de variável — `myCounter`. Se qualquer outro módulo na página usar nomes como `number` ou `isGreaterThanTen` então é perfeitamente seguro, porque não substituiremos os valores uns dos outros;