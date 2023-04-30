function sumArray(array) {

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));

function createEvenArray(array) {

    let newArray = [];
   
    for (let i = 0; i < array.length; i++) {
       
        if (array[i] % 2 === 0) {
            newArray.push(array[i]);
        }
    }

    if (newArray.length === 0) {
        return "Array is empty";
    }

    return newArray;
}

console.log(createEvenArray([1, 2, 3, 4, 5]));

function findIndex(array, value) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }

    return -1;
}

console.log(findIndex([1, 2, 3, 4, 5], 8));

function reverseArray(array) {

    let newArray = []; // 5, 4, 3, 2, 1

    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }

    return newArray;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

function removeElement(array, elem) {

    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== elem) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

console.log(removeElement([1, 2, 3, 4, 5], 3));

// function expression:
const getArea1 = function(width, height) {
    return width * height;
};

// arrow function:
const getArea2 = (width, height) => {
    return width * height;
}

// arrow function with implicit return:
const getArea3 = (width, height) => width * height;

// arrow function with implicit return and only one parameter:
const getArea4 = width => width * width;

// arrow function with implicit return and no parameters:
const getArea5 = () => 5 * 5;

// higher order function:
function callTwice(func) {
    func(); // run the function
    func();
}

// callback function:
function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}    

// HOF with callback:
function executeSumCallback(num1, num2, callback) {

    const sum = callback(num1, num2); // return the sum
    return sum;
}

// sum 
function sum(a, b) {
    return a + b;
}

console.log(executeSumCallback(1, 2, sum));


callTwice(rollDie);

// array methods:
const numbers = [1, 2, 3, 4, 5];

// forEach:
numbers.forEach(number => console.log(number));

/*
// equivalent to:

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

function callback(number) {
    console.log(number);
}

forEach(numbers, callback)

*/

// map:
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);

// filter:
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

// reduce:
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

// find:
const found = numbers.find(number => number > 3);

// object literal:
const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

// loop through object:
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// loop through array of objects:
const people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Jack", age: 40 }
];

// loop through array of objects:
for (let person of people) {
    console.log(person.name);
}

// class:
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello, my name is " + this.name);
    }
}

const person1 = new Person("John");
person1.greet();
