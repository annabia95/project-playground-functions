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
  let separaString = frase.split(" ");
  return separaString;
}

// Desafio 4
function concatName(array) {
  let primeiroNome = array.shift();
  let ultimoNome = array.pop();
  return ultimoNome + ", " + primeiroNome;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}
// Desafio 6
function highestCount(numbers) {
  // seu código aqui
}

// Desafio 7 - Usei como referência a documentação de Math.abs(). link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return "os gatos trombam e o rato foge";
  }else if (cat1 < cat2) {
    return "cat1";
  }else {
    return "cat2";
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
