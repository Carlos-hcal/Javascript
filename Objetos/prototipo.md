# Protótipo

Cada objeto está vinculado a um objeto protótipo do qual herda propriedades.

Todos os objetos criados a partir de objetos literais (`{}`) são automaticamente vinculados a Object.prototype, que é um objeto que vem como padrão com JavaScript.

Quando um interpretador JavaScript (um módulo em seu navegador) tenta encontrar uma propriedade que você deseja recuperar, como no código a seguir:

```js
var adulto = {idade: 26},
   propriedade recuperada = idade adulta;
//A linha acima
```

Primeiro, o intérprete examina todas as propriedades que o próprio objeto possui. Por exemplo, `adulto` possui apenas uma propriedade própria — `idade`. Mas, além dessa, ele possui mais algumas propriedades, que foram herdadas de Object.prototype.

```js
var stringRepresentation = adult.toString();
// a variável tem valor de '[objeto Objeto]'
```

`toString` é uma propriedade do Object.prototype, que foi herdada. Possui o valor de uma função, que retorna uma representação em string do objeto. Se quiser que ele retorne uma representação mais significativa, você pode substituí-la. Basta adicionar uma nova propriedade ao objeto adulto.

```js
adulto.toString=função(){
   return "Eu sou" + this.age;
};
```

Se você chamar a função `toString` agora, o interpretador encontrará a nova propriedade no próprio objeto e parará.

Assim, o intérprete recupera a primeira propriedade que encontrará no caminho do próprio objeto e posteriormente através de seu protótipo.

Para definir seu próprio objeto como protótipo em vez do Object.prototype padrão, você pode invocar `Object.create` da seguinte maneira:

```js
var filho = Object.create(adulto);
/* Esta forma de criar objetos nos permite substituir facilmente o Object.prototype padrão pelo que desejamos. Neste caso, o protótipo da criança é o objeto adulto. */
idade.criança = 8;
/* Anteriormente, child não tinha sua própria propriedade age, e o intérprete tinha que procurar mais no protótipo do child para encontrá-la.
  Agora, quando definimos a idade da própria criança, o intérprete não irá mais longe.
  Nota: a idade do adulto ainda é 26 anos. */
var stringRepresentation = child.toString();
// O valor é "Tenho 8 anos".
/* Nota: não substituímos a propriedade toString do filho, portanto o método do adulto será invocado. Se adult não tivesse a propriedade toString, então o método toString do Object.prototype seria invocado e obteríamos "[object Object]" em vez de "I'm 8" */
```

O protótipo de `criança` é `adulto`, cujo protótipo é `Object.prototype`. Esta sequência de protótipos é chamada de **cadeia de protótipos**.