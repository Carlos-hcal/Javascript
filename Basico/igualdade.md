# Igualdade

Os programadores frequentemente precisam determinar a igualdade das variáveis em relação a outras variáveis. Isso é feito usando um operador de igualdade.

O operador de igualdade mais básico é o operador `==`. Este operador faz tudo o que pode para determinar se duas variáveis são iguais, mesmo que não sejam do mesmo tipo.

Por exemplo, suponha:

```javascript
var foo = 42;
var bar = 42;
var baz = "42";
var qux = "vida";
```

`foo == bar` será avaliado como `true` e `baz == qux` será avaliado como `false`, como seria de esperar. No entanto, `foo == baz` _também_ será avaliado como `true` apesar de `foo` e `baz` serem tipos diferentes. Nos bastidores, o operador de igualdade `==` tenta forçar seus operandos para o mesmo tipo antes de determinar sua igualdade. Isso contrasta com o operador de igualdade `===`.

O operador de igualdade `===` determina que duas variáveis ​​são iguais se forem do mesmo tipo _e_ tiverem o mesmo valor. Com as mesmas suposições de antes, isso significa que `foo === bar` ainda será avaliado como `true`, mas `foo === baz` agora será avaliado como `false`. `baz === qux` ainda será avaliado como `false`.