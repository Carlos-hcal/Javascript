# Propriedades

A propriedade do objeto é um par `propertyName`: `propertyValue`, onde **nome da propriedade pode ser apenas uma string**. Se não for uma string, será convertido em uma string. Você pode especificar propriedades **ao criar** um objeto **ou posteriormente**. Pode haver zero ou mais propriedades separadas por vírgulas.

```js
var idioma = {
   nome: "JavaScript",
   isSupportedByBrowsers: verdadeiro,
   criado em: 1995,
   autor: {
     nome: "Brendan",
     sobrenome: "Eich",
   },
   // Sim, objetos podem ser aninhados!
   getAuthorFullName: função () {
     return this.author.firstName + " " + this.author.lastName;
   },
   // Sim, funções também podem ser valores!
};
```

O código a seguir demonstra como **obter** o valor de uma propriedade.

```js
var variável = idioma.nome;
// variável agora contém string "JavaScript".
variável = idioma["nome"];
// As linhas acima fazem a mesma coisa. A diferença é que o segundo permite usar literalmente qualquer string como nome de propriedade, mas é menos legível.
variável = idioma.newProperty;
// a variável agora está indefinida porque ainda não atribuímos esta propriedade.
```

O exemplo a seguir mostra como **adicionar** uma nova propriedade **ou alterar** uma existente.

```js
idioma.newProperty = "novo valor";
// Agora o objeto possui uma nova propriedade. Caso a propriedade já exista, seu valor será substituído.
idioma["newProperty"] = "valor alterado";
// Mais uma vez, você pode acessar as propriedades nos dois sentidos. O primeiro (notação de ponto) é recomendado.
```