# Mutável

A diferença entre objetos e valores primitivos é que **podemos alterar objetos**, enquanto os valores primitivos são imutáveis.

```js
var meuPrimitivo = "primeiro valor";
meuPrimitivo = "outro valor";
// myPrimitive agora aponta para outra string.
var meuObjeto = { chave: "primeiro valor" };
myObject.key = "outro valor";
// myObject aponta para o mesmo objeto.
```