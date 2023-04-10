# Week 2

### Node

Node is a program that will allow you to run JavaScript outside of a web browser. With Node, you can build different types of programs with JavaScript. And npm, which was originally short for Node package manager, is a package manager for JavaScript. The npm package manager will help you manage your JavaScript project dependencies.

### Using NPM 

To be able to install and use any package (aka library or framework) you should first execute the command ```npm init```. This command initializes your project with a package.json file which is a .json file with a object literal with keys and values that describe your project.

If you do not do ```npm init``` first, the first time you install your first package, a package.json file will be created anyways. 

Every package that you install will be installed to a node_modules folder. This folder (will be created if not already there) contains the executable source code for each package that you install.

<strong>Note:</strong> Never push your node_modules foler to your Github repo. Always create a .gitignore file and put the folder name there so git will ignore those folder(s) and file(s). 

#### Package.json
Your project's package.json is the central place to configure and describe how to interact with and run your application. It enables npm to start your project, run scripts, install dependencies, publish to the NPM registry, and many other useful tasks. 

Your package.json fills several roles in the lifecycle of your project, some of which only apply for packages published to NPM. If you're not publishing your project to the NPM registry or otherwise making it publicly available to others, your package.json is still essential to the development flow.

#### Package-lock.json

When you install the first package using npm a new file called ```package-lock.json``` appears in your project directory. This file helps lock package dependencies down, as well as their sub-dependencies. 

When you install a package, most likely that package will have many dependencies and sub-depenedencies in order for it to run. 

So why doesn't the ```package.json``` handle all this? Good question.

The package.json file only handles top-level dependencies, nothing more. But those dependencies may have their own dependencies, etc. Like if we use the very loose analogy of you know about your 1st cousins, but you may have forgotten about you 2nd and 3rd cousins. 😧

The package-lock file is a snapshot of our entire dependency tree and all the information npm needs to recreate the state of our node_modules/ folder. 

#### NPM Script

An npm script is a convenient way to bundle common shell commands for your project. They are typically commands, or a string of commands, which would normally be entered at the command line in order to do something with your application.

Scripts are stored in a project's package.json file, which means they're shared amongst everyone using the codebase. They help automate repetitive tasks, and mean having to learn fewer tools. Node npm scripts also ensure that everyone is using the same command with the same flags.

```JS
"scripts": {
    "start": "http-server --cors -c-1 -p 8080"
  },
```

### Debugging

VSCode has its own debugger built into the program. The debugger can easily be used with JavaScript files. To start the debugger, navigate to the file that you wish to debug and then press the Run button.

#### Running the Debugger

The steps would be:

 1. In VSCode, open up a .js file and click the Run button.
 2. You will then get prompted to choose an environment. Select Node.js, and VSCode will run your code.
 3. Below your code, a new pane called the Debug Console will open. 
 
 #### Setting breakpoints

 Hold your pointer to the left of each line number, you will see a faded red dot. Click that dot to create a breakpoint, which is a signal that you place in your code to tell the debugger to stop the execution of your code. 

 Each breakpoint that you choose will stop the code from being executed before that line of code is run. 


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