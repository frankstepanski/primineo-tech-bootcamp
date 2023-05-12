// Ways to create objects in JavaScript

// via an object literal
const book = {
   title: 'Book One',
   author: 'John Doe',
   year: '2013',
 };

delete book.year; // delete a property

console.log(book['title']); // bracket notation - used when the property name is dynamic
console.log(book.title); // dot notation

// nested objects
const spaceship = {
    pilot: {
        name: 'elon musk',
        age: 42,
        favoriteFood: ['steak', 'ice cream']
    },
    engine: {
        model: 'Falcon 1',
        fuel: 'liquid oxygen',
        speed: '7,500 m/s'
    }
};

console.log("pilot name", spaceship.pilot.name) // spaceship['pilot']['name']

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
// a class is just syntactic sugar for a constructor function
class Book {
     constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
     }
}

const book3 = new Book('Book One', 'John Doe', '2013');

// inheritance via a class
class Magazine extends Book {
        constructor(title, author, year, month) {
            super(title, author, year); // call the parent constructor
            this.month = month;
        }
    }

const mag1 = new Magazine('Mag One', 'John Doe', '2013', 'Jan');


