

// Ways to create objects in JavaScript

// via an object literal
const book = {
   title: 'Book One',
   author: 'John Doe',
   year: '2013',
 };

// via a function
function createBook(title, author, year) {
   return {
     title: title,
     author: author,
        year: year
    };
};

const book1 = createBook('Book One', 'John Doe', '2013');

// via a constructor function (must use the new keyword and capitalize the first letter of the function name)
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
 }

const book2 = new Book('Book One', 'John Doe', '2013');

// via a class
class Book {
     constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
     }
}

const book3 = new Book('Book One', 'John Doe', '2013');

