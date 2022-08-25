/* Implemente a função generatePhoneNumber que recebe um array com 11 números e retorna um número de telefone, respeitando parênteses, traços e espaços.

Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], a função generatePhoneNumber deverá retornar (12) 34567-8901.

Retorne a frase 'Array com tamanho incorreto.' se a função receber um array com tamanho diferente de 11;

Retorne a string 'não é possível gerar um número de telefone com esses valores' caso algum dos números do array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais. */
// import countRepetitionOfNumbers from 'challenges.js';

function countRepetitionOfNumbers(numbersArray) {
  const numbersCount = {};
  for (const number of numbersArray) {
    if (!numbersCount[number]) {
      numbersCount[number] = 0;
    }
    numbersCount[number] += 1;
  }
  return numbersCount;
}

function checkPhoneValidity(numbersArray) {
  const numbersCount = countRepetitionOfNumbers(numbersArray);
  const haveManyRepeatedNumbers = Object.values(numbersCount).some((number) => number >= 3);
  const isIncorrectLength = numbersArray.length !== 11;
  const haveNegativeNumbers = numbersArray.some((number) => number < 0);
  const haveTooHighNumbers = numbersArray.some((number) => number > 9);
  const haveInvalidNumbers = haveNegativeNumbers || haveTooHighNumbers;
  const invalidLengthMessage = 'Array com tamanho incorreto.';
  const invalidValuesMessage = 'não é possível gerar um número de telefone com esses valores';
  if (isIncorrectLength) return invalidLengthMessage;
  if (haveInvalidNumbers || haveManyRepeatedNumbers) return invalidValuesMessage;
  return '';
}

function formatPhoneNumber(phoneNumber) {
  const prefix = phoneNumber.slice(0, 2);
  const firstPart = phoneNumber.slice(2, 7);
  const lastPart = phoneNumber.slice(-4);
  const formatedPhoneNumber = `(${prefix}) ${firstPart}-${lastPart}`;
  return formatedPhoneNumber;
}

// Desafio 11
function generatePhoneNumber(numbersArray) {
  const errorMessage = checkPhoneValidity(numbersArray);
  if (errorMessage) return errorMessage;
  const phoneNumber = numbersArray.join('');
  const formatedPhoneNumber = formatPhoneNumber(phoneNumber);
  return formatedPhoneNumber;
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
