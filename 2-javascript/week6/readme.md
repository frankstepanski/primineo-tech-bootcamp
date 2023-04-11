# Week 6

### Testing: What and Why?

Testing refers to the process of writing tests for our code based on what we expect to happen and then running our code against those tests. Our code will be considered successful if it passes the tests that we write for it. 

The idea is that we determine from the start what we expect a function or a component to do, write tests to reflect these expectations, and then put our components up against these tests. If they behave the way we expect, then we can move on. Otherwise, we need to refactor our code to pass the tests. There are several common kinds of testing in the development world:

- Unit Testing: Used to test a single function.
- Endpoint Testing: Used to test an endpoint. Postman tests would be an example of this.
- Component Testing/Mocking Components: Testing a component in a simulated environment
- End to End Testing: Simulates a user interacting with the website.

Traditionally, testing is handled by QA engineers but there is a trend emerging of test driven development:

![Test driven development](images/tdd.jpeg)

There is a huge need for developers who know how to test their code and the more familiar you become with it, the more valuable you will be to a future employer. 

Benefits of testing:

- You know exactly what you expect to happen right from the start. This reduces debugging time as it allows you to develop in a more isolated environment
- It created automatic documentation for your project
- Allows you to think through your logic beforehand and find any holes you may not have intended.

### Jest

- Jest is a unit testing library which allows us to perform unit tests.
- Jest comes out of the box with create-react-app.

Let's write our first unit test:

1. Create a `__tests__` folder and a `functions.js` file in the root folder.
   > The functions file is for showing off jest functionality. These functions can come from anywhere
2. Create a `functions.test.js` file in the `__tests__` folder. This file will be used to test our functions in `functions.js`.
3. Let's look at what goes into writing a unit test using Jest:

```js
const { sum, sayHello } = require('../functions')
//Import our functions to be tested

//We set up a unit test using the following syntax:
test('adds 1 + 2 to equal 3', () => {
  //The test function is provided to us by Jest and is available globally
  //We provide it with two arguments: a description of our test and a callback function.  This callback function is our test.

  expect(sum(1, 2)).toBe(3)
  //In this case we are testing if our sum function is able to add 1 and 2 together.
  //We use the expect keyword to expect a certain value and the toBe matcher to determine what we expect the value to be.
  //In this case, we expect the invocation of sum with 1 and 2 passed as arguments to be 3.
})
```

Run `npm run test` to run our tests. You will see in the console whether your tests pass or not. Let's write another test in the same file:

```js
test('sayHello says hello', () => {
  expect(sayHello()).toBe('hello')
})
```

Let's look at some other matchers available to us through Jest. Include the following tests in our `functions.test.js` file:

```js
// Checking the value of an object
test('object assignment', () => {
  const data = { one: 1 }
  data['two'] = 2
  expect(data).toEqual({ one: 1, two: 2 })
  //toEqual is for more complex values, can check objects
})

test('Expect true to be truthy', () => {
  expect(true).toBeTruthy()
})

//Checking an array contains an items
let names = ['John', 'Ariel', 'Zach']
// let names = [{id: 1, name: 'John'}]

test('Names contains Ariel', () => {
  expect(names).toContain('Ariel')
})
```

One of the most important matchers in Jest is the `not` matcher. This allows you to flip any matcher. Let's look at some examples:

```js
test('Add 1 and 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
  expect(sum(1, 2)).not.toBeNaN()
  //You can append not before any matcher to flip what it checks for
})

test('Names contains Becca', () => {
  expect(names).toContain('Becca')
  expect(names).not.toContain('Preston')
})
```

There are a ton of matchers available in Jest you can see them [here](https://jestjs.io/docs/en/expect)

Above you will see that we grouped two tests together. This is not the correct way to do things because each test should exist in isolation. Each test should not be dependent on any other test passing or failing. If we need to group tests together, there is a better way to do it, a `describe` block. This functions like a test block but holds related tests. Even though they are grouped together, they exist independently of each other.

Create a new file called `bankAccount.test.js` in your `__tests__` directory. We will be using the object provided in `bankAccount.js` to run multiple tests together.

```js
import bankAccount from '../bankAccount'

//The describe block is provided by Jest and allows us to group tests together while allowing them to pass or fail independently of each other.
describe('Bank account methods and properties', () => {
  //Describe takes a description and a callback function which will contain the tests we want to run.
  beforeEach(() => {
    //Inside of a describe block, we have access to test setup and teardown.
    //Here this function will run before each test in our describe block but we can also use: beforeAll, afterAll, afterEach
    bankAccount.balance = 1000
  })

  //Try to walk yourself through what each of the below tests is doing.
  test('Initial balance is 1000', () => {
    expect(bankAccount.balance).toBe(1000)
  })
  test('depositMoney should correctly alter balance', () => {
    bankAccount.depositMoney(2000)
    expect(bankAccount.balance).toBe(3000)
  })
  test('withDraw should correctly alter balance', () => {
    bankAccount.withdrawMoney(2000)
    expect(bankAccount.balance).toBe(-1000)
  })
})
```

Resources:

- <a href="https://jestjs.io/docs/getting-started">Getting Started docs</a>
- <a href="https://www.youtube.com/watch?v=7r4xVDI2vho&t=583s">Crash Course</a>
- <a href="https://www.smashingmagazine.com/2020/06/practical-guide-testing-react-applications-jest/">Types of Testing with Jest</a>