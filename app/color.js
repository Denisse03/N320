function getName() {
  var userName = document.getElementById("myName").value;
  var color = prompt("welcome what is your favorite color?");
  document.getElementsByTagName("body")[0].style.backgroundColor = color;
}

document.getElementsByTagName("button")[0].addEventListener("click", getName);
