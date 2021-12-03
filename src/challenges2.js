// Desafio 10
function techList(nomeTech, name) {
  // Preciso ordenar minha array de tecnologias
  nomeTech.sort();
  // Criar uma nova array para colocar o objeto
  let novaArray = [];
  // Caso nomeTech seja vazio, retornar vazio!
  if (nomeTech.length === 0) {
    return 'Vazio!';
  }
  // Fazer uma iteração para percorrer todas as posições da array nomeTech, depois armazenar na novaArray
  for (let index = 0; index < nomeTech.length; index += 1) {
    let list = {
      tech: nomeTech[index],
      name: name,
    };
    novaArray.push(list);
  }
  return novaArray;
}
// Desafio 11 - Usei como referência o comando replace para realocar os elementos da string como número de telefone. link: https://www.w3schools.com/jsref/jsref_replace.asp
function generatePhoneNumber(arrayNumber) {
  let phoneNumber = '(xx) xxxxx-xxxx';
// Respeitando a condição do tamanho!
  if (arrayNumber.length !== 11){
    return 'Array com tamanho incorreto.'
  }
// Primeira iteração para realocar os números da string no phoneNumber.
  for (let index = 0; index < arrayNumber.length; index += 1) {
    let contRepetido = 0;
    phoneNumber = phoneNumber.replace('x', arrayNumber[index]);
// Respeitando a segunda e a terceira condição! 
    if(arrayNumber[index] < 0 || arrayNumber[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
// Iniciando a segunda iteração (dentro da primeira) para conferir a repetição dos números!
    for (let index2 = 0; index2 < arrayNumber.length; index2 += 1) {
      if (arrayNumber[index2] === arrayNumber[index]) {
        contRepetido += 1;
      }
    } 
    if (contRepetido >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
  }
}
return phoneNumber;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  } else if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    return true;
  } else {
    return false;
  }
}
// Desafio 13 - Usei como referência a documentação do objeto RegExp e do método match(). Links: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp . https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994 
function hydrate(stringBebidas) {
  let sum = 0;
  let regex = /\d+/g;
  let num = stringBebidas.match(regex);
  // Usei o JSON.parse para transformar as strings dentro da minha array em números. Link: https://stackoverflow.com/questions/13272406/convert-string-with-commas-to-array/13272436
  let arrayNumber = JSON.parse("[" + num + "]");
  // Agora que já tenho uma array composta pelos números de cada bebida, preciso somá-los!
  for (let index = 0; index < arrayNumber.length; index += 1) {
    sum += arrayNumber[index];
  }
  if (sum > 1) {
    return sum + ' copos de água';
  } else {
    return sum + ' copo de água';
  }
}
console.log(hydrate ('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
