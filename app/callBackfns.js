// Working the DOM

// Return one element: querySelector
document.querySelector("div ul li:first-child").innerHTML = "querySelector";

document.querySelector(".my").innerHTML = "querySelector p";

// grab a list
// getElementsByClassName('my');

document.getElementsByClassName("my")[1].innerHTML = "class name";

document.getElementsByTagName("li")[1].innerHTML = "second list item";

document.querySelectorAll("body>ul>li")[0].innerHTML = "querySelectorAll";

// Single Value
// getElementByID
//querySelector

//Lists:
//getElementByClassName
//getElementByTagName
//querySelectorAll

function callBack() {
  console.log("This is a callback function");
}

function higherOrder(newFn) {
  console.log("Before callback");
  newFn();
  console.log("After calling function");
}

higherOrder(callBack);

function firstFunction(msg) {
  alert(msg);
}

function middleFunction(msg) {
  console.log(msg);
}

function lastFunction(msg) {
  return confirm(msg);
}

firstFunction("My Message");
middleFunction("My Message");
lastFunction("My Message");

const startFunction = (msg, mFn) => {
  //function startFunction(msg, mFn){}
  alert(msg);
  mFn(msg, endFunction);
};

const nextFunction = (msg, eFn) => {
  console.log(msg);
  eFn(msg);
};

const endFunction = (msg) => {
  return confirm(msg);
};

//function endFunction(msg){
//return confirm(msg);
//}

//start

// startFunction("Callback message...", nextFunction);

// const costTable = (subT, tip, total) => {
//   let createTable = `<ul><li>SubTotal:${subT}</li><li>Tip:${tip}</li><li>Total:${total}</li></ul>`;
//   document.write(createTable);
// };

// const calcTotal = (subT, tip, callback, taxRate = 0.07) => {
//   let total = subT + subT * taxRate + tip;
//   total = total.toFixed(2);
//   //   let dinner = [subT, tip, total];
//   callback(subT, tip, total);
// };

// calcTotal(34.95, 10.5, costTable);

//end

//Callback Challenge
//write a function that will take a string and find the middle character. You will write a higher order function that will find the middle position and the callback function will find what the middle character is and print it out using document.write

const cb = (h, m, a) => {
  let mLetter = a[h];
  let mL2 = m[h];
  document.write(`Middle Letter: ${mLetter}, ${mL2}`);
};

const midPOS = (msg, callback) => {
  let sl = msg.length;
  let half = Math.floor(sl / 2);
  let sArray = msg.split("");
  callback(half, msg, sArray);
};

midPOS("Gaby", cb);
