<h1>JavaScript DOM & BOM</h1>

<p><b>DOM (Document Object Model):</b><br>
DOM represents the HTML document as a tree of objects. It allows JavaScript to access, modify, and manipulate HTML elements dynamically.</p>

<h2>1. Selecting Elements</h2>
<ul>
  <li><b>getElementById()</b> → Select element by ID
    <pre><code>const header = document.getElementById("header");</code></pre>
  </li>
  <li><b>getElementsByClassName()</b> → Select elements by class (returns HTMLCollection)
    <pre><code>const items = document.getElementsByClassName("item");</code></pre>
  </li>
  <li><b>getElementsByTagName()</b> → Select elements by tag
    <pre><code>const paragraphs = document.getElementsByTagName("p");</code></pre>
  </li>
  <li><b>querySelector()</b> → Select first matching element using CSS selector
    <pre><code>const firstItem = document.querySelector(".item");</code></pre>
  </li>
  <li><b>querySelectorAll()</b> → Select all matching elements (returns NodeList)
    <pre><code>const allItems = document.querySelectorAll(".item");</code></pre>
  </li>
</ul>

<h2>2. Manipulating Elements</h2>
<ul>
  <li><b>textContent</b> → Change text
    <pre><code>header.textContent = "Hello World";</code></pre>
  </li>
  <li><b>innerHTML</b> → Change HTML content
    <pre><code>header.innerHTML = "&lt;span&gt;Hi&lt;/span&gt;";</code></pre>
  </li>
  <li><b>style</b> → Change CSS styles
    <pre><code>header.style.color = "red";</code></pre>
  </li>
  <li><b>classList</b> → Add, remove, toggle classes
    <pre><code>header.classList.add("active");</code></pre>
  </li>
  <li><b>setAttribute / getAttribute</b> → Modify or get attributes
    <pre><code>header.setAttribute("id", "mainHeader");
console.log(header.getAttribute("id")); // mainHeader</code></pre>
  </li>
</ul>

<h2>3. Creating & Removing Elements</h2>
<pre>
<code>
const div = document.createElement("div");
div.textContent = "New Div";
document.body.appendChild(div);  // Add to body

document.body.removeChild(div);   // Remove from body
</code>
</pre>

<h2>4. Events</h2>
<ul>
  <li><b>addEventListener()</b> → Listen for events
    <pre><code>
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Button Clicked!");
});
    </code></pre>
  </li>
  <li>Common events → click, dblclick, mouseover, mouseout, keydown, keyup, submit, change</li>
</ul>

<h2>5. Traversing the DOM</h2>
<ul>
  <li><b>parentNode / parentElement</b> → Access parent element</li>
  <li><b>children / childNodes</b> → Access child elements/nodes</li>
  <li><b>firstChild / lastChild</b> → Access first/last child node</li>
  <li><b>nextSibling / previousSibling</b> → Access adjacent nodes</li>
</ul>

<hr/>

<p><b>BOM (Browser Object Model):</b><br>
BOM allows interaction with the browser outside the document (window, navigator, screen, location, history).</p>

<h2>1. window object</h2>
<ul>
  <li><b>alert(), prompt(), confirm()</b> → Display messages or get input</li>
  <li><b>window.innerWidth / innerHeight</b> → Viewport size</li>
  <li><b>window.open() / window.close()</b> → Open or close windows</li>
  <li><b>window.setTimeout()</b> → Run function after delay</li>
  <li><b>window.setInterval()</b> → Run function repeatedly at interval</li>
</ul>

<h2>2. navigator object</h2>
<ul>
  <li><b>navigator.userAgent</b> → Browser info</li>
  <li><b>navigator.platform</b> → OS info</li>
</ul>

<h2>3. location object</h2>
<ul>
  <li><b>location.href</b> → Current URL</li>
  <li><b>location.assign()</b> → Navigate to new URL</li>
  <li><b>location.reload()</b> → Reload page</li>
  <li><b>window.location.href = "https://www.google.com";</b> → Redirect to another page</li>

</ul>

<h2>4. history object</h2>
<ul>
  <li><b>history.back()</b> → Go back</li>
  <li><b>history.forward()</b> → Go forward</li>
  <li><b>history.go(n)</b> → Go n steps in history</li>
</ul>

<h2>5. screen object</h2>
<ul>
  <li><b>screen.width / screen.height</b> → Screen size</li>
  <li><b>screen.availWidth / availHeight</b> → Available screen size</li>
</ul>

<hr/>
<p><b>Quick Summary:</b></p>
<ul>
  <li><b>DOM</b> → Access & manipulate HTML elements</li>
  <li><b>Selectors</b> → getElementById, querySelector, getElementsByClassName, etc.</li>
  <li><b>Manipulation</b> → textContent, innerHTML, style, classList, setAttribute</li>
  <li><b>Creation & Removal</b> → createElement, appendChild, removeChild</li>
  <li><b>Events</b> → addEventListener, common events</li>
  <li><b>Traversal</b> → parentNode, children, nextSibling, previousSibling</li>
  <li><b>BOM</b> → window, navigator, location, history, screen</li>
</ul>


<hr/>

<h1>JavaScript Web Storage</h1>

<p><b>Web Storage:</b><br>
Web Storage allows storing data in the browser. It is more secure and larger than cookies, and data is stored as key-value pairs.</p>

<h2>1. localStorage</h2>
<ul>
  <li><b>Purpose:</b> Stores data with no expiration. Data persists even after browser is closed.</li>
  <li><b>Set Item:</b>
    <pre><code>localStorage.setItem("name", "Shanto");</code></pre>
  </li>
  <li><b>Get Item:</b>
    <pre><code>const name = localStorage.getItem("name");</code></pre>
  </li>
  <li><b>Remove Item:</b>
    <pre><code>localStorage.removeItem("name");</code></pre>
  </li>
  <li><b>Clear All:</b>
    <pre><code>localStorage.clear();</code></pre>
  </li>
</ul>

<h2>2. sessionStorage</h2>
<ul>
  <li><b>Purpose:</b> Stores data for the session. Data is cleared when the browser/tab is closed.</li>
  <li><b>Usage:</b>
    <pre><code>sessionStorage.setItem("sessionName", "Shil");
const sName = sessionStorage.getItem("sessionName");
sessionStorage.removeItem("sessionName");
sessionStorage.clear();</code></pre>
  </li>
</ul>

<h2>3. Cookies</h2>
<ul>
  <li><b>Purpose:</b> Small data stored in browser, sent with every HTTP request.</li>
  <li><b>Set Cookie:</b>
    <pre><code>document.cookie = "username=Shanto; expires=Fri, 31 Dec 2025 12:00:00 UTC; path=/";</code></pre>
  </li>
  <li><b>Get Cookie:</b>
    <pre><code>console.log(document.cookie);</code></pre>
  </li>
  <li><b>Delete Cookie:</b>
    <pre><code>document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";</code></pre>
  </li>
</ul>

<hr/>
<p><b>Quick Summary:</b></p>
<ul>
  <li><b>localStorage</b> → Persistent storage, key-value pairs, survives browser close</li>
  <li><b>sessionStorage</b> → Session-only storage, cleared on tab/browser close</li>
  <li><b>Cookies</b> → Small storage sent with requests, can have expiration date</li>
</ul>

</hr>
<h1>JavaScript ES6 Features</h1>

<p><b>What is ES6?</b><br>
ES6 (ECMAScript 2015) introduced new syntax and features to make JavaScript more modern, readable, and powerful.</p>

<h2>1. let & const</h2>
<pre>
<code>
let name = "Shanto";  // Block scoped, can be reassigned
const age = 22;       // Block scoped, cannot be reassigned
</code>
</pre>

<h2>2. Arrow Functions</h2>
<pre>
<code>
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
</code>
</pre>

<h2>3. Template Literals</h2>
<pre>
<code>
const name = "Shanto";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Shanto!
</code>
</pre>

<h2>4. Default Parameters</h2>
<pre>
<code>
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greet();          // Hello, Guest
greet("Shil");    // Hello, Shil
</code>
</pre>

<h2>5. Destructuring</h2>
<pre>
<code>
// Object destructuring
const user = { name: "Shanto", age: 22 };
const { name, age } = user;

// Array destructuring
const arr = [1, 2, 3];
const [first, second] = arr;
</code>
</pre>

<h2>6. Spread & Rest Operator</h2>
<pre>
<code>
// Spread
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

// Rest
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6
</code>
</pre>

<h2>7. Classes & Inheritance</h2>
<pre>
<code>
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, roll) {
    super(name);
    this.roll = roll;
  }
}

const s = new Student("Shanto", 101);
s.greet(); // Hello, Shanto
</code>
</pre>

<h2>8. Modules (import/export)</h2>
<pre>
<code>
// export.js
export const pi = 3.14;

// import.js
import { pi } from './export.js';
</code>
</pre>

<h2>9. Promises</h2>
<pre>
<code>
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});
promise.then(result => console.log(result)); // Done!
</code>
</pre>

<h2>10. let’s not forget Optional Chaining</h2>
<pre>
<code>
const user = { name: "Shanto", address: { city: "Dhaka" } };
console.log(user.address?.city);      // Dhaka
console.log(user.address?.country);   // undefined, no error
</code>
</pre>

<hr/>
<p><b>Quick Summary:</b></p>
<ul>
  <li><b>let & const</b> → Block scoped variables</li>
  <li><b>Arrow functions</b> → Shorter syntax, no own this</li>
  <li><b>Template literals</b> → `${}` for string interpolation</li>
  <li><b>Destructuring</b> → Extract values from objects/arrays</li>
  <li><b>Spread & Rest</b> → Expand or collect values</li>
  <li><b>Classes & Inheritance</b> → Modern OOP</li>
  <li><b>Modules</b> → Import/export code</li>
  <li><b>Promises</b> → Asynchronous operations</li>
  <li><b>Optional chaining</b> → Safe property access</li>
</ul>






<hr/>


<h1>JavaScript Variable Declarations</h1>
<h2>1. let</h2>
<pre>
<code>
let name = "Shanto";
name = "Updated"; 
console.log(name); // Updated
</code>
</pre>
<p><b>Note:</b> <code>let</code> allows re-assignment but cannot be re-declared in the same scope. It is block-scoped.</p>

<h2>2. const</h2>
<pre>
<code>
const age = 22;
// age = 23; ❌ Error: Assignment to constant variable
console.log(age); // 22
</code>
</pre>
<p><b>Note:</b> <code>const</code> cannot be re-assigned or re-declared. It is block-scoped. Useful for constants and objects/arrays (though their contents can still be modified).</p>

<h2>3. var</h2>
<pre>
<code>
var city = "Dhaka";
city = "Chattogram"; 
console.log(city); // Chattogram
</code>
</pre>
<p><b>Note:</b> <code>var</code> can be re-assigned and re-declared. It is function-scoped (not block-scoped) and has hoisting behavior.</p>

<hr/>
<p><b>Quick Summary:</b></p>
<ul>
  <li><b>let</b> → Block-scoped, can be re-assigned, cannot be re-declared.</li>
  <li><b>const</b> → Block-scoped, cannot be re-assigned or re-declared.</li>
  <li><b>var</b> → Function-scoped, can be re-assigned and re-declared, hoisted.</li>
</ul>



<hr/> 

<h1>JavaScript Loops</h1>

<p><b>What are Loops?</b><br>
Loops allow us to execute a block of code multiple times until a condition is met.</p>

<h2>1. for loop</h2>
<pre>
<code>
for (let i = 0; i < 5; i++) {
  console.log(i); 
}
// Output: 0 1 2 3 4
</code>
</pre>
<p><b>Note:</b> A traditional loop with initialization, condition, and increment/decrement.</p>

<h2>2. while loop</h2>
<pre>
<code>
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// Output: 0 1 2 3 4
</code>
</pre>
<p><b>Note:</b> Runs while the condition is <code>true</code>. Condition checked before each iteration.</p>

<h2>3. do...while loop</h2>
<pre>
<code>
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
// Output: 0 1 2 3 4
</code>
</pre>
<p><b>Note:</b> Executes at least once, then continues while condition is <code>true</code>.</p>

<h2>4. for...of loop</h2>
<pre>
<code>
const numbers = [10, 20, 30];
for (const num of numbers) {
  console.log(num);
}
// Output: 10 20 30
</code>
</pre>
<p><b>Note:</b> Iterates over values of iterable objects (arrays, strings, sets, maps).</p>

<h2>5. for...in loop</h2>
<pre>
<code>
const user = { name: "Shanto", age: 22 };
for (const key in user) {
  console.log(key, user[key]);
}
// Output: name Shanto, age 22
</code>
</pre>
<p><b>Note:</b> Iterates over keys of an object.</p>

<h2>6. forEach() (Array method)</h2>
<pre>
<code>
const arr = [1, 2, 3];
arr.forEach(num => console.log(num));
// Output: 1 2 3
</code>
</pre>
<p><b>Note:</b> Executes a function for each array element. No return value.</p>

<hr/>
<p><b>Quick Summary:</b></p>
<ul>
  <li><b>for</b> → Classic loop with index control.</li>
  <li><b>while</b> → Repeats while condition is true.</li>
  <li><b>do...while</b> → Runs at least once before checking condition.</li>
  <li><b>for...of</b> → Iterates over values in arrays, strings, sets, maps.</li>
  <li><b>for...in</b> → Iterates over keys of objects.</li>
  <li><b>forEach()</b> → Array method, runs function for each element.</li>
</ul>




<hr/>

<h1>JavaScript Arrays</h1>

<p><b>What is an Array?</b><br>
An array is a special variable that can hold multiple values in a single reference. Arrays are ordered and zero-indexed.</p>

<h2>1. Creating Arrays</h2>
<pre>
<code>
// Using literal
const numbers = [1, 2, 3, 4];

// Using constructor
const fruits = new Array("Apple", "Banana", "Mango");
</code>
</pre>
<p><b>Note:</b> Array literals are more common and concise.</p>

<h2>2. Accessing Elements</h2>
<pre>
<code>
const numbers = [10, 20, 30];
console.log(numbers[0]); // 10
console.log(numbers[2]); // 30
</code>
</pre>
<p><b>Note:</b> Arrays are zero-indexed, use <code>array[index]</code> to access elements.</p>

<h2>3. Array Properties & Methods</h2>
<ul>
  <li><b>length</b> → Returns the number of elements.
    <pre><code>console.log(numbers.length); // 3</code></pre>
  </li>
  
  <li><b>push()</b> → Adds element(s) to the end.
    <pre><code>numbers.push(40);
console.log(numbers); // [10, 20, 30, 40]</code></pre>
  </li>

  <li><b>pop()</b> → Removes element from the end.
    <pre><code>numbers.pop();
console.log(numbers); // [10, 20, 30]</code></pre>
  </li>

  <li><b>unshift()</b> → Adds element(s) to the beginning.
    <pre><code>numbers.unshift(5);
console.log(numbers); // [5, 10, 20, 30]</code></pre>
  </li>

  <li><b>shift()</b> → Removes element from the beginning.
    <pre><code>numbers.shift();
console.log(numbers); // [10, 20, 30]</code></pre>
  </li>

  <li><b>indexOf()</b> → Returns first index of element.
    <pre><code>console.log(numbers.indexOf(20)); // 1</code></pre>
  </li>

  <li><b>includes()</b> → Checks if element exists.
    <pre><code>console.log(numbers.includes(30)); // true</code></pre>
  </li>

  <li><b>slice()</b> → Returns a shallow copy from start to end (end not included).
    <pre><code>console.log(numbers.slice(1,3)); // [20, 30]</code></pre>
  </li>

  <li><b>splice()</b> → Adds/removes elements at a specific index.
    <pre><code>numbers.splice(1, 1, 25); 
console.log(numbers); // [10, 25, 30]</code></pre>
  </li>

  <li><b>concat()</b> → Combines arrays.
    <pre><code>const arr2 = [40, 50];
console.log(numbers.concat(arr2)); // [10, 25, 30, 40, 50]</code></pre>
  </li>

  <li><b>join()</b> → Converts array to string with a separator.
    <pre><code>console.log(numbers.join(", ")); // "10, 25, 30"</code></pre>
  </li>

  <li><b>reverse()</b> → Reverses the array.
    <pre><code>numbers.reverse();
console.log(numbers); // [30, 25, 10]</code></pre>
  </li>

  <li><b>sort()</b> → Sorts elements (alphabetically by default).
    <pre><code>numbers.sort();
console.log(numbers); // [10, 25, 30]</code></pre>
  </li>

  <li><b>forEach()</b> → Executes a function for each element.
    <pre><code>numbers.forEach(num => console.log(num));</code></pre>
  </li>

  <li><b>map()</b> → Creates a new array by transforming elements.
    <pre><code>const doubled = numbers.map(num => num * 2);
console.log(doubled); // [20, 50, 60]</code></pre>
  </li>

  <li><b>filter()</b> → Creates a new array with elements passing a condition.
    <pre><code>const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [10, 30]</code></pre>
  </li>

  <li><b>reduce()</b> → Reduces array to a single value.
    <pre><code>const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 65</code></pre>
  </li>

  <li><b>find()</b> → Returns first element that satisfies condition.
    <pre><code>const firstOver20 = numbers.find(num => num > 20);
console.log(firstOver20); // 25</code></pre>
  </li>
</ul>

<hr/>
<p><b>Quick Summary:</b></p>
<ul>
  <li>Access elements → <code>array[index]</code></li>
  <li>Add/remove → <code>push, pop, shift, unshift, splice</code></li>
  <li>Check/Find → <code>includes, indexOf, find, filter</code></li>
  <li>Transform → <code>map, reduce, forEach</code></li>
  <li>Copy/Combine → <code>slice, concat</code></li>
  <li>Other → <code>join, reverse, sort, length</code></li>
</ul>

<hr/>


<h1>JavaScript Objects</h1>

<p><b>What is an Object?</b><br>
Objects are collections of key-value pairs. They allow you to store multiple related data in a single reference. Keys are strings (or symbols) and values can be any type, including functions.</p>

<h2>1. Creating Objects</h2>
<pre>
<code>
// Using object literal
const user = { name: "Shanto", age: 22, city: "Dhaka" };

// Using constructor
const user2 = new Object();
user2.name = "Shil";
user2.age = 22;
</code>
</pre>

<h2>2. Accessing Properties</h2>
<pre>
<code>
console.log(user.name);    // Shanto (dot notation)
console.log(user["city"]); // Dhaka (bracket notation)
</code>
</pre>

<h2>3. Modifying Properties</h2>
<pre>
<code>
user.age = 23;            // update
user.country = "Bangladesh"; // add new
delete user.city;         // delete property
</code>
</pre>

<h2>4. Object Methods (Commonly Used)</h2>
<ul>
  <li><b>Object.keys(obj)</b> → Returns an array of property names.
    <pre><code>console.log(Object.keys(user)); // ["name", "age", "country"]</code></pre>
  </li>
  <li><b>Object.values(obj)</b> → Returns an array of property values.
    <pre><code>console.log(Object.values(user)); // ["Shanto", 23, "Bangladesh"]</code></pre>
  </li>
  <li><b>Object.entries(obj)</b> → Returns an array of [key, value] pairs.
    <pre><code>console.log(Object.entries(user));
// [["name","Shanto"], ["age",23], ["country","Bangladesh"]]</code></pre>
  </li>
  <li><b>hasOwnProperty(key)</b> → Checks if key exists in the object.
    <pre><code>console.log(user.hasOwnProperty("name")); // true</code></pre>
  </li>
  <li><b>Object.assign(target, source)</b> → Copies properties from source to target.
    <pre><code>const target = {};
Object.assign(target, user);
console.log(target); // {name: "Shanto", age: 23, country: "Bangladesh"}</code></pre>
  </li>
  <li><b>for...in loop</b> → Iterates over keys.
    <pre><code>for (let key in user) {
  console.log(key, user[key]);
}</code></pre>
  </li>
</ul>

<h2>5. Object Destructuring</h2>
<pre>
<code>
const { name, age } = user;
console.log(name, age); // Shanto 23
</code>
</pre>

<h2>6. Nested Objects & Optional Chaining</h2>
<pre>
<code>
const userProfile = { 
  name: "Shanto", 
  address: { city: "Dhaka", zip: 1207 } 
};

console.log(userProfile.address?.city); // Dhaka
console.log(userProfile.address?.country); // undefined, no error
</code>
</pre>

<hr/>
<p><b>Quick Summary:</b></p>
<ul>
  <li>Create → <code>{}</code> or <code>new Object()</code></li>
  <li>Access → <code>obj.key</code> or <code>obj["key"]</code></li>
  <li>Modify → <code>obj.key = value</code>, <code>delete obj.key</code></li>
  <li>Check → <code>hasOwnProperty</code></li>
  <li>Get keys/values → <code>Object.keys/values/entries</code></li>
  <li>Copy → <code>Object.assign()</code></li>
  <li>Iterate → <code>for...in</code></li>
  <li>Destructure → <code>{ key } = obj</code></li>
  <li>Safe access → <code>optional chaining (?.)</code></li>
</ul>


 <hr/>
 <h1>JavaScript: Object.freeze() and Object.seal()</h1>
<p><b>What are Freeze and Seal?</b><br>
These methods are used to control the mutability of objects and arrays.</p>

<h2>1. Object.freeze()</h2>
<p>Makes an object or array completely immutable: you cannot add, delete, or modify properties/elements.</p>
<pre>
<code>
// Object example
const user = { name: "Shanto", age: 22 };
Object.freeze(user);

user.age = 23;           // ❌ Ignored
user.city = "Dhaka";     // ❌ Ignored
delete user.name;        // ❌ Ignored

console.log(user); // { name: "Shanto", age: 22 }

// Array example
const numbers = [1, 2, 3];
Object.freeze(numbers);

numbers[0] = 10;  // ❌ Not allowed
numbers.push(4);   // ❌ Not allowed
console.log(numbers); // [1, 2, 3]
</code>
</pre>
<p><b>Use case:</b> When you want a constant object/array that should never be changed.</p>

<h2>2. Object.seal()</h2>
<p>Makes an object or array non-extensible: you can modify existing properties/elements but cannot add or delete them.</p>
<pre>
<code>
// Object example
const user2 = { name: "Shil", age: 22 };
Object.seal(user2);

user2.age = 23;        // ✅ Allowed
user2.city = "Dhaka";  // ❌ Not allowed
delete user2.name;     // ❌ Not allowed
console.log(user2);    // { name: "Shil", age: 23 }

// Array example
const nums = [1, 2, 3];
Object.seal(nums);

nums[0] = 10;    // ✅ Allowed
nums.push(4);    // ❌ Not allowed
nums.pop();      // ❌ Not allowed
console.log(nums); // [10, 2, 3]
</code>
</pre>
<p><b>Use case:</b> When you want an object/array structure to stay the same but allow updating existing values.</p>

<hr/>
<p><b>Quick Summary:</b></p>
<ul>
  <li><b>freeze()</b> → Fully immutable, cannot change, add, or delete properties/elements. Works on objects and arrays.</li>
  <li><b>seal()</b> → Can modify existing properties/elements but cannot add or delete. Works on objects and arrays.</li>
  <li>Use <b>freeze</b> for constant objects/arrays.</li>
  <li>Use <b>seal</b> when structure should stay fixed but values can change.</li>
</ul>

<hr/>

<h1>JavaScript Math Object</h1>

<p><b>What is Math?</b><br>
The Math object provides properties and methods for mathematical constants and functions. It’s not a constructor; you use it directly: <code>Math.method()</code>.</p>

<h2>1. Properties</h2>
<ul>
  <li><b>Math.PI</b> → 3.141592653589793</li>
  <li><b>Math.E</b> → Euler's number, ~2.718</li>
  <li><b>Math.LN2</b> → Natural log of 2, ~0.693</li>
  <li><b>Math.LN10</b> → Natural log of 10, ~2.302</li>
  <li><b>Math.SQRT2</b> → Square root of 2, ~1.414</li>
  <li><b>Math.SQRT1_2</b> → Square root of 1/2, ~0.707</li>
</ul>

<h2>2. Common Methods</h2>
<ul>
  <li><b>Math.abs(x)</b> → Absolute value  
    <pre><code>Math.abs(-5); // 5</code></pre>
  </li>
  <li><b>Math.round(x)</b> → Round to nearest integer  
    <pre><code>Math.round(4.6); // 5</code></pre>
  </li>
  <li><b>Math.ceil(x)</b> → Round up  
    <pre><code>Math.ceil(4.1); // 5</code></pre>
  </li>
  <li><b>Math.floor(x)</b> → Round down  
    <pre><code>Math.floor(4.9); // 4</code></pre>
  </li>
  <li><b>Math.trunc(x)</b> → Remove fractional part  
    <pre><code>Math.trunc(4.9); // 4</code></pre>
  </li>
  <li><b>Math.pow(x, y)</b> → x raised to the power y  
    <pre><code>Math.pow(2, 3); // 8</code></pre>
  </li>
  <li><b>Math.sqrt(x)</b> → Square root  
    <pre><code>Math.sqrt(16); // 4</code></pre>
  </li>
  <li><b>Math.cbrt(x)</b> → Cube root  
    <pre><code>Math.cbrt(27); // 3</code></pre>
  </li>
  <li><b>Math.max(a, b, ...)</b> → Maximum value  
    <pre><code>Math.max(1, 5, 3); // 5</code></pre>
  </li>
  <li><b>Math.min(a, b, ...)</b> → Minimum value  
    <pre><code>Math.min(1, 5, 3); // 1</code></pre>
  </li>
  <li><b>Math.random()</b> → Random number between 0 (inclusive) and 1 (exclusive)  
    <pre><code>Math.random(); // 0.2345</code></pre>
  </li>
  <li><b>Math.sign(x)</b> → Returns 1, -1, or 0  
    <pre><code>Math.sign(-5); // -1</code></pre>
  </li>
  <li><b>Math.log(x)</b> → Natural logarithm (base e)  
    <pre><code>Math.log(Math.E); // 1</code></pre>
  </li>
  <li><b>Math.exp(x)</b> → e^x  
    <pre><code>Math.exp(2); // 7.389...</code></pre>
  </li>
  <li><b>Math.floor(Math.random() * n)</b> → Random integer from 0 to n-1  
    <pre><code>Math.floor(Math.random() * 10); // 0-9</code></pre>
  </li>
</ul>

<hr/>
<p><b>Quick Summary:</b></p>
<ul>
  <li><b>Constants</b> → Math.PI, Math.E, etc.</li>
  <li><b>Rounding</b> → round(), ceil(), floor(), trunc()</li>
  <li><b>Roots & Powers</b> → sqrt(), cbrt(), pow()</li>
  <li><b>Min/Max</b> → min(), max()</li>
  <li><b>Random</b> → random(), use with floor() for integers</li>
  <li><b>Logarithms & Exponent</b> → log(), exp()</li>
  <li><b>Other</b> → abs(), sign()</li>
</ul>




<hr/>

<h1>JavaScript Functions</h1>

<h2>1. Normal Function (Function Declaration)</h2>
<pre>
<code>
function greet(name) {
  return "Hello " + name;
}

console.log(greet("Shanto")); // Hello Shanto
</code>
</pre>
<p><b>Note:</b> Function declarations are hoisted, meaning they can be called before they are defined.</p>

<h2>2. Function Expression</h2>
<pre>
<code>
const greet = function(name) {
  return "Hello " + name;
};

console.log(greet("Shanto")); // Hello Shanto
</code>
</pre>
<p><b>Note:</b> Function expressions are not hoisted. They must be defined before calling.</p>

<h2>3. Arrow Function</h2>
<pre>
<code>
const greet = (name) => {
  return "Hello " + name;
};

// Short form
const greetShort = name => "Hello " + name;

console.log(greet("Shanto"));      // Hello Shanto
console.log(greetShort("Shil"));   // Hello Shil
</code>
</pre>
<p><b>Note:</b> Arrow functions are shorter and do not have their own <code>this</code> (they use the surrounding context's <code>this</code>).</p>

<hr/>
<p><b>Quick Summary:</b></p>
<ul>
  <li><b>Normal Function</b> → Hoisted, can be called before declaration.</li>
  <li><b>Function Expression</b> → Stored in a variable, not hoisted.</li>
  <li><b>Arrow Function</b> → Concise syntax, no own <code>this</code>, best for callbacks.</li>
</ul>




<hr/>

<h1>JavaScript Hoisting</h1>

<p><b>What is Hoisting?</b><br>
Hoisting is JavaScript's default behavior of moving <i>declarations</i> 
(to the top of their scope) during the memory creation phase of execution.  
This means variables and functions can be used before they are actually written in code, 
but the behavior depends on whether you use <code>var</code>, <code>let</code>, <code>const</code>, 
or a function declaration.</p>

<h2>1. Variable Hoisting with var</h2>
<pre>
<code>
console.log(a); // undefined (declared but not initialized)
var a = 10;
console.log(a); // 10
</code>
</pre>
<p><b>Note:</b> <code>var</code> declarations are hoisted to the top and initialized with <code>undefined</code>.</p>

<h2>2. Variable Hoisting with let & const</h2>
<pre>
<code>
console.log(b); // ❌ ReferenceError (Temporal Dead Zone)
let b = 20;

console.log(c); // ❌ ReferenceError (Temporal Dead Zone)
const c = 30;
</code>
</pre>
<p><b>Note:</b> <code>let</code> and <code>const</code> are hoisted but not initialized, leading to a ReferenceError if accessed before declaration.</p>

<h2>3. Function Hoisting (Declaration)</h2>
<pre>
<code>
greet(); // Works

function greet() {
  console.log("Hello, Hoisting!");
}
</code>
</pre>
<p><b>Note:</b> Function declarations are fully hoisted, so they can be called before they are defined.</p>

<h2>4. Function Expression Hoisting</h2>
<pre>
<code>
sayHi(); // ❌ TypeError: sayHi is not a function

var sayHi = function() {
  console.log("Hi there!");
};
</code>
</pre>
<p><b>Note:</b> Function expressions are hoisted like variables (declared but undefined), so calling them before initialization throws an error.</p>

<hr/>
<p><b>Quick Summary:</b></p>
<ul>
  <li><b>Hoisting</b> → Declarations are moved to the top of scope before execution.</li>
  <li><b>var</b> → Hoisted and initialized with <code>undefined</code>.</li>
  <li><b>let / const</b> → Hoisted but not initialized (Temporal Dead Zone).</li>
  <li><b>Function Declarations</b> → Fully hoisted (can be used before definition).</li>
  <li><b>Function Expressions / Arrow Functions</b> → Hoisted as variables, not callable before assignment.</li>
</ul>








<hr/>
<h1>JavaScript Object Data Access</h1>
<h2>1. Dot Notation</h2>
<pre>
<code>
const user = { name: "Shanto", age: 22 };
console.log(user.name); // "Shanto"
console.log(user.age);  // 22
</code>
</pre>

<h2>2. Bracket Notation</h2>
<pre>
<code>
const user = { name: "Shanto", age: 22 };
console.log(user["name"]); // "Shanto"
console.log(user["age"]);  // 22
</code>
</pre>

<h2>3. Optional Chaining</h2>
<pre>
<code>
const user = { profile: { email: "shanto@example.com" } };
console.log(user.profile?.email); // "shanto@example.com"
console.log(user.address?.city);  // undefined (no error)
</code>
</pre>
<hr/>
<p><b>Quick Summary (Object Data Access):</b></p>
<ul>
  <li><b>Dot Notation (obj.key)</b> → Easy and clean, used for simple property names.</li>
  <li><b>Bracket Notation (obj["key"])</b> → Useful when keys are dynamic or contain spaces/special chars.</li>
  <li><b>Optional Chaining (obj?.key?.subKey)</b> → Safely access nested properties without causing errors if a value is <i>null</i> or <i>undefined</i>.</li>
</ul>
<h1>JavaScript Array Operations</h1>
<hr/>
<h2>1. map()</h2>
<pre>
<code>
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
</code>
</pre>
<p><b>Note:</b> map() creates a new array by applying a function to each element.</p>

<h2>2. filter()</h2>
<pre>
<code>
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]
</code>
</pre>
<p><b>Note:</b> filter() returns a new array with elements that pass the given condition.</p>

<h2>3. find()</h2>
<pre>
<code>
const numbers = [1, 2, 3, 4];
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 2
</code>
</pre>
<p><b>Note:</b> find() returns the first element that matches a condition (or undefined if none).</p>

<h2>4. reduce()</h2>
<pre>
<code>
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
</code>
</pre>
<p><b>Note:</b> reduce() applies a function to each element to reduce the array to a single value.</p>

<h2>5. forEach()</h2>
<pre>
<code>
const numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num));
// Output: 1 2 3 4
</code>
</pre>
<p><b>Note:</b> forEach() executes a function for each element but does not return a new array.</p>

<hr/>
<p><b>Quick Summary:</b></p>
<ul>
  <li><b>map()</b> → transforms elements and returns new array.</li>
  <li><b>filter()</b> → keeps only elements matching a condition.</li>
  <li><b>find()</b> → finds the first matching element.</li>
  <li><b>reduce()</b> → reduces all values into a single result.</li>
  <li><b>forEach()</b> → runs code for each element (no return).</li>
</ul>


<hr/>
<h1>JavaScript OOP Concepts</h1>

<h2>1. Class</h2>
<pre>
<code>
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const p1 = new Person("Shanto", 22);
p1.greet(); // Hello, my name is Shanto
</code>
</pre>
<p><b>Note:</b> class is a blueprint for creating objects with properties and methods.</p>

<h2>2. Inheritance</h2>
<pre>
<code>
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

const d = new Dog();
d.speak(); // Dog barks
</code>
</pre>
<p><b>Note:</b> Inheritance allows one class to use methods/properties of another.</p>

<h2>3. Encapsulation</h2>
<pre>
<code>
class BankAccount {
  #balance = 0; // private property

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(100);
console.log(acc.getBalance()); // 100
</code>
</pre>
<p><b>Note:</b> Encapsulation hides internal details and provides controlled access.</p>

<h2>4. this</h2>
<pre>
<code>
class Student {
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log(this.name);
  }
}

const s1 = new Student("Shanto");
s1.printName(); // Shanto
</code>
</pre>
<p><b>Note:</b> this refers to the current object instance inside a class or function.</p>

<h2>5. super</h2>
<pre>
<code>
class Parent {
  constructor(name) {
    this.name = name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // call parent constructor
    this.age = age;
  }
}

const c = new Child("Shanto", 22);
console.log(c.name, c.age); // Shanto 22
</code>
</pre>
<p><b>Note:</b> super is used to call the constructor or methods of a parent class.</p>

<h2>6. instanceof</h2>
<pre>
<code>
class Car {}
const myCar = new Car();

console.log(myCar instanceof Car); // true
</code>
</pre>
<p><b>Note:</b> instanceof checks if an object belongs to a specific class.</p>

<h2>7. Prototypical Chain</h2>
<pre>
<code>
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log(`Hello, I'm ${this.name}`);
};

const p2 = new Person("Shanto");
p2.sayHello(); // Hello, I'm Shanto
</code>
</pre>
<p><b>Note:</b> JavaScript objects inherit from a prototype chain, enabling method sharing.</p>

<hr/>
<p><b>Quick Summary:</b></p>
<ul>
  <li><b>Class</b> → Blueprint for creating objects.</li>
  <li><b>Inheritance</b> → Child class derives features from parent class.</li>
  <li><b>Encapsulation</b> → Hides internal details, exposes only necessary parts.</li>
  <li><b>this</b> → Refers to the current object instance.</li>
  <li><b>super</b> → Calls parent class constructor or methods.</li>
  <li><b>instanceof</b> → Checks if an object is created from a specific class.</li>
  <li><b>Prototype Chain</b> → Objects inherit properties/methods through prototypes.</li>
</ul>



<hr/>

<h1>JavaScript Basics: Primitive & Non-Primitive Data Types</h1>

<h2>1. Primitive Data Types</h2>
<ul>
  <li><b>number</b> → Example: <code>let x = 10;</code></li>
  <li><b>string</b> → Example: <code>let name = "Shanta";</code></li>
  <li><b>boolean</b> → Example: <code>let isActive = true;</code></li>
  <li><b>null</b> → Example: <code>let a = null;</code></li>
  <li><b>undefined</b> → Example: <code>let b;</code></li>
  <li><b>symbol</b> → Example: <code>let id = Symbol("id");</code></li>
  <li><b>bigint</b> → Example: <code>let big = 12345678901234567890n;</code></li>
</ul>
<p><b>Key Point:</b> Stored by <em>value</em> and are <em>immutable</em>.</p>

<h2>2. Non-Primitive (Reference) Data Types</h2>
<ul>
  <li><b>object</b> → Example: <code>let user = {name: "Shanta", age: 22};</code></li>
  <li><b>array</b> → Example: <code>let nums = [1, 2, 3];</code></li>
  <li><b>function</b> → Example: <code>function greet(){ return "Hi"; }</code></li>
  <li><b>Date</b>, <b>RegExp</b>, etc.</li>
</ul>
<p><b>Key Point:</b> Stored by <em>reference</em> and are <em>mutable</em>.</p>

<details>
  <summary>Quick Comparison</summary>
  <table border="1" cellpadding="6">
    <thead>
      <tr>
        <th>Feature</th>
        <th>Primitive</th>
        <th>Non-Primitive</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Storage</td>
        <td>By Value</td>
        <td>By Reference</td>
      </tr>
      <tr>
        <td>Mutability</td>
        <td>Immutable</td>
        <td>Mutable</td>
      </tr>
      <tr>
        <td>Examples</td>
        <td><code>number</code>, <code>string</code>, <code>boolean</code></td>
        <td><code>object</code>, <code>array</code>, <code>function</code></td>
      </tr>
    </tbody>
  </table>
</details>

<hr/>





<h1>JavaScript: null vs undefined</h1>

<p><b>undefined:</b><br>
A variable that has been declared but not assigned a value is <code>undefined</code>. It is also the default return value of functions that don’t return anything.</p>

<pre><code>// Example 1: Declared but not assigned
let a;
console.log(a); // undefined

// Example 2: Function with no return
function greet() {}
console.log(greet()); // undefined
</code></pre>

<p><b>null:</b><br>
<code>null</code> is an assignment value. It represents the intentional absence of any object value.</p>

<pre><code>// Example 1: Explicit assignment
let b = null;
console.log(b); // null

// Example 2: Object placeholder
let user = {name: "Shanta", age: null};
console.log(user.age); // null
</code></pre>

<hr/>

<p><b>Quick Summary:</b></p>
<ul>
  <li><b>undefined</b> → Variable declared but not assigned, or function returns nothing.</li>
  <li><b>null</b> → Explicitly assigned "empty" value.</li>
  <li><b>Type of undefined</b> → <code>"undefined"</code></li>
  <li><b>Type of null</b> → <code>"object"</code> (JavaScript quirk)</li>
</ul>

<hr/>


<h1>JavaScript: Truthy vs Falsy</h1>

<p><b>Truthy:</b><br>
Values that are considered <code>true</code> when evaluated in a Boolean context.</p>

<pre><code>// Examples of Truthy values
if ("hello") { console.log("Truthy!"); }   // "hello" is truthy
if (42) { console.log("Truthy!"); }        // 42 is truthy
if ([]) { console.log("Truthy!"); }        // empty array is truthy
if ({}) { console.log("Truthy!"); }        // empty object is truthy
</code></pre>

<p><b>Falsy:</b><br>
Values that are considered <code>false</code> when evaluated in a Boolean context.</p>

<pre><code>// Examples of Falsy values
if (0) { console.log("Falsy!"); }          // 0 is falsy
if ("") { console.log("Falsy!"); }         // empty string is falsy
if (null) { console.log("Falsy!"); }       // null is falsy
if (undefined) { console.log("Falsy!"); }  // undefined is falsy
if (NaN) { console.log("Falsy!"); }        // NaN is falsy
</code></pre>

<hr/>

<p><b>Quick Summary:</b></p>
<ul>
  <li><b>Truthy</b> → Evaluates to <code>true</code> in Boolean context (non-zero numbers, non-empty strings, objects, arrays).</li>
  <li><b>Falsy</b> → Evaluates to <code>false</code> in Boolean context (0, "", null, undefined, NaN, false).</li>
</ul>

<hr/>



<h1>JavaScript: == vs ===</h1>

<p><b>== (Equality Operator)</b><br>
Checks if two values are equal <em>after type coercion</em>. JavaScript converts the values to the same type before comparing.</p>

<pre><code>
console.log(5 == "5");  // true, string "5" converted to number 5
console.log(null == undefined); // true
console.log(0 == false); // true
</code></pre>

<p><b>=== (Strict Equality Operator)</b><br>
Checks if two values are equal <em>without type coercion</em>. Both value and type must be the same.</p>

<pre><code>
console.log(5 === "5");  // false, different types
console.log(null === undefined); // false
console.log(0 === false); // false
console.log(5 === 5);     // true
</code></pre>

<hr/>

<p><b>Quick Summary:</b></p>
<ul>
  <li><b>==</b> → Compares values <em>after type conversion</em> (less strict).</li>
  <li><b>===</b> → Compares values <em>without type conversion</em> (strict equality).</li>
</ul>



<hr/>
<h1>JavaScript: Scope</h1>

<p><b>Scope:</b><br>
Scope determines the accessibility of variables in different parts of your code.</p>

<h2>1. Global Scope</h2>
<p>Variables declared outside any function or block are in the global scope and accessible anywhere.</p>
<pre><code>
let globalVar = "I am global";

function test() {
  console.log(globalVar); // Accessible here
}

console.log(globalVar); // Accessible here too
</code></pre>

<h2>2. Local / Function Scope</h2>
<p>Variables declared inside a function are only accessible inside that function.</p>
<pre><code>
function myFunc() {
  let localVar = "I am local";
  console.log(localVar); // Accessible here
}

console.log(localVar); // Error! Not accessible outside
</code></pre>

<h2>3. Block Scope</h2>
<p>Variables declared with <code>let</code> or <code>const</code> inside a block <code>{ }</code> are only accessible within that block.</p>
<pre><code>
{
  let blockVar = "I am block scoped";
  const anotherVar = 10;
  console.log(blockVar); // Accessible here
}

console.log(blockVar); // Error! Not accessible outside
</code></pre>

<h2>4. var vs let/const</h2>
<ul>
  <li><b>var</b> → Function scoped, not block scoped</li>
  <li><b>let / const</b> → Block scoped</li>
</ul>

<hr/>

<p><b>Quick Summary:</b></p>
<ul>
  <li><b>Global Scope</b> → Accessible everywhere</li>
  <li><b>Local / Function Scope</b> → Accessible only inside the function</li>
  <li><b>Block Scope</b> → Accessible only inside the block (<code>let</code> / <code>const</code>)</li>
  <li><b>var</b> → Function scoped, can cause unexpected issues in blocks</li>
</ul>


<hr/>


<h1>JavaScript: Callback Functions</h1>

<p><b>Callback:</b><br>
A callback is a function passed as an argument to another function, which is then executed inside that function.</p>

<h2>1. Basic Example</h2>
<pre><code>
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Shanta", sayGoodbye);

// Output:
// Hello Shanta
// Goodbye!
</code></pre>

<h2>2. Callback with Array</h2>
<pre><code>
let numbers = [1, 2, 3];

numbers.forEach(function(num) {
  console.log(num * 2);
});

// Output:
// 2
// 4
// 6
</code></pre>

<h2>3. Key Points</h2>
<ul>
  <li>Callbacks are used for asynchronous operations like <code>setTimeout</code>, API requests, event handling.</li>
  <li>They allow functions to be executed after a certain task is completed.</li>
</ul>

<hr/>

<p><b>Quick Summary:</b></p>
<ul>
  <li>A <b>callback</b> is a function passed as an argument to another function.</li>
  <li>Executed after the outer function finishes its task.</li>
  <li>Used for asynchronous tasks and event handling.</li>
</ul>


<hr/>
<h1>JavaScript: Pass by Value vs Pass by Reference</h1>

<p><b>Pass by Value:</b><br>
When a primitive value is passed to a function, a **copy** of the value is passed. Changes inside the function do **not** affect the original variable.</p>

<pre><code>
function changeValue(x) {
  x = 100;
  console.log("Inside function:", x);
}

let num = 50;
changeValue(num); 
console.log("Outside function:", num);

// Output:
// Inside function: 100
// Outside function: 50
</code></pre>

<p><b>Pass by Reference:</b><br>
When a non-primitive value (object or array) is passed to a function, a **reference** is passed. Changes inside the function **affect the original object/array**.</p>

<pre><code>
function changeArray(arr) {
  arr.push(4);
  console.log("Inside function:", arr);
}

let numbers = [1, 2, 3];
changeArray(numbers);
console.log("Outside function:", numbers);

// Output:
// Inside function: [1, 2, 3, 4]
// Outside function: [1, 2, 3, 4]
</code></pre>

<hr/>

<p><b>Quick Summary:</b></p>
<ul>
  <li><b>Pass by Value</b> → Primitive types, copy of value is passed, original value unchanged.</li>
  <li><b>Pass by Reference</b> → Non-primitive types, reference is passed, original value can change.</li>
</ul>
<hr/>


<h1>JavaScript: Closures</h1>

<p><b>Closure:</b><br>
A closure is a function that **remembers the variables from its outer scope** even after the outer function has finished executing.</p>

<h2>1. Basic Example</h2>
<pre><code>
function outer() {
  let count = 0;
  
  function inner() {
    count++;
    console.log(count);
  }
  
  return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3
</code></pre>

<h2>2. Key Points</h2>
<ul>
  <li>Closures allow functions to **access variables from outer scopes** even after the outer function has returned.</li>
  <li>Useful for **data privacy** and **creating private variables**.</li>
  <li>Commonly used in callbacks, event handlers, and functional programming.</li>
</ul>

<hr/>

<p><b>Quick Summary:</b></p>
<ul>
  <li>A <b>closure</b> is a function that retains access to its <em>outer function’s variables</em> even after the outer function has finished.</li>
  <li>Allows <em>private state</em> and helps avoid global variables.</li>
</ul>
<hr/>


<h2>📌 AJAX (Asynchronous JavaScript and XML)</h2>

<p>
  AJAX is a web development technique that allows web pages to communicate with a server and fetch or send data asynchronously, 
  without reloading the entire page. It uses <strong>JavaScript</strong>, the 
  <strong>XMLHttpRequest (XHR)</strong> object (or modern <code>fetch</code> API), 
  and server-side technologies (like JSON, XML, or plain text) to dynamically update parts of a web page.
</p>

<h3>🚀 Importance of AJAX</h3>
<ul>
  <li>Makes web applications faster and more responsive by avoiding full page reloads.</li>
  <li>Enhances user experience with features like live search, autocomplete, and real-time updates.</li>
  <li>Reduces server load by sending only necessary data.</li>
</ul>

<p>
  <strong>Example:</strong> Clicking a button can fetch new product data from the server 
  and display it instantly without refreshing the page.
</p>

<p>👉 In short, <strong>AJAX revolutionized web development</strong> by enabling dynamic, interactive, and efficient web applications.</p>

<hr/>

<h2>🌐 API (Application Programming Interface)</h2>

<p>
  APIs (Application Programming Interfaces) play a pivotal role in enabling communication and interaction between different software systems. 
  But what exactly is an API, and why is it essential in the world of JavaScript programming? Let's explore the concept of APIs, 
  their importance, and how they're utilized with examples in JavaScript.
</p>

<h3>🔹 What is an API?</h3>
<p>
  An <strong>API</strong> acts as a messenger between different software applications. 
  It's a set of rules and specifications that define how applications communicate with each other to exchange data or functionality.
</p>
<p>
  Imagine we're at a restaurant:  
  <ul>
    <li>We (the user) tell the <strong>waiter (API)</strong> what we want to order (the request).</li>
    <li>The waiter delivers the request to the <strong>kitchen (server)</strong>.</li>
    <li>The kitchen prepares the food and the waiter brings it back (the response).</li>
  </ul>
  In this analogy, the <em>menu (API documentation)</em> describes the available dishes (functions) and how to order them.
</p>

<p>
  In short, an API facilitates data exchange and functionality sharing between different software components, 
  enabling seamless integration and interoperability.
</p>

<h3>🚀 Importance of APIs in JavaScript</h3>
<ul>
  <li><strong>Integration and Interoperability:</strong> Connects front-end and back-end systems for smooth communication.</li>
  <li><strong>Access to External Services and Data:</strong> Fetch data from social media, weather APIs, payment gateways, etc.</li>
  <li><strong>Enhanced Functionality:</strong> Extend applications without reinventing the wheel by using existing APIs.</li>
  <li><strong>Streamlined Development:</strong> Abstracts complex processes, speeding up development.</li>
  <li><strong>Scalability and Flexibility:</strong> Supports modular, scalable, and adaptable application design.</li>
</ul>

<h3>📌 Example: Fetching Data from a REST API</h3>
<pre>
<code>
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));
</code>
</pre>

<h3>📌 Example: Integrating with a Weather API</h3>
<pre>
<code>
const apiKey = 'YOUR_API_KEY';
const city = 'New York';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching weather data:', error));
</code>
</pre>

<h3>✅ Conclusion</h3>
<p>
  APIs are a cornerstone of modern web development, empowering JavaScript developers to access external data, 
  integrate with third-party services, automate workflows, and enhance functionality. 
  By understanding APIs and how to leverage them, we can build powerful, interconnected web applications 
  that deliver excellent user experiences and business value.
</p>

<hr/>


<section>
  <h2>✨ Promises in JavaScript</h2>
  <p>
    A <strong>Promise</strong> represents the eventual result of an asynchronous operation.  
    It helps us write async code in a cleaner and more manageable way.
  </p>

  <h3>🔹 Key Points</h3>
  <ul>
    <li><strong>States:</strong> Pending, Fulfilled, Rejected</li>
    <li><strong>Chaining:</strong> <code>.then()</code> and <code>.catch()</code></li>
    <li><strong>Parallel:</strong> <code>Promise.all()</code> for multiple promises</li>
    <li><strong>Async/Await:</strong> Cleaner and synchronous-looking async code</li>
  </ul>

  <h3>✅ Example</h3>
  <pre>
    <code>
const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Operation completed successfully");
  } else {
    reject("Operation failed");
  }
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));
    </code>
  </pre>

  <p>⚡ Use Promises to simplify async workflows and improve code readability!</p>
</section>


<hr/>

<h2>⚡ JavaScript Async/Await</h2>

<p>
  <strong>Async</strong> and <strong>Await</strong> are powerful features introduced in ECMAScript 2017 (ES8) 
  that simplify working with asynchronous JavaScript code, especially Promises. 
  They provide a more concise and synchronous-looking syntax for handling asynchronous operations.
</p>

<h3>🔹 Async Function</h3>
<p>
  Traditionally, handling asynchronous tasks involved using callbacks or chaining <code>then()</code> methods.  
  With ES2017, <strong>async/await</strong> revolutionized this approach by providing a cleaner, more intuitive syntax.  
</p>
<p>
  - The <strong>async</strong> keyword defines a function as asynchronous and ensures it returns a Promise.  
  - Inside an async function, the <strong>await</strong> keyword pauses execution until the Promise is settled (resolved or rejected).  
</p>

<h3>📌 Syntax of async/await Functions</h3>
<pre>
<code>
async function myAsyncFunction() {
    try {
        const result = await asyncOperation();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
</code>
</pre>
<p>
  Use <code>try...catch</code> to handle potential errors from rejected Promises.
</p>

<h3>📌 Example: Fetching Data with async/await</h3>
<pre>
<code>
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
</code>
</pre>
<p>
  In this example, <code>fetchData()</code> is an async function that uses <code>await</code> 
  to pause execution until the <code>fetch()</code> Promise resolves.  
  Once the response is received, <code>response.json()</code> is awaited to parse the JSON data.
</p>

<h3>🚀 Benefits of async/await</h3>
<ul>
  <li><strong>Improved Readability:</strong> Code looks more linear and easy to follow compared to nested callbacks or promise chains.</li>
  <li><strong>Error Handling:</strong> Simplifies handling errors with <code>try...catch</code>.</li>
  <li><strong>Sequential Execution:</strong> Allows writing asynchronous code in a synchronous-like manner.</li>
  <li><strong>Integration with Promises:</strong> Works seamlessly with existing promise-based APIs.</li>
</ul>

<h3>✅ Conclusion</h3>
<p>
  <strong>Async/await</strong> has become a game-changer for managing asynchronous operations in JavaScript.  
  It makes code cleaner, more efficient, and easier to maintain.  
  Whether fetching API data, handling async workflows, or building complex applications, 
  async/await is an essential tool in every modern JavaScript developer's toolkit.
</p>

<hr/>

<h2>🌐 Fetch API in JavaScript</h2>

<p>
  The <strong>Fetch API</strong> is a modern, promise-based interface for making HTTP requests. 
  It replaces the older <code>XMLHttpRequest</code> (XHR) with a simpler, more flexible, and cleaner syntax.  
  Fetch supports GET, POST, and other HTTP methods, with built-in JSON handling.
</p>

<h3>📌 Usage</h3>
<p><strong>GET Request:</strong></p>
<pre>
<code>
fetch('https://api.example.com/data')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
</code>
</pre>

<p><strong>POST Request:</strong></p>
<pre>
<code>
const postData = { username: 'example', password: 'password123' };

fetch('https://api.example.com/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(postData)
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
</code>
</pre>

<h3>🚀 Importance</h3>
<ul>
  <li><strong>Simple & Readable:</strong> Cleaner than XHR.</li>
  <li><strong>JSON Support:</strong> Built-in JSON handling.</li>
  <li><strong>Promise-based:</strong> Works smoothly with async/await.</li>
  <li><strong>CORS Support:</strong> Handles cross-origin requests easily.</li>
</ul>

<h3>✅ Conclusion</h3>
<p>
  The <strong>Fetch API</strong> is the modern standard for network requests in JavaScript.  
  With simplicity, flexibility, and performance, it’s the preferred choice for building dynamic web apps.
</p>

<hr/>






