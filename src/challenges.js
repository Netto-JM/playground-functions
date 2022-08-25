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
  const firstElement = arrayString[0];
  const lastElement = arrayString[arrayString.length - 1];
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

function decodeOrEncode(string, object) {
  const arrayString = string.split('');
  for (let index = 0; index < arrayString.length; index += 1) {
    if (arrayString[index] in object) {
      const stringNumber = object[arrayString[index]];
      arrayString[index] = stringNumber;
    }
  }
  const decodedString = arrayString.join('');
  return decodedString;
}

// Desafio 9
function encode(string) {
  const encodeObject = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  const encodedString = decodeOrEncode(string, encodeObject);
  return encodedString;
}

function decode(string) {
  const decodeObject = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  const decodedString = decodeOrEncode(string, decodeObject);
  return decodedString;
}

// Desafio 10
function techList(techNames, personName) {
  if (techNames.length === 0) return 'Vazio!';
  techNames.sort();
  const techArray = [];
  let techObject = {};
  for (let index = 0; index < techNames.length; index += 1) {
    techObject = {};
    techObject.tech = techNames[index];
    techObject.name = personName;
    techArray.push(techObject);
  }
  return techArray;
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
