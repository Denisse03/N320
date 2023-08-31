function getNumber() {
  var userNum = document.getElementById("numPic").value;

  do {
    if (userNum >= 7) {
      if (userNum % 7 == 0) {
        alert(userNum + " is first number divisible by 7.");
        break;
      }
      console.log("not yet...");
      userNum--;
    } else {
      alert("no matches...");
    }
  } while (userNum > 7);
}

document.getElementsByTagName("button")[1].addEventListener("click", getNumber);
