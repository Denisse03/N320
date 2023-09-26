const wrapper = document.createElement("div");
wrapper.setAttribute("id", "wrapper");
document.body.appendChild(wrapper);

fetch("https://api.quotable.io/quotes?limit=20")
  .then((results) => {
    console.log("resolved", results);

    return results.json();
  })
  .then((data) => {
    let quotes = data.results;
    console.log("Quotes Data:", quotes);

    for (let quote of quotes) {
      let author = `-${quote.author}`;
      let content = `"${quote.content}"`;

      let divContainer = document.createElement("div");
      console.log(divContainer);
      divContainer.classList.add("container");

      let divQuote = document.createElement("div");
      divQuote.classList.add("quote");

      let divAuthor = document.createElement("div");
      divAuthor.classList.add("author");

      divAuthor.innerHTML = author;
      divQuote.innerHTML = content;

      divContainer.appendChild(divQuote);
      divContainer.appendChild(divAuthor);
      wrapper.appendChild(divContainer);
    }
  })
  .catch((error) => {
    console.log("rejected", error);
  });
