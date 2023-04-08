# Week 3

### Arrays

Can be thought of as a list.

An array can contain any data type or even a mix of data types.

Contained witin brackets `[]` with each value separated by a comma.

  ```js
  const arrayOfNumbers = [1, 2, 3, 4, 5]
  const arrayOfStrings = ['brown', 'purple', 'green', 'yellow']
  ```

Values in an array are referenced using _bracket notation_.  This means, to access a specific value in an array, we provide the following: `Array[index]`
For example: to access the string `brown` in the array `arrayOfStrings` I would reference it as `arrayOfStrings[0]` because arrays are zero-indexed, meaning the first item in the array is located at index 0.

#### Accessing values in an array

---

Values inside of arrays are accessed primarily using **bracket notation**. This allows us to reference a specific index, or location within an array. To do this, we use the following format: `array[index]`

Arrays are zero indexed, meaning that the first index, or location, inside of an array is 0. For example:

```js
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

> In this example `numArr[0]` is equal to 1 because 1 is the first item in the array. `numArr[5]` is equal to 6 because 6 is the 5th index on the array.
>
> This can be a confusing idea at first, but you will have plenty of practice accessing items in arrays.

You can also access values on an array by passing in a variable. This can be useful if you don't know exactly which index you will need to access at different times. For example:

```js
const namesArr = ['Andrew', 'Jonathan', 'Josh', 'Brandon']

const index = 0

console.log(namesArr[index])
//This will print 'Andrew' to the console.

//However, if we change the value of index later in the file,
//we can access another value.

index = 2
console.log(namesArr[index])
//Because the value of index is now 2, this will print 'Josh' to the console
```

#### Editing arrays

---

Arrays have built in functions to easily edit their contents. They will all allow you to edit arrays as the data you are dealing with changes.

All of these functions are invoked by chaining them onto an array variable in the following format: `array.function()`. Let's dive into them:

- `.push()` allows you to add an item to the end of an array.

  ```js
  const namesArr = ['Andrew', 'Jonathan', 'Josh']
  namesArr.push('Brandon')

  //namesArr now looks like this: ['Andrew', 'Jonathan', 'Josh', 'Brandon']
  ```

- `.pop()` removes the last item from an array.

  ```js
  const namesArr = ['Andrew', 'Jonathan', 'Josh']
  const finalName = namesArr.pop()

  //namesArr now looks like this: ['Andrew', 'Jonathan']
  //.pop can be assigned to a variable which will be the item removed.
  //In this example finalName is now equal to 'Josh'
  ```

- `.shift()` removes the first item from an array.

  ```js
  const namesArr = ['Andrew', 'Jonathan', 'Josh']
  const firstName = namesArr.shift()

  //namesArr now looks like this: ['Jonathan', 'Josh']
  //Similar to .pop, .shift can be assigned to a variable.
  //firstName will be equal to 'Andrew'
  ```

- `.unshift()` allows you to add an item to the front of an array.
  ```js
  const namesArr = ['Andrew', 'Jonathan', 'Josh']
  namesArr.push('Brandon')
  //namesArr now looks like this: ['Brandon', 'Andrew', 'Jonathan', 'Josh']
  ```
- `.slice()` makes a shallow copy of the array that it's chained on to. It takes two arguments, the starting and ending indices of the array you want to copy.
  ```js
  const namesArr = ['Andrew', 'Jonathan', 'Josh']
  const someNames = namesArr.slice(0, 1)
  //someNames now looks like this: ['Andrew', 'Jonathan']
  ```
  > Note: this does not change the original array.
- `.splice()` is the most dynamic of all for editing arrays. It takes 3 arguments:

  1.  The index at which we want to begin editing
  2.  How many items to remove from the array
  3.  Any values to replace at that index

  ```js
  const namesArr = ['Andrew', 'Jonathan', 'Josh', 'Brandon', 'Steve']
  const removedName = namesArr.splice(1, 1)
  //This will remove 1 name from the array at index 1 and assign it to the variable removedName
  //namesArr now looks like this: ['Andrew', 'Josh', 'Brandon', 'Steve']
  //removedName is equal to 'Jonathan'

  //We can continue to edit it, and even put new values in
  namesArr.splice(1, 0, 'Charles')
  //This will just insert charles at index 1.
  //namesArr will now look like this: ['Andrew', 'Charles', 'Josh', 'Brandon', 'Steve']
  ```

  > .splice() is incredibly dynamic and will be one of the most useful functions you can learn. It would be worth your time to play around with it in a repl or other project to increase your familiarity with what it can do.

#### .length

---

All arrays have a length property by default. As the name would suggest this returns the length of the array. Remember that while arrays are zero indexed, length is not. For example:

```js
const namesArr = ['Andrew', 'Jonathan', 'Josh']
console.log(namesArr.length)
//Prints 3 to the console
```

> Note: You do not invoke length, as it is not a function but a property.
>
> Trick: You can use .length to dynamically access the last index in an array. If we wanted the last item in our `namesArr` array but didn't know its index, we could reference it like this: `namesArr[namesArr.length - 1]`. This is a good trick to know.


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

### Objects
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