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
var fArr = [1, 2, 3];

var firstFilter = fArr.filter(function (value) {
  return value > 2;
});

console.log("First Filter: ", firstFilter);

//only names with four letters
var names = ["Carrie", "Gabe", "Ben", "Abbey", "Will", "Bredon"];

function fourLetters(arr) {
  return arr.filter(function (value) {
    return value.length === 4;
  });
}

console.log("Four Letters: ", fourLetters(names));

var classList = ["N125", "N220", "N320", "N317", "N423", "N215"];

function upperLevel(arr) {
  return arr.filter(function (value) {
    return value.substr(1, 3) >= 300;
  });
}

console.log("Class Filter: ", upperLevel(classList));

let students = [
  { first: "Greg", last: "Smith", employed: true },
  { first: "Sally", last: "Richards" },
  { first: "Jake", last: "Farmer", employed: true },
  { first: "Kelce", last: "Roger" },
];

function filterByIndex(arr, key) {
  return arr.filter(function (value) {
    return !value[key];
  });
}

console.log("Not Employed: ", filterByIndex(students, "employed"));

let students2 = [
  { first: "Greg", last: "Smith", employed: true },
  { first: "Sally", last: "Richards", employed: false },
  { first: "Jake", last: "Farmer", employed: true },
  { first: "Kelce", last: "Roger", employed: false },
];

console.log("Not Employed 2: ", filterByIndex(students, "employed"));

//Map
let mArr = [2, 3, 4, 5, 6];

let mapArray = mArr.map(function (value, index) {
  return { key: index, value: value * value };
});

console.log("Squared: ", mapArray);

//First names only
function firstNames(arr) {
  return arr.map(function (value) {
    return value.first;
  });
}

console.log("Only First Names: ", firstNames(students2));

//Value * Index
function vtIndex(arr) {
  return arr.map(function (value, index) {
    return value * index;
  });
}

console.log("Value Times Index: ", vtIndex([2, 5, 9]));

//Reduce
//it has 2 part which is a callback function and initialValue
//callback: accumulator, nextValue

let reduceArr = [1, 2, 3, 4, 5];

var reduceFn = reduceArr.reduce(function (accumulator, nextValue) {
  return accumulator + nextValue;
}, 10);

console.log("Reduce fn 1: ", reduceFn);

var reduceFn2 = reduceArr.reduce(function (accumulator, nextValue) {
  return accumulator + nextValue;
});

console.log("Reduce fn 2: ", reduceFn2);

let family = ["William", "Abigail", "Richie", "Ben", "Gabe", "Mike"];
//Output: My family members are William Abigail Richie

let nameFunction = family.reduce(function (accumulator, nextValue) {
  return (accumulator += " " + nextValue);
}, "My family is");

console.log("Name Reduction: ", nameFunction);

//Object Reduction
var familyMembers = [
  { first: "Abigial", age: 24 },
  { first: "William", age: 21 },
  { first: "Richie", age: 11 },
];
function extractValue(arr, key) {
  return arr.reduce(function (accumulator, nextValue) {
    accumulator.push(nextValue[key]);
    return accumulator;
  }, []);
}

//Short/Long family Names
//Using family array

function nameLength(value) {
  return value.length > 4;
}

function partition(arr, callback) {
  return arr.reduce(
    function (accumulator, nextValue) {
      if (callback(nextValue)) {
        accumulator[0].push(nextValue);
      } else {
        accumulator[1].push(nextValue);
      }
      return accumulator;
    },
    [[], []]
  );
}

console.log(partition(family, nameLength));

console.log("First Name Array ", extractValue(familyMembers, "first"));

//Code Challenge #1
function hasAZ(str) {
  return str.split("").some(function (value) {
    return value == "z";
  });
}
console.log("Has a Z", hasAZ("The quick brown fox jumps over the lazy hound."));

//Code Challenge #2
function hasOnlyOddNumbers(arr) {
  return arr.every(function (value) {
    return value % 2 !== 0;
  });
}

console.log("Only odd: " + hasOnlyOddNumbers([3, 4, 5, 7, 8, 9]));
console.log("Only odd 2: " + hasOnlyOddNumbers([3, 3, 7, 9, 11, 9]));

//Code Challenge #3

var arrs = [1, 2, 3, 4, 5];

var reduceFn = arr.reduce(function (accumulator, nextValue) {
  let num = nextValue * nextValue;
  console.log(num);
  if (num % 2 == 0) {
    return accumulator + num;
  }
  return accumulator;
}, 50);

console.log("Reduce Function", reduceFn);
