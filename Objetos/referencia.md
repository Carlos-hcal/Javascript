# Referência

Objetos **nunca são copiados**. Eles são repassados por referência.

```js
// Imagine que eu comi uma pizza
var minhaPizza = {fatias: 5};
// E eu compartilhei com você
var suaPizza = minhaPizza;
// eu como outra fatia
minhaPizza.fatias = minhaPizza.fatias - 1;
var numberOfSlicesLeft = suaPizza.slices;
// Agora temos 4 fatias porque myPizza e yourPizza
//referência ao mesmo objeto pizza.
var a = {},
   b = {},
   c={};
// a, b e c referem-se cada um a a
// objeto vazio diferente
uma = b = c = {};
// a, b e c referem-se a
//o mesmo objeto vazio
```