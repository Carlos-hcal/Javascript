//Exercício 1
//Desenvolva uma função que mostre no console a frase "Hello World!".

function greetings() {
    console.log("Hello World")
}

//Exercício 2
//Desenvolva uma função para saber se o(a) aluno(a) possui métricas para virar monitor(a).
//Requisitos:

//100 de Entregas
//100 de Entrevistas Técnicas
//100 de Presença
//Se os requisitos forem atingidos, mostre no console "Possível monitor(a)." Se os requisitos não forem atingidos, mostre no console "Selecionar outro(a) aluno(a)."

function monitor () {
    let entregas = 100
    let entrevistaTecnica = 100
    let presenca = 100

    if (entregas == 100 && entrevistaTecnica == 100 && presenca == 100) {
        console.log("Possivel monitor(a).");
    } else {
        console.log('Selecionar outro(a) aluno');
    }
}

//Exercício 3
//Desenvolva uma função que recebe três variáveis com valores numéricos e identifica qual deles é o maior.

function biggest() {
    let a = 10
    let b = 9
    let c = 8

    //Nesse momento é igual a 8
    let bigger = c

    if (a > bigger) {
        //Nesse momento, bigger é igual a 10
        bigger = a
    }
    if (b > bigger) {
        //Nesse momento, bigger ainda é 10 e vai pular essa execução pois deu falso
        bigger = b
    }
    console.log(bigger)
}

biggest()

//Exercício 4
//Desenvolva uma função para mostrar no console a seguinte frase: "Meu nome é -nome e sobrenome-, e tenho -idade- anos".

//Declare as seguintes variáveis dentro da função:

//nome
//sobrenome
//idade
//Dica: Você pode utilizar template string.

function greetingsMessage() {
    let name = "Carlos"
    let surname = "Cort"
    let age = 19

    let message = `Meu nome é ${name} ${surname} e tenho ${age} anos`
    
    console.log(message)
}

greetingsMessage()