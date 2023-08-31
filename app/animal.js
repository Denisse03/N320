function animals(breed, color) {
  document.getElementById("animals").innerHTML +=
    "I have a " + breed + " that is " + color + ".";
}

animals("German Shephard", "black and tan <br/>");
animals("Yorkie", "Black");
