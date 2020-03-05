
let altura = 1.80;
console.log(altura);
let ano = 1984;
console.log(ano);
let nomeCompleto = 'Renato Braga Santini';
console.log(nomeCompleto);
let resultadoDaDivisao = 100/4;
console.log (resultadoDaDivisao);

let elementoA = 2;
let elementoB = 3;
let resultadoSoma = elementoA + elementoB;

function soma(elementoA, elementoB) {
      
      let resultadoSoma = elementoA + elementoB;
    
      return resultadoSoma;
    }
    
console.log(resultadoSoma);





let pessoa = {
    primeiroNome : 'Renato',
    ultimoNome : 'Santini',
    naturalidade : 'Brasil',
    idade : 35
}

let idade;
idade = pessoa.idade;
let primeiroNome;
primeiroNome = pessoa.primeiroNome;
console.log(primeiroNome);
console.log(idade);
console.log(pessoa.naturalidade);

var curso = {
    nome: "Curso Introdutório da Trybe!",
    modulos: {
      internet: {
        descricao: "Como a internet funciona",
        semana: 1,
        tipo: "teórica",
        estado: "completo"
      },
      shell: {
        descricao: "Shell Script",
        semana: 1,
        tipo: ["teórica", "prática"],
        estado: "completo"
      },
      html: {
        descricao: "HTML + CSS",
        semana: [2, 3],
        tipo: "prática",
        estado: "em andamento"
      }
    },
    quantidade_alunos: 100,
    arquivado: false
  };
  var nomeDoCurso;
  nomeDoCurso = curso.nome;
  
  var descricaoInternet;
  descricaoInternet = curso.modulos.internet.descricao;
  
  var estadoDoHtml;
  estadoDoHtml = curso.modulos.html.estado;

  console.log(nomeDoCurso);
  console.log(descricaoInternet);
  console.log(estadoDoHtml);







 
   



let primeiraString;
let segundaString;
primeiraString = "abacaxi";
segundaString = "uva";

let newString;

if (primeiraString.length > segundaString.length) {
    newString = primeiraString + segundaString;
}
else if (primeiraString.length < segundaString.length) {
    newString = segundaString + primeiraString;
}
else {
    newString = primeiraString + segundaString;
}

console.log(primeiraString);
console.log(segundaString);
console.log(primeiraString.length);
console.log(segundaString.length);
console.log(newString);

let frase;
frase = "Esta é uma frase de exemplo"

let letras;
let lengthFraseSeparada;
let fraseSeparada = frase.split(" ");
let primeira;
let ultima;

lengthFraseSeparada = fraseSeparada.length - 1
primeira = fraseSeparada [0];
ultima = fraseSeparada [lengthFraseSeparada]
letras = primeira[primeira.length - 1] + " " + ultima [0];


console.log(letras);
console.log(frase.length);
console.log(frase);
console.log(fraseSeparada);
console.log(primeira);
console.log(ultima);







