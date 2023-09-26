async function dogPhoto() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random/20");

  const results = await response.json();

  return results.message;
}

dogPhoto().then((message) => {
  console.log(message);
  message.forEach((element) => {
    console.log(element);
    let dogPic = document.createElement("img");
    dogPic.src = element;
    document.getElementsByTagName("body")[0].appendChild(dogPic);
  });
});
