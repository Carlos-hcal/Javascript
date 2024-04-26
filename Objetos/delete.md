# Delete

`delete` pode ser usado para **remover uma propriedade** de um objeto. Isso removerá uma propriedade do
objeto se tiver um. Não irá mais longe na cadeia de protótipos.
A remoção de uma propriedade de um objeto pode permitir que uma propriedade da cadeia de protótipos brilhe:

```js
var adulto = {idade: 26},
   filho = Object.create(adulto);
idade.criança = 8;

excluir criança.idade;
/* Remove a propriedade age do child, revelando a idade do protótipo, pois assim ela não será substituída. */
var protótipoIdade = criança.idade;
// 26, porque child não possui propriedade de idade própria.
```