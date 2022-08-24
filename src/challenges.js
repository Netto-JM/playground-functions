// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  const area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  const sentenceArray = string.split(' ');
  return sentenceArray;
}

// Desafio 4
function concatName(arrayString) {
  const firstElement = arrayString.shift();
  const lastElement = arrayString.pop();
  const sentence = `${lastElement}, ${firstElement}`;
  return sentence;
}

// Desafio 5
function footballPoints(wins, ties) {
  const victoryPoints = wins * 3;
  const tiePoins = ties * 1;
  const totalPoins = tiePoins + victoryPoints;
  return totalPoins;
}

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

// Desafio 6
function highestCount(numbersArray) {
  const numbersCount = countRepetitionOfNumbers(numbersArray);
  const numbersArrayKeys = [];
  for (const key in numbersCount) {
    // useless 'if' condition just because of ESLint!
    if (numbersArrayKeys) {
      numbersArrayKeys.push(key);
    }
  }
  const highestNumberKey = Math.max(...numbersArrayKeys);
  return numbersCount[highestNumberKey];
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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

// Desafio 10
function techList() {
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
  techList,
};
