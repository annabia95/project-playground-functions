// Desafio 10
function techList(NomeTech, name) {
  for (let index = 0 ; index < NomeTech.length ; index +=1 ){
    let list = [
      {
      tech: NomeTech[index],
      name: name,
    },
  ];
  }
return list; 
}
console.log (techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

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
