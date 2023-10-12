class Store {
  constructor(id, title, publication_year, value) {
    this.id = id;
    this.title = title;
    this.publication_year = publication_year;
    this.value = value;
  }
}

class Book extends Store {
  constructor(id, title, publication_year, value, author, genre) {
    super(id, title, publication_year, value);
    this.author = author;
    this.genre = genre;
  }

  toString() {
    return `${this.title} - $${this.value} (Author: ${this.author}, Genre: ${this.genre})`;
  }
}

class DVD extends Store {
  constructor(id, title, publication_year, value, director, runtime) {
    super(id, title, publication_year, value);
    this.director = director;
    this.runtime = runtime;
  }

  toString() {
    return `${this.title} - $${this.value} (Director: ${this.director}, Runtime: ${this.runtime})`;
  }
}

class CD extends Store {
  constructor(id, title, publication_year, value, artist, songs) {
    super(id, title, publication_year, value);
    this.artist = artist;
    this.songs = songs;
  }

  toString() {
    return `${this.title} - $${this.value} (Artist: ${this.artist}, Songs: ${this.songs})`;
  }
}

class Catalog {
  constructor() {
    this.catalogs = [];
  }

  addItem(...catalogs) {
    console.log("catalogs.id1");
    this.catalogs.push(...catalogs);
  }

  removeItem(id) {
    this.catalogs = this.catalogs.filter((item) => {
      return item.id !== id;
    });
  }

  totalValue() {
    console.log("hi");
    return this.catalogs.reduce((total, item) => total + item.value, 0);
  }

  displayCatalog(catalogTitle) {
    let container = document.createElement("div");

    let title = document.createElement("div");
    title.innerHTML = catalogTitle;

    let content = document.createElement("div");

    this.catalogs.forEach((item) => {
      content.innerHTML += "<div>" + item.toString() + "<div>";
    });

    let price = document.createElement("div");
    price.innerHTML = this.totalValue();

    container.appendChild(title);

    container.appendChild(content);

    container.appendChild(price);

    container.innerHTML += "<br>";

    document.body.appendChild(container);
  }
}

let bookOne = new Book(1, "Cook Book", 2004, 24.99, "Bob Green", "Nonfiction");
let bookTwo = new Book(2, "Animal Book", 2010, 4.99, "Jimmy Brown", "fiction");
let bookThree = new Book(
  3,
  "Drawing Book",
  2021,
  15.99,
  "Alice Wonder",
  "Nonfiction"
);
let dvdOne = new DVD(4, "GUTS", 2023, 12.99, "Olivia R", 30);
let dvdTwo = new DVD(5, "Peter Pan", 1953, 20.99, "J.M B", 120);
let dvdThree = new DVD(6, "Cindrella", 2016, 9.99, "Kenneth B", 72);

let cdOne = new CD(7, "Rare", 2020, 14, "Selena Gomez", "She");
let cdTwo = new CD(8, "Red", 2012, 10, "Taylor Swift", "Starlight");
let cdThree = new CD(
  9,
  "dont smile at me",
  2017,
  5.99,
  "Billie Eilish",
  "Ocean Eye"
);

const catalog = new Catalog();

catalog.addItem(
  bookOne,
  bookTwo,
  bookThree,
  dvdOne,
  dvdTwo,
  dvdThree,
  cdOne,
  cdTwo,
  cdThree
);
console.log("After Add", catalog.catalogs);
catalog.displayCatalog("Original Catalog");

catalog.removeItem(6);
console.log("After Removal", catalog.catalogs);

catalog.displayCatalog("Updated Catalog");
