# Loops

Loops são condições repetitivas em que uma variável do loop muda. Os loops são úteis se você quiser executar o mesmo código repetidamente, cada vez com um valor diferente.

Em vez de escrever:

```javascript
fazendoCoisa(carros[0]);
fazendoCoisa(carros[1]);
fazendoCoisa(carros[2]);
fazendoCoisa(carros[3]);
fazendoCoisa(carros[4]);
```

Você pode escrever:

```javascript
for (var i = 0; i < carros.comprimento; i++) {
   fazendoCoisa(carros[i]);
}
```