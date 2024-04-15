# Length

Arrays têm uma propriedade chamada length, e é exatamente o que parece: é o comprimento do array.

```javascript
var array = [1, 2, 3];

// Result: l = 3
var l = array.length;
```

{% exercise %}
Defina a variável como o valor numérico do comprimento da array
{% initial %}
var array = [1, 1, 2, 3, 5, 8];
var l = array.length;
var a =
{% solution %}
var array = [1, 1, 2, 3, 5, 8];
var l = array.length;
var a = 6;
{% validation %}
assert (a === 6)
{% endexercise %}