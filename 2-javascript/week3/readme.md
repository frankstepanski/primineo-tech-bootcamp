# Week 3

### Arrays
  - Can be thought of as a list.
  - An array can contain any data type or even a mix of data types.
  - Contained witin brackets `[]` with each value separated by a comma.
  - Example:
  ```js
  const arrayOfNumbers = [1, 2, 3, 4, 5]
  const arrayOfStrings = ['brown', 'purple', 'green', 'yellow']
  ```
  - Values in an array are referenced using _bracket notation_.
    - This means, to access a specific value in an array, we provide the following: `Array[index]`
    - For example: to access the string `brown` in the array `arrayOfStrings` I would reference it as `arrayOfStrings[0]` because arrays are zero-indexed, meaning the first item in the array is located at index 0.

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