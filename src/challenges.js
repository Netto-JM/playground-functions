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
function encode(string) {
  const arrayString = string.split('');
  console.log(arrayString);
  const encodeObject = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let index = 0; index < arrayString.length; index += 1) {
    if (arrayString[index] in encodeObject) {
      const stringNumber = encodeObject[arrayString[index]];
      arrayString[index] = stringNumber;
    }
  }
  const encodedString = arrayString.join('');
  return encodedString;
}

function decode(string) {
  const arrayString = string.split('');
  console.log(arrayString);
  const decodeObject = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let index = 0; index < arrayString.length; index += 1) {
    if (arrayString[index] in decodeObject) {
      const stringNumber = decodeObject[arrayString[index]];
      arrayString[index] = stringNumber;
    }
  }
  const decodedString = arrayString.join('');
  return decodedString;
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
