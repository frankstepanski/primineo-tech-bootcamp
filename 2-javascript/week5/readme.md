# Week 5

### Classes

Classes is a syntax that we can use as a blueprint to create objects.

It uses the `class` keyword to declare a new class.  Note that classes will start will capital letter.

```javascript
class Car {}
```

We can create an `instance` or the object from this class by creating a variable and calling upon the class using the `new` keyword.

`new` is the keyword we use to invoke a class.

```javascript
class Car {}

const myCar = new Car()

console.log(myCar) //result: this will be the new car object from the class invocation
```

#### Constructor Function

We can have our class accept arguments by using a `constructor` function. This function is where we will receive arguments and can then add them as a property to the object that class returns by using the `this` keyword.

```javascript
class Car {
  // define params to receive args in the class
  constructor(make, model, year) {
    // then add them as props to the object that will be return
    this.make = make
    this.model = model
    this.year = year
  }
}

const myCar = new Car('Tesla', 'Model X', 2020)
```

#### ProtoType Functions

Prototype functions are functions that are built into a certain object type or class. We can create a prototype function on our class so that every object that is created from the class will have access to the function.

```javascript
class Car {
  constructor(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
  }

  // prototypes go here, outside of the constructor
  // we should avoid using the function keyword and arrow functions
  honk() {
    alert(`Your ${this.make} honked!`)
  }
}

const myCar = new Car('Tesla', 'Model X', 2020)
```

#### Extending Classes

We can have a class extend from another class to inherit the properties and prototypes from another class without having to re-write the logic.

We use the keyword `extends` to declare our new class is extending another class.

```javascript
class Animal {
  constructor(name, type) {
    this.name = name
    this.type = type
  }

  // prototype functions
  talk(saying) {
    console.log(`${this.name} says: ${saying}`)
  }
}

// make another class that extends Animal
class Fish extends Animal {}

const fishy = new Fish()
```

#### Super

`super` is the keyword we can use when extending a class to invoke the constructor method from the class that is being extended. When we invoke `super` we will pass the arguments to the parent classes constructor method.

```javascript
class Animal {
  constructor(name, type) {
    this.name = name
    this.type = type
  }

  talk(saying) {
    console.log(`${this.name} says: ${saying}`)
  }
}

class Fish extends Animal {
  // constrcutor for the fish class to accept arguments
  constructor(name) {
    // invoke super to call the parent classes constructor
    super(name, 'Fish')
  }
}

const fishy = new Fish('fishy')

// we can now use the talk prototype method from the Animal class on the fishy instance
fishy.talk('bubble bubble')
```

### Closures

A `closure function` is a function that is returned from another function. The inner function that is returned will rely on data that is declared in the outer functions scope.

Here is an example.

```js
function counter() {
  // Local variable to the counter function
  let count = 0

  // The closure function that is returned that will rely on data from the counter functions scope
  function addOne() {
    return (count += 1)
  }

  // Return the inner 'addOne' function
  // It's important to note that we DO NOT invoke the 'addOne' function because we want to return the function itself
  return addOne
}
```

We can now create what are called `snapshots` of the closure function. When a function forms a closure, it has access to all of its local variables and the lexical environment. The lexical scope that the function has access to is the `snapshot`.

`lexical scope` - This is where we determine a variables or functions scope based solely on its position in our code.

We can create the snapshot like this.

```js
const countOne = counter()
```

`countOne` is now a function. It's easy to think that it is now just the `addOne` inner function that gets returned from `counter`. The `countOne` function now retains a reference to the variables that were declared inside of the lexical scope of the `counter` function.

So we can invoke this snapshot multiple times to increment the `private` count variable.

```js
countOne()
countOne()
countOne()
```

We can also create a brand new `snapshot`.

```js
const countTwo = counter()
```

Then we can use the new snapshot multple times. The `count` variable in the `countTwo` will not be the same variable we refer to in `countOne`.

```js
countTwo()
countTwo()
countTwo()
```

#### Module Pattern

We can follow a `module pattern` with our closure functions by creating `private variables` and `private functions`. This is a way that we can create data that will be shielded from our `global scope` so the only function that has access to it, is the `closure function`.

```js
function modulePattern() {
  // variables and functions here are private and are only accessed through the public functions in the returned object
  let privateVariable = 'I am private'

  let privateFunction = function() {
    console.log(privateVariable)
  }

  return {
    // everything returned is public
    changeVar: function(str) {
      privateVariable = str
    },
    readVar: function() {
      privateFunction()
    },
  }
}

// module1 is now a public object with public methods that access and change private variables.
// Notice how we can not call module1.privateFunction
// We can only call that function within the code of the function.
var module1 = modulePattern()
```

This time we are returning multiple functions, rather than just one function.

#### Closure Practice Problems

Now let's practice creating closure functions with different use cases.

Let's first create a closure function to make a sandwich.

```js
function createSandwich() {
  // this will keep track
  const sandwichIngredients = []
  // thefunction that gets returned will add ingredients to the sandwich
  function addIngredient(ingredient) {
    sandwhichIngredients.push(ingredient)
    return sandwichIngredients
  }
  // return the function
  return addIngredient
}
```

We now have a sandwich maker closure function that we can easily re-use to create new sandwiches. Let's go ahead an now make a few.

```js
// make the sandwhich
let tayteSandwich = createSandwich()
// add ingredients
tayteSandwich('Meatballs')
tayteSandwich('Marinara Sauce')
tayteSandwich('Parmasan Cheese')
```

```js
// make the sandwhich
let mattSandwich = createSandwich()
// add ingredients
mattSandwich('Ham')
mattSandwich('Cheese')
```

Now let's revamp our closure function to add more functionality by following the module pattern.

```js
function createSandwich() {
  // this will keep track
  const sandwichIngredients = []

  // add ingredients
  function addIngredient(ingredient) {
    sandwichIngredients.push(ingredient)
    return sandwichIngredients
  }

  // remove ingredients
  function removeIngredient() {
    // check to make sure the ingredient exists
    // this will return the index value or -1 if not found
    let ingredientIndex = sandwichIngredients.indexOf(ingredient)
    // check to see if item is missing
    if (ingredientIndex === -1) {
      // return an error message
      return 'Sorry, that ingredient does not exist. Pleas try another!'
    } else {
      // if it is found, remove the item
      sandwichIngredients.splice(ingredientIndex, 1)
      return sandwichIngredients
    }
  }

  // read the ingredients
  function readIngredients() {
    return sandwichIngredients
  }

  // create the module or object thatv will be returned
  return {
    addIngredient,
    removeIngredient,
    readIngredients,
  }
}
```

Let's used our revamped sandwich maker closure function.

```js
// make the sandwich
let tayteSandwich = createSandwich()
// add ingredients
tayteSandwich.addIngredient('Meatballs')
tayteSandwich.addIngredient('Marinara Sauce')
tayteSandwich.addIngredient('Parmasen Cheese')
// remove ingredient
tayteSandwich.removeIngredient('Meatballs')
// read the ingredients on the sandwich
tayteSandwich.reaadIngredients()
```

Now let's create another closure function that has a little more functionality. This time we will create a calculator that we can use to perform basic math operations for us. We will use the `modular pattern` to house our methods.

```js
function calculator() {
  // create a starting value at zero
  let value = 0
  // return a module that will contain methods for functionality
  return {
    add(num) {
      return (value += num)
    },
    subtract(num) {
      return (value -= num)
    },
    multiply(num) {
      return (value *= num)
    },
    divide(num) {
      return (value /= num)
    },
  }
}
```

Let's use the new calculator that we just created.

```js
let ti84 = calculator()
// logging the ti84 should return the module or object that encases the different methods we can execute
console.log(ti84)
// lets use the new texas instrument YEEEHAW 🤠
ti84.add(10)
ti84.subtract(5)
ti84.multiply(2)
ti84.divide(2)
```

The final closure method that we will now create will be a bank account. We want this closure function to have full functionality of a bank account. We want to be able to deposit, withdraw, and check our balance. Let's make sure we use the `modular pattern` so we can return multiple functions.

```js
function createAccount() {
  // define a starting balance
  let balance = 0
  // return a module with methods to deposit, withdraw, and check balance
  return {
    deposit(amount) {
      return (balance += amount)
    },
    withdraw(amount) {
      return (balance -= amount)
    },
    checkBalance() {
      return 'Account has a balance of ' + balance
    },
  }
}
```