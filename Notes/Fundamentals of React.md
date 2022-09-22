# Concept of React
React embraces the fact that rendering logic is inherently coupled with other UI logic. Instead of artifically separating the *technologies* by putting markup (HTML etc) and logic (JS, C# etc) in separate files, react combines both in the same unit called ***components***. 

#### General Concepts
###### Transpiling
JS is advancing rapidly, the official name of the JS standard is **ECMAScript**. At this moment, the latest version of known as **ES12**. 

Browsers do not instantly support all of the new features that are rolled out with new release of ECMAScript. Due to this reason alot of the code running in the browser is ***transpiled*** (translated/converted) from a newer version of JS to an older version of JS understood by the browser.

Today, the most popular way of transpiling is by using [***Babel***](https://babeljs.io/). 


## JSX (JavaScript XML)
- It is a syntax extension of JS. 
- Although JSX looks like HTML, it is actually a way to write JS.
- Under the hood, JSX is compiled into JS. 

## Elements
An element describes what you see on the screen. For example following is an element: 
```js
const element = <h1>Hello, world</h1>;
```
Unlike browser DOM elements, **React elements** are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the react elements. Most people confuse elements with *components*, but elements are what components encloses or made of.
- React elements are ***immutable***. Meaning once an element is created, it's attributes and children cannot be changed.
- ReactDOM compares the element and its children to it's previous state and only applies the changes necessary to bring the DOM to [desired state](https://reactjs.org/docs/rendering-elements.html#react-only-updates-whats-necessary).

## Components
Components allows for the splitting of the UI into independent, reusable pieces, and each piece isolated from other. Conceptually, components are like JS functions. They accept arbitrary inputs (called "***props***" which is short for component properties) and return React elements. 

## Arrays
#### Push() vs Concat()
Generally when adding new items to array we use the method `push()` where the item is added to the last of array. When using React, techniques from functional programming are used, and one characteristic of functional programming is the use of **immutable** data structures. 

When using `push()` the item is added to the end of array modifying the current array. In React we most commonly use the method `concat()`, which does not modify the current array but creates a new array in which both the old and the new content is added. This helps React keep track of states and differentiating what to update and what not to.

#### Map()
Based on the old array, map creates a *new array*. Map can also transform the array into something completely different:
```js
const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed
```

#### Destructuring
Individual items of an array can easily be assigned to variables with the help of destructuring assignment.
```js
const t = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second)  // 1, 2 is printed
console.log(rest)          // [3, 4, 5] is printed
```
