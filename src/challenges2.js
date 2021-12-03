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
// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
