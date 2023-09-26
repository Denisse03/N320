//ARRAY METHODS

//For Each
let arr = [1, 2, 3];
arr.forEach(function (value) {
  console.log("For Each Value: " + value);
});

function doubleValues(arr) {
  var newArr = [];
  arr.forEach(function (value) {
    newArr.push(value * 2);
  });
  return newArr;
}
console.log("Double Values: ", doubleValues(arr));

//Every: only boolean value
var eArr = [-1, -2, -3];
var everyFn1 = eArr.every(function (value) {
  return value < 0;
});

console.log("Every Function 1: ", everyFn1);

var everyFn2 = eArr.every(function (value) {
  return value > -2;
});

console.log("Every Function 2: ", everyFn2);

//Check to see if the characters are all lowercase
function allLowerCase(str) {
  return str.split("").every(function (val) {
    return val === val.toLowerCase();
  });
}

console.log("All Lowercase 1: ", allLowerCase("this is a sentence"));

console.log("All Lowercase 2: ", allLowerCase("Today is Thursday"));

//Check to see if all array values are arrays
function allArrays(arr) {
  return arr.every(Array.isArray);
}

console.log("All Array 1: ", allArrays([[1, 2], ["dog", "cat"], [3], [true]]));
console.log("All Array 2: ", allArrays([[1, 2], ["dog", "cat"], [3], true]));

//Some: only boolean value
var sArr = [10, 20, 30];
var someFn1 = sArr.some(function (value) {
  return value < 20;
});
var someFn2 = sArr.some(function (value) {
  return value < 5;
});

console.log("Some Method: ", someFn1);
console.log("Some Method: ", someFn2);

function hasEvenNum(arr) {
  return arr.some(function (value) {
    return value % 2 == 0;
  });
}

console.log("Has Even Number: ", hasEvenNum([1, 2, 3, 4, 5]));
console.log("Has Even Number: ", hasEvenNum([21, 23, 33, 43, 15]));

//filter

//Map
