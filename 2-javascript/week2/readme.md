# Week 2

### Equality

In JavaScript, there are several kinds of equality.

- **Strict equality** (`===`) checks if two values are the same type and have the same value.
- **Loose equality** (`==`) checks if two values have the same value, but it will convert the values to the same type before comparing them.
- **Object equality** (`Object.is`) checks if two values are the same type and have the same value.

### Control flow

Control flow is the order in which the computer executes statements in a script.

#### If statement

An `if` statement executes a statement if a specified condition is `true`. If the condition is `false`, another statement can be executed.

```js
if (condition) {
  // code to be executed if condition is true
} else {
  // code to be executed if condition is false
}
```

### Iteration

Iteration is the process of repeating a set of instructions until a certain condition is met.

#### For loop

A `for` loop repeats until a specified condition evaluates to `false`. 

```js
for ([initialExpression]; [conditionExpression]; [incrementExpression])
  statement
```

#### While loop

A `while` statement executes its statements as long as a specified condition evaluates to `true`. 

```js
while (condition)
  statement
```

Resources:
- Node
  - [Overview and setup](https://www.youtube.com/watch?v=zb3Qk8SG5Ms)
  - [Documentation](https://nodejs.org/docs/latest-v19.x/api/)
  - [Download](https://nodejs.org/en/download)
- Npm:
   - [What is package.json?](https://heynode.com/tutorial/what-packagejson/)
   - [What are NPM scripts?](https://heynode.com/tutorial/what-are-npm-scripts/)
   - [What is package-lock.json?](https://heynode.com/tutorial/what-package-lockjson/)
   - [Creating a .gitignore file](https://www.freecodecamp.org/news/gitignore-what-is-it-and-how-to-add-to-repo/)
- Debugging in Node
   - [Visual Studio Code](https://code.visualstudio.com/docs/editor/debugging)
- Control flow:
   - <a href= "https://dorey.github.io/JavaScript-Equality-Table/unified/">Equality in JavaScript</a>
   - <a href="https://developer.mozilla.org/en-US/docs/Glossary/Truthy">truthy</a> vs <a href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy">falsy</a>
   - <a href="https://javascript.info/ifelse">if statements</a>
- Loops (iteration)
    - <a href="https://www.youtube.com/watch?v=wxds6MAtUQ0">what is a loop?</a>
    - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement">for</a> 
    - <a href="https://javascript.info/while-for#the-while-loop">while</a>
    - <a href="https://www.youtube.com/watch?v=5LiGWfk4WTo">looping through array and strings</a>
 - Additional Resources: 
    - Reference:
      -  <a href="https://pythontutor.com/javascript.html#mode=edit">Visualizer</a> (follow the flow of your code)
      - <a href="https://www.youtube.com/watch?v=7gj34mStSNQ">Deep Dive</a>
    - Youtube playlists:
      - <a href="https://www.youtube.com/watch?v=x2RNw4M6cME">Colt Steele</a>
      - <a href="https://www.youtube.com/playlist?list=PL7TLF4T4Tq2TtNmadzRfxYIB9683uhpbD">Dev Dreamer</a> 
      - <a href="https://www.youtube.com/watch?v=2md4HQNRqJA&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD">Hitesh Choudhary</a>