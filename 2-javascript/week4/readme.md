# Week 4

### Synchronous vs Asynchronous 

JavaScript is synchronous in nature. This means JavaScript runs code in the sequence they’re written.

Asynchronous code will not be executed immediately. They will only be executed after a certain event occurs.

The common definition usually requires sending a request to a server and waiting for a response to come back. When Asynchronous Javascript was first talked about they referred to it as AJAX.

This was because the responses would come back in an XML form (due to the SOAP protocol). The term AJAX is outdated and inaccurate since we don’t use XML anymore, but that doesn’t prevent people from misusing the term.

### Fetching Resources

There are two ways to natively fetch resources.

 - Using XMLHTTPRequest (XHR for short)
 - Using the Fetch API

Both XHR and Fetch are well-supported on all browsers.

Most developers prefer to use Fetch over XHR because it uses promises. But this difference doesn’t matter in practice because most of the time developers will use libraries to simplify both Fetch and XHR, and these libraries use Promises anyway.

>Note: You will mainly see XHR in existing codebases that have been in production for at least a few years (probably a lot longer).

### Fetch
You can send a Fetch request by writing the fetch method. The response comes back in a then method.

```js
fetch('https://link-to-resource').then(response => {
  console.log(response)
})
```

You need to treat the response before you can get the payload. In this case, the payload is hidden inside the body property.

In this case, the response also contains **JSON**. You can convert the response into JSON with `response.json``. Then you get the payload in the next then method.

```js
fetch('https://api.github.com/users/frankstepanski/repos')
  .then(response => response.json())
  .then(payload => {
    console.log(payload)
  })
```

### Understanding Promises

There is a phenomenon called “Callback Hell” out in the world where layers of callbacks are nested within each other. This happens when you need to perform a series of asynchronous requests that depend on the data from a previous request.

Promises make things much simpler in a then call:

```js
fetch('https://link-to-resource')
  .then(response => response.json())
  .then(data => {
    return fetch(https://${data.url})
			.then(response => response.json())
  })
  .then(data2 => {
    // Do something with data2
  })
```

A JavaScript Promise is an if-else statement for the future. We don’t know whether the statement will flow into if or else until the future arrives. So promises have three states:

- Pending
- Resolved (or fulfilled)
- Rejected

All promises have the then and catch methods.

- We act on resolved promises in then.
- We can act on rejected promises in catch.

#### Chained then statements

If you return a value from a then call, you can use that value in the next then call. response.json in the Fetch API uses this feature.

```js
fetch('https://link-to-resource')
  .then(response => response.json())
  .then(data => {/* do something with data */}
```

#### One catch at the end

If an error occurs in a promise chain, the error will be passed directly into the next catch call. It will skip any then calls along the way.

This means we can handle all errors with a single catch call.

```js
promise
  .then(face => new Error('🙁')) // Throws an error
  .then(face => console.log(face)) // Skips this line
  .catch(face => console.log(face)) // Jumps to this line.
```

#### The finally method

All promises have a finally method. This method will be called after all then and catch calls.

```js
promise
  .then(/*…*/)
  .catch(/*…*/)
  .finally(/*…*/)
```

#### Creating a promise

Promises can be created naitively with a Promise constructor. Each Promise constructor contains a callback with two arguments — resolve and reject.

```js
const promise = new Promise((resolve, reject) => {
  // Do something with resolve and reject
})
```

We need to determine how to resolve or reject a promise. The easiest way is to create if/else condition inside the promise.

- If the condition returns true, we resolve the promise.
- If the condition returns false, we reject the promise.

```js
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve()
  } else {
    reject()
  }
})
```

Both resolve and reject take in a single argument. This argument goes into the then or catch call.

- Values passed into resolve goes into the next then call.
- Values passed into reject goes into the next catch call.

```js
const promise = new Promise((resolve, reject) => {
  if (condition) return resolve('😄')
  reject('🙁')
})

promise
  .then(face => console.log(face)) 
  .catch(face => console.log(face)) 
```

Resources:

  - Synchronous vs Asynchronous JavaScript:
    - <a href="https://www.freecodecamp.org/news/synchronous-vs-asynchronous-in-javascript/">Examples</a>
  - REST API:
    - <a href="https://www.youtube.com/watch?v=SLwpqD8n3d0&t=8s">Explanation</a>
    - <a href="https://www.youtube.com/watch?v=-mN3VyJuCjM&t=39s">Examples</a>
  - Promises:
    - <a href="https://www.youtube.com/watch?v=RvYYCGs45L4&t=1s">Promises in 100 seconds</a>
    - <a href="https://javascript.info/promise-basics">Documentation</a>
    - <a href="https://javascript.info/promise-chaining">Chaining</a>
    - <a href="https://web.dev/promises/">Explanation with examples</a>
    - <a href="https://javascript.info/promise-api">API</a>
  - Fetch API:
    - <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch">Useage</a>
    - <a href="https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data">Examples</a>