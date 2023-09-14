//Largest heading with text: Callback Functions
document.getElementsByTagName("h1")[0].innerHTML = "Callback Function";

//Second largest heading with the current date.
document.getElementsByTagName("h2")[0].innerHTML = "September 14, 2023";

//Second largest heading with your name
document.getElementsByTagName("h2")[1].innerHTML = "Denisse Henriquez Dubon";

//Have a higher order function that use a call back with taking two number and finding the total and average

let text = document.getElementsByTagName("p");
document.getElementsByTagName("p")[0].innerHTML = "Numbers Chosen: ";
document.getElementsByTagName("p")[1].innerHTML = "Total: ";
document.getElementsByTagName("p")[2].innerHTML = "Average: ";

function twoNum(num1, num2, num3, num4) {
  text[0].innerHTML += num1 + num2;
  text[1].innerHTML += num3;
  text[2].innerHTML += num4;
}

function allNum(num1, num2, Callback) {
  let add = num1 + num2;
  let subtract = num1 - num2;
  let mulitply = num1 * num2;
  let division = num1 / num2;
  let total = add + subtract + mulitply + division;
  let average = total / 4;
  Callback(num1, num2, total, average);
}

allNum(4, 10, twoNum);
