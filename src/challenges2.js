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
console.log (triangleCheck (10, 14, 8));

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
