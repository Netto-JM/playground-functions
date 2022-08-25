// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(string) {
  let waterCups = 0;
  const numbers = string.replace(/[^0-9]/g, '');
  for (const number of numbers) {
    waterCups += +number;
  }
  const cup = (waterCups > 1) ? 'copos' : 'copo';
  const suggestion = `${waterCups} ${cup} de água`;
  return suggestion;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
