/* Exercícios de interpretação de código */

//Exercício 1 - Função que realiza a conversão do valor inserido no console de acordo com o valor da cotação em dólares passada no console. Resultado: 21,46

//Exercício 2 - Função para realização de investimento, abaixo há uma verificação a partir da entrada de "valor/tipo" de investimento realizado, cada case há um tipo de rendimento diferente. Entretanto, se não houver nenhuma entrada de "valor/tipo", aparece um alerta na tela. Resultado: 1º console => 165; 2º console => alerta: Tipo de investimento informado incorreto!

//Exercício 3 - Verifica se o numero é par ou impar e imprime na tela o tamanho do array depois da validação da condição. Para cada numero dentro do array números, se retornar um número par o array1 irá armazenar se não o array2 irá armazenar. 
//1º console => Quantidade total de números 13
//2º console => 7
//3º console => 7

//Exercício 4 - Verificação do maior e do menor número dentro do array números, para cada numero dentro do array número faça o seguinte, percorra o array e se o numero for a menor do array armazene dentro da variavel numero1, e se o for o maior numero do array, armazene na variavel2. 
//1º console => -18
//2º console => 1590


/* Exercícios de Lógica de programção*/
//Exercício 1 - array.forEach(); array.map(); array.filter().

//Exercício 2 
// a => false
// b => false
// c => true
// d => true
// e => true

//Exercício 3 - Não, pois houve um erro na condição em si, havendo assim um loop infinito, já que a pessoa esqueceu do i++ ao final do while

/*
function numerosPares(numero) {
const quantidadeDeNumerosPares = numero
let i = 0
while(i < quantidadeDeNumerosPares) {
  console.log(i*2)
  i++
}
}
*/

//Exercício 4 
/*
function validarForma(a, b, c){
    if ( a == b && b == c){
        console.log("Triângulo Equilátero");      
    }else if(a != b && b != c && c != a){
        console.log("Triângulo Escaleno!"); 
    }else{
        console.log("Triângulo Isósceles");
    }
}

validarForma(4, 5, 6);
*/

//Exercício 5
/*
function programaDoisNumeros(a, b) {
    const subtNumeros = (-a) / (-b);
    if( a === b){
        console.log("Os números são iguais!")
    }else if(a < b ) {
        console.log("O número " ,a, " é menor que " ,b)
    } else {
        console.log("O número " ,a, " é maior que " ,b)
    }

    if (a % b === 0) {
        console.log(a, " é divisível por " ,b)
    } else {
        console.log(a, " não é divisível por ",b)
    }

    console.log("A diferença entres eles é " ,subtNumeros);
}

programaDoisNumeros(11, 2)
*/

/* Exercícios de Funções */
//Exercício 1 


//Exercício 2
/*
function helloWorld() {
alert("Hello Future4");
};

helloWorld();
*/

/* Exercícios de Objetos */
//Exercício 1
//Array [] é uma variavel que utilizamos para guardar uma sequencia de dados, lista, objetos etc..
//Objeto {} é uma coleção de propriedade, podemos usá-lo, por exemplo, para guardar um endereço, nome, cep etc..

/*
//Exercício 2
const criarRetângulo = (lado1, lado2) => {
    return {
      lado1: lado1,
      lado2: lado2,
      perimetro: 2 * (lado1 + lado2),
      area: lado1 * lado2
    };
  };
*/

//Exercício 3 
/*
const filme = {
    titulo: "John Wick - De Volta Ao Jogo",
    ano: 2014,
    diretor: ["Chad Stahelski", "David Leitch"],
    atores: [
      "Keanu Reeves",
      "Michael Nyqvist",
      "Alfie Allen",
      "Adrianne Palicki",
      "Bridget Moynahan",
      "Dean Winters",
      "Ian McShane",
      "John Leguizamo",
      "Willem Dafoe",
    ]
  };

console.log("Venha assistir ao filme " +filme.titulo + ", de " + filme.ano + ", dirigido por " +filme.diretor +"e estrelado por " +filme.atores.join(", "));
*/

//Exercício 4
/*
const infosPessoa1 = {
    nome: "Ada Lovelace",
    idade: "0",
    email: "adalovelace@gmail.com",
    endereco: "R. Estelar"
  };

  const infosPessoa2 = {
    ...infosPessoa1 ,
      nome: "Anônimo"
  }
*/


/* Exercícios de Funções de array*/
//Exercício 1
/*
const pessoas = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]


const idadeSupAVinteAnos = pessoas.filter((pessoa, idx, arr) => {
     return pessoa.idade >= 20;
});

const idadeInfAVinteAnos = pessoas.filter((pessoa, idx, arr) => {
    return pessoa.idade < 20;
});


//Exercício 2
const array = [1, 2, 3, 4, 5, 6];

const arrayMultDois = array.map(num => {
    return num * 2;
});

const arrayMulTres = array.map(num => {
    return `${num * 3}`;
});

const arrayParImpar = array.map(num => {
    if(num % 2 === 0) {
        return `O numero ${num} é par`
    }else {
        return `O numero ${num} é impar`
    }
});

console.log(arrayMultDois)


const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

const pessoasComPermissao = pessoas.filter(pessoa => {
    if (pessoa.altura >= 1.5 &&  pessoa.idade > 14 && pessoa.idade < 60)
      return true;
  });

  const pessoasSemPermissao = pessoas.filter(pessoa => {
    if (pessoa.altura < 1.5 ||  pessoa.idade < 14 || pessoa.idade >= 60)
      return true;
  });

  

 const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

const email = consultas.map((pessoa) => {
    return (
        "Olá, " + (pessoa.genero === "feminino" ? "Sra. " : "Sr. ") +
        pessoa.nome + (pessoa.cancelada ? ". Infelizmente, sua consulta marcada para o dia " + pessoa.dataDaConsulta +" foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la": ". Estamos enviando esta mensagem para lembra-" +
            (pessoa.genero === "feminino" ? "la " : "lo ") + "da sua consulta no dia " +
            pessoa.dataDaConsulta +". Por favor, acuse o recebimento deste e-mail.")
      );
})

*/