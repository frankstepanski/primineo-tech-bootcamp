import fetch from 'node-fetch';

// const 
const myName = 'John';
myName = 'Frank'; // error - primitive variables are immutable

const myArray = [];
myArray.push('John'); // no error - non-primitive variables are mutable (not changing the data type)
myArray = {}; // error - different data type

// template literals
const myName2 = 'John';
const myString = `Hello, ${myName2}!`;
// const myString = 'Hello, ' + myName + '!'; // concatenation

// synchronous code
// console.log('Hello World');

// asynchronous code
// setTimeout(() => {
//     console.log('Hello World');
//}, 2000);

function setTimeOut() {
  
    // first - synchronous code
    console.log('I am at the beginning of the code');
    
    // third - asynchronous code
    setTimeout(() => {
      console.log('I am in the setTimeout callback function')
    },500);
  
    // second - synchronous code
    console.log('I am at the end of the code');
}

setTimeOut();

function createNativePromise() {

    // Promise - class that gets instantiated to an object that wraps asynchronous code
    const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('I am a resolved promise!!!');
                //reject('I am a rejected promise!!!');
            }, 2000);
        }
    );

    promise.then((data) => { // when the promise is resolved, the then method is called
        console.log(data);
    })
    .catch((error) => { // when the promise is rejected, the catch method is called
        console.log(error);
    });
}

createNativePromise();

function createPromiseFetch() {

    // a promise is returned from the fetch function:

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json()) // resolved promise
      .then(json => console.log(json)) // resolved promise
      .catch(error => console.log(error)); // rejected promise
}

createPromiseFetch();