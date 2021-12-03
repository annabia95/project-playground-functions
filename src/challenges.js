// Desafio 1
function compareTrue(p1, p2) {
  if (p1 === true && p2 === true) {
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
// Desafio 3 - Usei como referência o blog da Trybe para usar o comando split. link:https://blog.betrybe.com/javascript/javascript-split/

function splitSentence(frase) {
  let separaString = frase.split(' ');
  return separaString;
}

// Desafio 4
function concatName(array) {
  let primeiroNome = array.shift();
  let ultimoNome = array.pop();
  return ultimoNome + ', ' + primeiroNome;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}
// Desafio 6 - Usei for/of para iterar os valores da array.
function highestCount(numbers) {
  let numeroMaior = numbers[0];
  let cont = 0;
  for (let index of numbers) {
    if (index > numeroMaior) {
      numeroMaior = index;
    }
  }
// Agora que já tenho o maior numero da array, posso contar quantas vezes aparece. 
for (let index of numbers) {
  if (index === numeroMaior){
    cont += 1;
  }
}
return cont;
}

// Desafio 7 - Usei como referência a documentação de Math.abs(). link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  } else if (cat1 < cat2) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
let resultado = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5  === 0){
    resultado.push ('fizzBuzz');
    } else if (numbers[index] % 3 === 0) {
      resultado.push ('fizz');
    } else if (numbers[index] % 5 === 0) {
      resultado.push ('buzz');
    } else {
      resultado.push ('bug!')
    }
  }
return resultado;
}

// Desafio 9 - Usei como referência o comando replace para mudar as vogais por números. link: https://www.w3schools.com/jsref/jsref_replace.asp. link: https://stackoverflow.com/questions/44324892/how-can-i-replace-multiple-characters-in-a-string/44325087
function encode(myString) {
let result = myString.replace(/a/g, 1).replace(/e/g, 2).replace(/i/g, 3).replace(/o/g, 4).replace(/u/g, 5);
return result;
}

function decode(myString) {
let result = myString.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o').replace(/5/g, 'u');
return result;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
