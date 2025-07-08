/* Please read the instructions located in the 
1-constructor-exercise-readme.md file and complete
your code below */

function Book(title, author, year, genre) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
}

let myBook = new Book("Best book ever", "C. Szpilman", 1800, "mystery");

Book.prototype.getSummary = function () {
  console.log(
    `The book ${this.title}, written by ${this.author} in the year ${this.year} is an amazing ${this.genre} novel.`
  );
};

Book.prototype.isClassic = function () {
  return this.year > 50 && typeof this.year === "number";
};

Book.prototype.updateYear = function (newYear) {
  this.year = newYear;
  console.log(`Publication year updated to ${newYear}`);
};

Book.prototype.changeGenre = function (newGenre) {
  this.genre = newGenre;
  console.log(`Genre updated to ${newGenre}`);
};

myBook.getSummary();
console.log(myBook.isClassic());
myBook.updateYear(1808);
myBook.changeGenre("Romance");

function Book(title, author, year, genre) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
}

const nextBook = new Book(
  "To Kill a Mockingbird",
  "Harper Lee",
  1960,
  "Fiction"
);

console.log(nextBook);
nextBook.getSummary();
console.log(nextBook.isClassic());
nextBook.updateYear(1945);
nextBook.changeGenre("History");
