# Week 3

### Array

Can be thought of as a list.

An array can contain any data type or even a mix of data types.

Contained witin brackets `[]` with each value separated by a comma.

  ```js
  const arrayOfNumbers = [1, 2, 3, 4, 5]
  const arrayOfStrings = ['brown', 'purple', 'green', 'yellow']
  ```

Values in an array are referenced using _bracket notation_.  This means, to access a specific value in an array, we provide the following: `Array[index]`
For example: to access the string `brown` in the array `arrayOfStrings` I would reference it as `arrayOfStrings[0]` because arrays are zero-indexed, meaning the first item in the array is located at index 0.

### Functions

Functions are reusable pieces of code that we can use to execute code blocks whenever they are invoked.

Functions can be written using either a function declaration or an expression.

A function declaration uses the following format:

```js
function nameOfFunction() {
  //Code to execute
}
```

A function expression uses this format:

```js
const nameOfFunction = function() {
  //Code to execute
}
```

Functions are invoked by referencing the function name and pairing it with a pair of parentheses `()`. Think of these parentheses as the button you are pushing to invoke the function. For example, to invoke our above written function we would simply type:

```js
nameOfFunction()
```

> This would invoke the function and execute any code we have written inside of it.

Functions can be set up to receive parameters, or values that will change depending on when the function is invoked. For example, to write a simple function that will add two numbers together we can do the following:

```js
function addTwo(num1, num2) {
  return num1 + num2
}
```

> This function will take in two numbers and return their sum. We do not know what the values for `num1` and `num2` will be for each invocation, so the parameters act as placeholders.

To invoke this function we could do the following:

```js
addTwo(2, 2) //Returns 4
addTwo(3, 3) //Returns 6
addTwo(5, 5) //Returns 10
```

> This is how we make our functions reusable. When you invoke a function, the values passed to it are called arguments, they are used in the function in place of parameters.

We use the `return` keyword to determine the value that is returned by the function. A function can return any data type, or even another function. When we invoke a function, it becomes equal to its return value and can be assigned to a variable. For example:

```js
let a = addTwo(2, 2) //Our variable a is now equal to 4 and can be used later
let b = addTwo(3, 3) //Variable b is now equal to 6
```

> The return keyword prevents any code below it from executing. It effectively kicks us out of our function. Make sure your return statement is the last thing you want to have happen in a function.


```js
let name = 'Andrew'
let name2 = 'Jonathan'

function sayHi(person) {
  return `Hello, ${person}!`
}

//What will be the value of the following invocations?

let hiAndrew = sayHi(name)
let hiJonathan = sayHi(name2)
let hiBob = sayHi('Bob')
```

> Remember: Functions and if statements can also be nested inside of each other. The possibilities are endless!

### Object
  - A collection of **key value pairs** with each key representing the name of a piece of data and the value being the value of that key.
  - Keys are also referred to as properties.
  - Contained within a set of curly brackets `{}`,
  - Keys are declared inside of an object by using a colon `:`.
  - Each key value pair is separated by a comma `,`.
  - Key value pairs can contain any data type.
  - Objects are used to represent collections of data that go together, for example:
    ```js
    const person = {
      name: 'Andrew',
      age: 27,
      married: true,
      friends: ['Jonathan', 'Josh', 'Spencer'],
    }
    ```
  - Values in objects are usually referenced using _dot notation_.
    _ For example: to access the `name` property on the object `person`, I would reference it as `person.name` which would give me the string `'Andrew'`
    _ New key value pairs can be added to an existing object using dot notation. For example, to add a `pets` property to our `person` object we can just say:
    `js person.hasPets = false`
    > Note: Numbers, Strings, Booleans, Undefined, and Null are referred to as primitive data types because they only contain one thing. Objects and Arrays are referred to as complex data types because they each contain many values.

Resources:
- Arrays: 
  - <a href="https://www.youtube.com/watch?v=55l-aZ7_F24">Definition</a>
  - <a href="https://javascript.info/array">Documentation</a>
  - <a href="https://www.freecodecamp.org/news/data-structures-101-arrays-a-visual-introduction-for-beginners-7f013bcc355a/">Visual guide</a>
  - <a href="https://www.w3schools.com/js/js_array_methods.asp">Array methods overview</a>
  - <a href="https://www.freecodecamp.org/news/the-javascript-array-handbook/">More on methods</a>
- Functions:
   - <a href="https://javascript.info/function-basics">Basics</a>
   - <a href="https://javascript.info/function-expressions">Expressions</a>
   - <a href="https://javascript.info/arrow-functions-basics">Arrow functions</a>
   - <a href="https://www.sitepoint.com/callbacks-javascript/">Callbacks</a>
- Objects:
    - <a href="https://javascript.info/object">Object documentation</a>
    - <a href="https://www.w3schools.com/js/js_objects.asp">Quick summary</a>
    - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects">Working with objects</a>
    - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#enumerating_properties">Looping through objects</a>
- Additional Resources
    - <a href="https://www.youtube.com/watch?v=nDPv8R2lFa4&t=692s">Deep Dive</a>