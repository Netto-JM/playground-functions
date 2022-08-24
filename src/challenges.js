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
function catAndMouse(mouse, cat1, cat2) {
  const catOneDistance = Math.abs(cat1 - mouse);
  const catTwoDistance = Math.abs(cat2 - mouse);
  if (catOneDistance < catTwoDistance) return 'cat1';
  if (catOneDistance > catTwoDistance) return 'cat2';
  return 'os gatos trombam e o rato foge';
}

/* Retorne a string 'fizz' para cada número do array que seja divisível apenas por 3;
Retorne a string 'buzz' para cada número do array que seja divisível apenas por 5;
Retorne a string 'fizzBuzz' para cada número do array que seja divisível por 3 e 5;
Retorne a string 'bug!' para cada número do array que não seja dividido por 3 nem por 5.
Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar ['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']. */

function isFizz(fizz, buzz) {
  return fizz && !buzz;
}

function isBuzz(fizz, buzz) {
  return !fizz && buzz;
}

function isFizzBuzz(fizz, buzz) {
  return fizz && buzz;
}

function fizzOrBuzz(fizz, buzz) {
  if (isFizz(fizz, buzz)) return 'fizz';
  if (isBuzz(fizz, buzz)) return 'buzz';
  if (isFizzBuzz(fizz, buzz)) return 'fizzBuzz';
  return 'bug!';
}

// Desafio 8
function fizzBuzz(numbersArray) {
  const fizzBuzzArray = [];
  for (const number of numbersArray) {
    const fizz = number % 3 === 0;
    const buzz = number % 5 === 0;
    const fizzBuzzString = fizzOrBuzz(fizz, buzz);
    fizzBuzzArray.push(fizzBuzzString);
  }
  return fizzBuzzArray;
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
