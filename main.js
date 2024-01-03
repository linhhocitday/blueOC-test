//* exercise 1
function assertEqualsArray(expected, actual) {
  if (JSON.stringify(expected) == JSON.stringify(actual)) {
    return true;
  } else {
    return false;
  }
}

function findMostLengthArray(array) {
  let separatedStringLengthObject = {}; // keys are string's length, values are arrays sorted by string's length

  let result = [];

  for (i = 0; i < array.length; i++) {
    const stringLength = array[i].length; // current item's length (string's length)

    // check for key existence, if it already exists then push the current item to the array with corresponding key
    !separatedStringLengthObject[stringLength]
      ? (separatedStringLengthObject[stringLength] = [array[i]])
      : separatedStringLengthObject[stringLength].push(array[i]);
  }

  for (const [key, value] of Object.entries(separatedStringLengthObject)) {
    // assign elements of the current value array to the result array if the value array's length is greater or equal to the length of the result array
    if (value.length >= result.length) {
      result = [...value];
    }
  }

  return result;
}

// test case 1
let stringArray1 = ["a", "ab", "abc", "cd", "def", "gh"];
console.log(
  assertEqualsArray(["ab", "cd", "gh"], findMostLengthArray(stringArray1))
);

// test case 2
let stringArray2 = ["a", "ab", "abc", "cd", "def", "gh", "xyz"];
console.log(
  assertEqualsArray(["abc", "def", "xyz"], findMostLengthArray(stringArray2))
);

// test case 3
let stringArray3 = ["hello", "hi", "world", "12345", "tuesday"];
console.log(
  assertEqualsArray(
    ["hello", "world", "12345"],
    findMostLengthArray(stringArray3)
  )
);

// test case 4
let stringArray4 = ["hello"];
console.log(assertEqualsArray(["hello"], findMostLengthArray(stringArray4)));

//* exercise 2
function assertEqualsNumber(expected, actual) {
  return expected === actual;
}

function sumTopTwo(array) {
  // check if the array has less than two elements
  if (array.length < 2) {
    console.log("Array must have at least 2 elements");
    return;
  }

  const twoBiggest = array.sort((a, b) => b - a).slice(0, 2); // create an array containing 2 biggest numbers of the input array

  // const result = twoBiggest.reduce((total, num) => total + num, 0);
  const result = twoBiggest[0] + twoBiggest[1]; // calculate the sum of the two biggest numbers

  return result;
}

// test case 1
const numsArray1 = [1, 4, 2, 3, 5];
console.log(assertEqualsNumber(9, sumTopTwo(numsArray1)));

// test case 2
const numsArray2 = [12, 112, 88, 909, 283, 1990];
console.log(assertEqualsNumber(2899, sumTopTwo(numsArray2)));

// test case 3
const numsArray3 = [-4, -5, -23, -76, -754, 0];
console.log(assertEqualsNumber(-4, sumTopTwo(numsArray3)));

// test case 4
const numsArray4 = [0];
console.log(assertEqualsNumber(undefined, sumTopTwo(numsArray4)));

// test case 5
const numsArray5 = [-2];
console.log(assertEqualsNumber(undefined, sumTopTwo(numsArray5)));
