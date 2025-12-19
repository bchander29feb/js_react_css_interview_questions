Spread Operator:
Spread operator array या object को फैलाकर individual elements/keys में बदल देता है।


Rest Operator:
Rest operator remaining items को collect करके array या object में store करता है।

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10




Shallow Copy क्या होता है?
Shallow copy में सिर्फ top-level values की copy बनती है।
अगर object के अंदर nested object / array है, तो उसका reference copy होता है।

const obj1 = {
  name: 'Rahul',
  address: {
    city: 'Delhi'
  }
};

const obj2 = { ...obj1 }; // shallow copy
Deep Copy क्या होता है?
Deep copy में object की हर level की copy बनती है।
Nested objects भी completely new होते हैं।
👉 मतलब: कोई भी change original को affect नहीं करेगा।

const obj1 = {
  name: 'Rahul',
  address: {
    city: 'Delhi'
  }
};
const obj2 = JSON.parse(JSON.stringify(obj1));



What is short-circuit evaluation?

false && console.log("Won’t run");
पहला value false है
AND के लिए दोनों true चाहिए
➡️ इसलिए JavaScript आगे evaluate नहीं करता
➡️ console.log() कभी run नहीं होगा



true || console.log("Won’t run");

2. OR (||) Operator – Stops when it finds true
पहला value true है
OR को सिर्फ एक true चाहिए
➡️ इसलिए JS आगे check नहीं करता
➡️ console.log() नहीं चलेगा


Short-Circuit Evaluation – Full Explanation Answers
console.log("Hi" && "Hello");
Output: "Hello"
Both truthy → && returns the last value.

isAdmin && showAdminPanel();
If isAdmin is truthy → function runs.


function test() {
  console.log("called");
  return true;
}

console.log(false && test());
false && ... stops early → test() never runs.

console.log(true || test());
Same reason — || returns first truthy → test() not executed.


if (a) {
  if (b) {
    doSomething();
  }
}

Short-circuit way
a && b && doSomething();

console.log([] && "Hello");
Output: "Hello"
[] is truthy → returns next value

console.log({} || "World");
Output: {}
Objects are truthy → so returned immediately.

console.log(undefined && 50);
Output: undefined
undefined is falsy → && stops early.

.How React uses short-circuit evaluation?

{isLoggedIn && <Dashboard />}

✔ If isLoggedIn = true → Dashboard renders
✔ If false → nothing renders
React uses short-circuit to conditionally render components.

console.log("Hi" || console.log("Bye"));
✔ Output: "Hi"






Debounce – Real-Life Use Cases (Hindi में)
Debounce का मतलब है:
👉 “User बार-बार action करे, पर काम सिर्फ आखिरी बार हो।”
⭐ 1. Search Box में API Call कम करना (सबसे famous use case)

User typing करते समय हर key-press पर API call मत करो।
रुको… जब user टाइप करना रोक दे 300–500ms तक, तब API call करो।
✔ फायदा:
Server load कम
UI smooth
Extra API calls avoid

2. Window Resize event
User window बार-बार resize करता है → बहुत events fire होते हैं।
Debounce करने से performance improve होती है।
Autocomplete Suggestions
User टाइप करता रहता है → हर key पर suggestion मत दिखाओ।
रुको, जब user ने typing रोक दी → तब update करो।
Throttle – Real-Life Use Cases (Hindi में)
Throttle का मतलब:
button disalbed and live chat button disalbed are good exapoles 
“User चाहे कितनी बार action करे, पर function सिर्फ fixed time gap में ही चलेगा।
Scroll बहुत fast होता है।
हर scroll पर calculate/update करना भारी पड़ता है।
Throttle इस्तेमाल करने से:
✔ हर 200ms में सिर्फ एक बार function चलेगा
✔ performance high

What is throttling?
function callbackAction() {
  console.log('Button action executed!');
}

function throttle(callback, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;

      const btn = document.getElementById('btn');
      btn.disabled = true; // disable immediately

      setTimeout(() => {
        callback(...args); // perform the action
        btn.disabled = false; // enable after delay
      }, delay);
    }
  };
}

const throttledClick = throttle(callbackAction, 2000);

document.getElementById('btn').addEventListener('click', throttledClick);


What is debouncing, create custom hook in react ?

Useful to reduce unnecessary function calls, especially for high-frequency events.
Input fields (onChange)
Search bars / autocomplete
Window resize events
Scroll events

debounce custom hook:
import { useEffect } from 'react';

const useDebounce = (val, delay) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(val);
    }, delay);
    return () => clearTimeout(timer);
  }, [val,delay]);
};

export default useDebounce;

debounce search input:

import { useState } from 'react';
import useDebounce from '../custom-hook/useDebounce';
const Search = () => {
  const [inputText, setInputText] = useState('');

  const debounceValue = useDebounce(inputText, 1000);
  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </>
  );
};

export default Search;



What is a Pure Function?
A pure function is a function that:
Always returns the same output for the same input.
Does not cause side effects (does not modify external variables, objects, or states).


What is the event loop?
JavaScript is single-threaded, meaning it can execute one task at a time.
The event loop is a mechanism that handles asynchronous operations (like setTimeout, fetch) without blocking the main thread.

What is the difference between undefined and null?
undefined : Meaning: A variable that has been declared but not assigned a value.
null : Represents intentional absence of any value


Why arrow functions don’t have their own this?
Arrow functions in JavaScript don’t have their own this because they are lexically scoped.
In arrow functions, this is inherited from the surrounding (parent) scope where the function is defined.

What are template literals?
Template Literals in JavaScript are a way to create strings using backticks (`) instead of quotes.
They allow embedded expressions, multi-line strings, and easier string interpolation.
const name = "Bhuvan";
console.log(`Hello, ${name}!`); // Hello, Bhuvan!

what is Lexical scope means: ?
A function can access variables that are defined in its outer (parent) scope.
JavaScript decides the scope of a variable based on where it is written in the code, not where it is called from.

function outer() {
  let name = "Bhuvan";
  function inner() {
    console.log(name); // inner can access outer variables
  }
  inner();
}

outer();



JavaScript moves variable and function declarations to the top of their scope before executing the code.
This is why you can use a function or variable before it is declared.


Strict mode is a special mode in JavaScript that makes your code safer by preventing common mistakes and errors.
It helps catch things like:
using undeclared variables
duplicate keys
unsafe actions


what is currying in js ?
Converting a function that takes multiple arguments into a series of functions, each taking one argument. ?
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

add(1)(2)(3); // 6


what is Event Delegation ?
https://youtu.be/MX48mv73jf8?si=wXDcqBLhzeR-4Eb_
Event Delegation is a JavaScript technique where you attach a single event listener to a parent element, 
and that listener handles the events of its child elements — even if those child elements are added later dynamically
<ul id="list-item">
      <li>first</li>
      <li>second</li>
      <li>third</li>
      <li>fourth</li>
      <li>fifth</li>
      <li>sixth</li>
  </ul>

let listitem = document.getElementById('list-item');
listitem.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    console.log(e.target.textContent);
  }
});




what is event propagation(event bubling and capturing) ?

// event bubling
document.getElementById('top').addEventListener('click', () => {
  console.log('top clicked');
});
document.getElementById('mid').addEventListener('click', () => {
  console.log('mid clicked');
});
document.getElementById('child').addEventListener('click', () => {
  console.log('child clicked');
});

// event capturing
document.getElementById('top').addEventListener(
  'click',
  () => {
    console.log('top clicked');
  },
  true
);
document.getElementById('mid').addEventListener(
  'click',
  () => {
    console.log('mid clicked');
  },
  true
);
document.getElementById('child').addEventListener(
  'click',
  () => {
    console.log('child clicked');
  },
  true
);

// stopPropagation 
document.getElementById("child").addEventListener("click", (e) => {
  e.stopPropagation();  // Stop bubbling!
  console.log("Child clicked");
});



why we use promise in js ?
We use Promises in JavaScript to handle asynchronous operations in a clean, predictable, and readable way.

what is higher order function in js ?
Any function that takes a function OR returns a function is a Higher-Order Function.
Even if only one condition is true—it is still a HOF. map is also a heigher order function

let arr = [1, 2, 3, 4, 5, 6, 7];
let doubled = arr.map(function (num, index) {
  return num * 2;
});
console.log(doubled);

Why do we need Closures in JavaScript?
Closures are very important because they solve 3 major problems.

1️⃣ To create Private Variables
Sometimes we want a variable that cannot be accessed or modified from outside.
Closure keeps that variable safe and hidden.

function counter() {
  let count = 0; // private variable

  return function () {
    count++;
    console.log(count);
  };
}


function outer() {
  let count = 0;
  function inner() {
    count++;
    return `count value is from inner First ${count}`;
  }
  function innerSecond() {
    count += 2;
    return `count value is from innerSecond : ${count}`;
  }
  return [inner, innerSecond];
}
const [firstFn, secondFn] = outer();
console.log(firstFn());
console.log(secondFn());




2️⃣ To Remember Values even after the Parent Function finishes

Normally, when a function ends, all its variables are deleted.
But a closure allows an inner function to remember the variables of the outer function,
even after the outer function has finished executing.

function greet(name) {
  return function () {
    console.log("Hello " + name);
  };
}

let sayHello = greet("Bhuvan");
sayHello(); // "Hello Bhuvan"


3️⃣ Useful in async operations (setTimeout, event listeners, etc.)

In delayed tasks, the outer function may finish,
but closure keeps the variables alive for later.

function showMessage() {
  let message = "Welcome!";

  setTimeout(() => {
    console.log(message);
  }, 2000);
}
showMessage();



What does setTimeout return?
Answer:
It returns a timer ID (number) which can be used to cancel the timeout using clearTimeout().
const id = setTimeout(() => console.log("Hello"), 2000);
clearTimeout(id); // cancels the timeout


JavaScript में Data Types

JavaScript में Data Types को समझना बहुत जरूरी है क्योंकि ये तय करते हैं कि variable में कौन सा प्रकार का data store होगा और उस पर कौन से operations किये जा सकते हैं।

1️⃣ Primitive Data Types (मूल प्रकार)
Primitive data types में stored value खुद variable में रखी जाती है और ये immutable (बदल नहीं सकती) होती हैं।
Primitive Data Types in JavaScript: String, Number, Boolean, Undefined, Null, Symbol, BigInt

2️⃣ Non-Primitive / Reference Data Types (संदर्भ प्रकार)
Non-primitive data types में values reference के द्वारा store होती हैं।
इनमें multiple values या complex data structures store किए जा सकते हैं।

Non-Primitive (Reference) Data Types in JavaScript: Object, Array, Function


Symbol क्यों इस्तेमाल किया जाता है?
Symbol का main use होता है जब हम object के अंदर unique keys बनाना चाहते हैं
जो किसी और key से conflict (टकराए) न करें।

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // false

const user = {
  name: "Bhuvan",
  age: 25,
};

let id = Symbol("id");

user[id] = 101;

console.log(user);        // { name: 'Bhuvan', age: 25, [Symbol(id)]: 101 }
console.log(user.id);     // undefined ❌ (क्योंकि key Symbol है)
console.log(user[id]);    // 101 ✅

🔹 यहाँ Symbol key को accidentally override नहीं किया जा सकता।
🔹 यह key hidden रहती है जब हम object को loop करते हैं।




what is the viete and Webpack  ? 
Vite = Modern, तेज़ और आसान frontend build tool जो development और production दोनों के लिए optimized है।



1️⃣ Promise.all
क्या करता है:
Promise.all एक array के सारे promises को एक साथ run करता है और जब सभी complete हो जाएँ तभी result return करता है।
अगर कोई भी promise reject हो जाए तो पूरी Promise.all reject हो जाती है।

2️⃣ Promise.allSettled

क्या करता है:
Promise.allSettled भी सारे promises को run करता है, लेकिन reject होने पर भी error नहीं फेंकता।
यह सभी promises के status और value के साथ result return करता है

Promise.race क्या है?
Promise.race एक array of promises लेता है और सबसे पहले settle (fulfilled या rejected) होने वाले promise का result return करता है।
💡 मतलब: जो promise सबसे पहले complete होगा, वही output देगा — बाकी promises ignore कर दिए जाते हैं।

Promise.any(iterable) एक ऐसा Promise लौटाता है जो पहली सफल (fulfilled) Promise के साथ resolve होता है। इसका मतलब है कि यह सिर्फ पहली सफल Promise का इंतजार करता है और reject (error) वाली Promises को अनदेखा कर देता है। जैसे ही कोई Promise सफल होती है, यह उसी का परिणाम (value) return कर देता है। ✅


1.CDN क्या है?
CDN एक ऐसा network है जो आपकी website या application की static files जैसे कि JavaScript, CSS, images, fonts, या libraries को दुनिया भर के अलग-अलग servers पर store करके रखता है।
ताकि जब कोई user आपकी site खोले, तो ये files उसके सबसे नज़दीकी server से load हों और site तेज़ी से खुले।
Simple Example
मान लो तुम्हें अपने project में Bootstrap या jQuery use करना है।
तुम सीधे CDN link use कर सकते हो, बिना file download किए:





CDN के फायदे
⚡ तेज़ load होती हैं क्योंकि nearest server से आती हैं
🧰 Libraries manually download करने की ज़रूरत नहीं
🌍 Cached होती हैं, repeat users के लिए और भी तेज़
📦 Lightweight setup, small projects के लिए आसान

CDN = एक global network जो आपकी website की static files को users तक fast और efficiently deliver करता है।


2.prototype  =>  n JavaScript, every function and object has a hidden property called prototype (for functions) or __proto__.  (for objects).   (=> Inheritance means an object can access properties and methods from another object.
 In JavaScript, this happens through the prototype chain.
 
 🔹 Prototype क्या होता है?

Prototype एक object होता है,
जो दूसरे objects को property और method use करने की सुविधा देता है।
यानि — एक object दूसरे object से features ले सकता है।



let obj = {
  name: 'bhuvan',
  age: 25,
  details: function () {
    return this.name + ' ' + this.age;
  },
};

with  the help of __proto__ i can access all old object values like : __proto__.name, __proto__.age
and if you are console it {obj1.__proto__}.
i will get all values and methods of old object

let obj1 = {
  weight: '65kg',
  height: '165cm',
  __proto__: obj,
};

console.log(obj1.details());

 
 3.Call, Apply और Bind methods ?

if we have a mthod and mehtod we have in one object and we want to use the same methods in another object
then we can use call apply bind methods

we are using this mehtods becuase we have same property abd for the same property we are not create same mehtod
agin and agin that's the reson we will use same mthods for all object.

with the help of  __proto__ we can acces old object all values and methods as well but here we will acess only
method becuase for all object properties are same.

Call, Apply और Bind methods JavaScript में function borrowing के लिए use होते हैं।
यानि — जब एक object का method किसी दूसरे object के साथ use करना हो।

1️⃣ Call()
👉 Call() method function को तुरंत call करता है,
और arguments को comma-separated तरीके से पास करता है।

const person1 = {
  name: "Bhuvan",
  greet: function (city) {
    console.log(`Hello, I am ${this.name} from ${city}`);
  }
};

let old_object = {
  name: 'bhuvan',
  age: 25,
  weight: '70kg',
  details: function () {
    return this.name + ' ' + this.age + ' ' + this.weight;
  },
};

let new_object = {
  name: 'bhuvan',
  age: 25,
  weight: '70kg',
};

console.log(old_object.details.call(new_object));
const person2 = { name: "Chander" };

// person1 का greet method person2 के साथ use किया
person1.greet.call(person2, "Hyderabad");


2️⃣ Apply()
👉 Apply() भी call() जैसा ही है,
बस फर्क इतना है कि arguments array के रूप में पास करते हैं।

person1.greet.apply(person2, ["Delhi"]);


3️⃣ Bind()

👉 Bind() function को immediately execute नहीं करता,
बल्कि एक नया function return करता है,
जिसमें this permanently set हो जाता है।

const newFunc = person1.greet.bind(person2, "Mumbai");
newFunc(); // अब यह बाद में call होगा

let old_object = {
  name: 'bhuvan',
  age: 25,
  weight: '70kg',
  details: function (state, country) {
    return (
      this.name +
      ' ' +
      this.age +
      ' ' +
      this.weight +
      ' ' +
      state +
      ' ' +
      country
    );
  },
};

let new_object = {
  name: 'bhuvan',
  age: 25,
  weight: '70kg',
};

console.log(old_object.details.call(new_object, 'India', 'Delhi'));
console.log(old_object.details.apply(new_object, ['India', 'HYD']));
let newobje = old_object.details.bind(new_object, 'India', 'Goa');
console.log(newobje());
 ===>in bind it will return an function

)


4.async  => async in JavaScript is a keyword used before a function to make it return a Promise, and it lets you use await inside that function to handle asynchronous code more easily. ✅
🧠 Async Function क्या है?
async keyword किसी function के सामने लगाया जाता है।
इसका मतलब है कि यह function promise return करेगा, चाहे तुम explicitly return न भी करो।
async function के अंदर हम await का use कर सकते हैं।

🧠 Await क्या है?
await सिर्फ async function के अंदर use होता है।
यह किसी promise का result wait करता है और फिर आगे का code execute करता है।
Essentially, यह asynchronous code को synchronous जैसा बना देता है।



3.  Event loop  => The event loop in JavaScript is the mechanism that allows asynchronous code (like setTimeout, fetch, or promises) to run without blocking the main thread.  ( JavaScript is single-threaded — it can only do one thing at a time.
        But we still want asynchronous behavior (e.g., timers, network calls, DOM events).) Event Loop Rules Recap
Call Stack → Executes synchronous code first.

🧠 Event Loop क्या है?
JavaScript single-threaded language है,
यानि एक समय में केवल एक काम कर सकती है।

लेकिन JavaScript में asynchronous काम भी होते हैं (जैसे timers, API calls),
और इसे manage करने के लिए Event Loop काम आता है।


Call Stack
यहाँ functions line by line execute होते हैं।
जो function call होता है, वह stack में जाता है और execute होने के बाद remove हो जाता है।
Web APIs / Browser APIs
setTimeout, fetch, DOM events आदि यहाँ चलते हैं।
ये asynchronous होते हैं और stack से अलग होते हैं।
Callback Queue (Task Queue)
जब asynchronous operation complete होता है, callback यहाँ add होता है।
Event Loop
Continuously check करता है कि call stack empty है या नहीं।
अगर stack empty है, तो callback queue से function को stack में push करता है और execute कर देता है।



console.log("Start");

setTimeout(() => {
  console.log("Timeout finished");
}, 0);

console.log("Start") → तुरंत execute होता है
setTimeout(..., 0) → asynchronous, callback queue में भेजा जाता है
console.log("End") → तुरंत execute होता है
Call stack empty होने के बाद, event loop Timeout finished को stack में भेजता है और execute करता है


4.what is Macro-task and Micro-task ?

JavaScript में asynchronous operations दो प्रकार के tasks में divide होते हैं:
Macro-task (Task Queue)
Micro-task (Microtask Queue)


1️⃣ Macro-task 

इसे Task Queue भी कहते हैं।

इसमें आते हैं:
setTimeout
setInterval
setImmediate (Node.js)
I/O events

Event Loop पहले call stack को empty करता है,
फिर micro-tasks को run करता है,
और फिर macro-tasks को execute करता है।

2️⃣ Micro-task
इसे Microtask Queue भी कहते हैं।
इसमें आते हैं:
Promise.then()
MutationObserver
queueMicrotask()
Micro-tasks macro-tasks से पहले execute होते हैं।
मतलब call stack empty होने के बाद micro-task queue पहले clear होती है, फिर macro-task queue execute होती है।


5 forEach  => forEach in JavaScript is a method that lets you loop through each element of an array and run a function on it.

👉 It does not return a new array (always returns undefined).

👉 It’s mainly used for side effects (like printing, updating, etc.). 
Think of forEach as a shortcut for for loops when you just want to "do something" with every item. 

5.map in JavaScript is a method that loops through an array, applies a function to each element, and returns a new array with the results. 
👉 Used to transform each element of an array.
👉 Returns a new array of the same length. 
✅ Key point: Unlike forEach, map always returns a new array. 

6.filter => 
👉 Used to filter out elements that don’t match a condition.
 👉 Returns a new array (length may be smaller).
7. reduce => 
👉 Used to accumulate values (reduce the array to a single value).
 👉 Takes an accumulator + current value and returns one final result.

8. Promise and async/await
A Promise is an object that represents a value which will be available now, later, or never.
It has 3 states: pending → fulfilled → rejected.

async/await
async/await is syntactic sugar on top of promises → makes async code look like synchronous code.
await pauses execution until the promise resolves/rejects.

9. Difference between function declaration and function expression.
Function Declaration
A function defined with the function keyword directly.
It is hoisted → meaning you can call it before it’s defined
// ✅ Function Declaration
function greet() {
  return "Hello!";
}

🔹 Function Expression
A function stored inside a variable.
Not hoisted → you can only call it after it’s defined.
// ✅ Function Expression
const greet = function () {
  return "Hello!";
};
10. What is IIFE? Give an example. 
An IIFE is a function in JavaScript that runs immediately after it is defined.

(function() {
  console.log("This runs immediately!");
})();

const result = (function(a, b) {
  return a + b;
})(5, 10);

console.log(result); // 15
11.Difference between synchronous and asynchronous JavaScript.
Synchronous JavaScript
Code runs line by line, one after another.
Each statement must finish before the next starts.
If one task takes a long time, it blocks the rest.

Asynchronous JavaScript
Code doesn’t wait for tasks to finish.
Long tasks run in the background, and the rest of the code continues.
Uses callbacks, promises, async/await.

11. axios => 

Axios क्या है?
Axios एक लोकप्रिय JavaScript लाइब्रेरी है जिसका इस्तेमाल ब्राउज़र और Node.js में HTTP requests (API calls) करने के लिए किया जाता है।
आप इसे GET, POST, PUT, DELETE  
 जैसी requests भेजने के लिए इस्तेमाल कर सकते हैं।
यह Promises पर आधारित है, यानी async/await या .then().catch() के साथ काम करता है।
इसे React, Vue, Angular या किसी भी JavaScript प्रोजेक्ट में इस्तेमाल किया जा सकता है।

Post ===> create a new account 
Get ==== > means we request give some data and will read it
put/patch ==> means update the phone number or something 
delete ===> delete the data something 


Axios के फायदे
सरल और आसान – fetch API के मुकाबले syntax ज्यादा आसान है।
Promise आधारित – async/await के साथ clean code लिख सकते हैं।
Request और Response को auto JSON में बदलता है – manual parsing की जरूरत नहीं।
Error handling आसान – .catch() या try/catch से।
Browser और Node.js दोनों में काम करता है।

axios uses in simple way ===>

const getdata = async() => {
  try{
	 let res = await axios.get(api)
  }
  catch(error){
    console.log(error)
  }
}

useEffect(() => {
getdata()

},[])

==========================>
 axiox uses as a professinal way ===>
 first create a service folder ===> service  === > create axios instent 
 
 const api = axios.create({
   
   baseURL : 'https://jsonplaceholder.typicode.com'
 
 });
 

const getDataApi = () => {
  return api.get('/posts') 
 
}
       ====> call here this api 
	   import{getDataApi} './api/postapi' fr
	   
	   const postourData = async() => {
	   
		try{
			let res = await getDataApi();
		}
		catch(error){
		  console.log(error)

		}
	   
	   useEffect(() => {
		postourData()
	   },[])


Axios is a JavaScript library that makes it easy to send HTTP requests (like GET, POST, DELETE) to a server and get data back.
Works in browser and Node.js
Uses Promises, so you can handle results with .then() or async/await
Automatically parses JSON responses

12. How to compare two Arrays are Equal or Not in JavaScript ?
let result = arr1.length === arr2.length && arr1.every((currElm, index) => currElm === arr2[index])
   console.log(result)

=============================================>>>>>>>>>>>>>>>>>simple javascript questions 
1. Closure क्या है?
जब एक inner function, अपने outer function के variables को access कर सकता है
— भले ही outer function return हो चुका हो,
उसे closure कहा जाता है।
यानि कि function अपने आस-पास (scope chain) के data को "याद" रखता है।

function outer() {
  let count = 0;
  function innter() {
    count++;
    return count;
  }
  return innter;
}

let result = outer();
console.log(result());
console.log(result());
console.log(result());
console.log(result());


2. Callback Function एक ऐसा function होता है जिसे हम दूसरे function के argument के रूप में pass करते हैं और बाद में उसे execute किया जाता है।
React और JavaScript में यह बहुत common है, खासकर asynchronous operations और event handling में।

function sayooodBye() {
  return 'Good Bye ....';
}

function parent(myname, callback) {
  console.log(`Hi ${myname}`);

  setTimeout(() => {
    console.log(callback());
  }, 4000);
}

parent('Bhuvan', sayooodBye);

3.Higher Order Function (HOF) क्या होता है?

JavaScript में Higher Order Function (HOF) वो function होता है जो:
एक या एक से ज्यादा functions को argument के रूप में ले सकता है, या
एक नया function return कर सकता है
या कहें तो, function जो दूसरे function के साथ काम करता है (लेता है या return करता है) = Higher Order Function।

function greet(name) {
  return "Hello " + name;
}

function higherOrder(fn, value) {
  return fn(value); // fn को call कर रहा है
}

console.log(higherOrder(greet, "Bhuvan")); 
// Output: Hello Bhuvan

4.Hoisting क्या है और यह कैसे काम करता है?
Hoisting is JavaScript’s default behavior of moving variable and function declarations to the top of their scope before the code is executed.
You can use a variable or function before it is declared (but the behavior depends on whether you used var, let, const, or function).

5.Temporal Dead Zone (TDZ) क्या होती है?
Temporal Dead Zone (TDZ) जावास्क्रिप्ट में एक ऐसा समय (या एरिया) होता है जहाँ कोई वेरिएबल डिक्लेयर तो हो चुका होता है, लेकिन उसका इस्तेमाल करने से पहले उसे वैल्यू असाइन नहीं की गई होती है।
👉 यानी, अगर आप let या const से डिक्लेयर किए गए वेरिएबल को उसके डिक्लेरेशन से पहले एक्सेस करने की कोशिश करते हैं, तो ReferenceError आता है।
इस समय को ही Temporal Dead Zone (TDZ) कहा जाता है।

🧠 आसान शब्दों में:
जब जावास्क्रिप्ट कोड रन होता है, तब वेरिएबल्स को पहले "होइस्ट" किया जाता है।
लेकिन let और const वाले वेरिएबल्स को जब तक असली डिक्लेरेशन लाइन तक नहीं पहुँचा जाता, तब तक वे TDZ में रहते हैं, यानी उन तक पहुंचना मना है।

console.log(a); // ❌ ReferenceError (TDZ)
let a = 10;
console.log(a); // ✅ 10

6.
Closure वह JavaScript का feature है जिसमें एक inner function अपने outer function की variables और scope को याद रखता है, भले ही outer function execution complete हो गया हो।


React में Closures कहाँ काम आते हैं?
State Updates में
जब आप functional component में useState या useReducer का उपयोग करते हैं, closures मदद करते हैं पुरानी state को याद रखने में।
const [count, setCount] = useState(0);
const handleClick = () => {
  setCount(prev => prev + 1); // यहाँ prev पुरानी state closure से आती है
};

Event Handlers में
Event handlers अपने parent scope की variables को याद रखते हैं।
function Counter() {
  let count = 0;
  const increment = () => {
    count++;
    console.log(count);
  };
  return <button onClick={increment}>Increment</button>;
}

7.Callback function क्या है?

Callback Function एक ऐसा function होता है जिसे दूसरे function को argument के रूप में pass किया जाता है और बाद में उसे call किया जाता है।
यानि, एक function दूसरे function को input के रूप में लेता है और उसे किसी खास समय पर execute करता है।

function saygoodby() {
  return 'Best of luck...';
}
function parentone(val, callback) {
  console.log(`Hi ${val}`);

  setTimeout(() => {
    console.log(callback());
  }, 1000);
}

parentone('Bhuvan', saygoodby);

8.Higher Order Function (HOF) क्या होता है?

JavaScript में Higher Order Function (HOF) वो function होता है जो:
एक या एक से ज्यादा functions को argument के रूप में ले सकता है, या
एक नया function return कर सकता है
या कहें तो, function जो दूसरे function के साथ काम करता है (लेता है या return करता है) = Higher Order Function।

function greet(name) {
  return "Hello " + name;
}

function higherOrder(fn, value) {
  return fn(value); // fn को call कर रहा है
}

console.log(higherOrder(greet, "Bhuvan")); 
// Output: Hello Bhuvan


9.Pure Function क्या होती है?
Pure Function एक ऐसा function होता है जो हमेशा वही output देता है जब उसे वही input दिया जाता है और किसी भी बाहरी state को modify नहीं करता।
it wll not depend on external factor it will depend only on internal factor.

Same Input → Same Output:
अगर आप same arguments pass करेंगे तो हमेशा same result आएगा।
No Side Effects:
Function के अंदर कोई external variable, DOM, या database modify नहीं होता।

// Pure Function
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (same input, same output)


Impure Function Example:
let count = 0;
// Impure Function (side effect: modifies external variable)
function increment() {
  count++;
  return count;
}

console.log(increment()); // 1
console.log(increment()); // 2 (same input, different output)
यहाँ increment function impure है क्योंकि यह external variable count को modify करता है।

React में क्यों important है?
Pure functions predictable होते हैं।
State management (Redux, useReducer) और component re-rendering में performance और debugging आसान हो जाता है।
Example: map, filter, और reduce JavaScript में pure functions की तरह काम करते हैं।


Deep Copy और Shallow Copy में फर्क क्या है?

10. Shallow Copy (ऊपरी लेवल की नकल)
Shallow copy सिर्फ top-level properties को copy करता है।
अगर object के अंदर nested object या array है, तो references share होते हैं।

const person = {
  name: 'Bhuvan',
  age: 32,
  address: {
    city: 'Delhi',
    pincode: 110001,
  },
};

const perchanShallow = { ...person };


// it will not change the value of top levle only will change nested one
console.log(person.address.city);
console.log(person.age);

// onlynested value will be effected after copying the obj by using shallow copy
perchanShallow.address.city = 'Hyd';
perchanShallow.age = 50;


//deep copy 
Deep copy में पूरा object, nested objects और arrays अलग memory में copy होते हैं।
Original object पर कोई effect नहीं पड़ता।

const original = {
  name: 'Bhuvan',
  age: 32,
  address: {
    city: 'Delhi',
    pincode: 110001,
  },
};

const deepcopy = JSON.parse(JSON.stringify(original))

// ther will be complete new copy of object so effect will be apply here
 deepcopy.name = "Rahul"
 console.log(original.name)

 // for nested will be smae
 deepcopy.address.pincode = 110084
 console.log(original.address.pincode)

11.Map, Filter और Reduce में क्या अंतर है?

1. Map

Purpose: Array के हर element पर operation करना और नया array return करना।
Input → Output: पुराने array के size के बराबर नया array मिलता है।
Original Array: Unchanged रहता है।
Example:
const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);
console.log(squared); // Output: [1, 4, 9, 16]

2. Filter
Purpose: Array के element को condition के आधार पर filter करना।
Input → Output: नया array सिर्फ़ वही elements देगा जो condition pass करें।
Original Array: Unchanged रहता है।
Example:
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

3. Reduce
Purpose: Array के सभी elements को combine करके single value बनाना।
Input → Output: एक single value return करता है।
Original Array: Unchanged रहता है।
Example:
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 10

11.

1. for...in
Purpose: Object या Array की keys (indexes या properties) पर loop चलाने के लिए।
Use case: जब आपको key/index चाहिए।
Output: हर iteration में key/index मिलता है।
Example (Object):
const person = { name: "Bhuvan", age: 25 };
for (let key in person) {
  console.log(key);       // Output: "name", "age"
  console.log(person[key]); // Output: "Bhuvan", 25 //  Array में values directly नहीं देता, values access करने के लिए array[index] करना पड़ता है।
}
for...in
Objects में keys (property names) पर iterate करता है।
Arrays में indices (index numbers) पर iterate करता है।
Array में values directly नहीं देता, values access करने के लिए array[index] करना पड़ता है।

const numbers = ['bhuvan', 'ram', 'syam', 'kalpana', 'geeta', 'sikha', 'kabir'];
for (let key in numbers) {
  console.log(key);
}

// if you wnat to access the key value then we need to do like this 

const numbers = ['bhuvan', 'ram', 'syam', 'kalpana', 'geeta', 'sikha', 'kabir'];
for (let key in ) {
  console.log(numbers[key]);
}




2. for...of
Purpose: Array, String या Iterable object के values पर loop चलाने के लिए।
Use case: जब आपको value चाहिए।
Output: हर iteration में value directly मिलता है।
Example (Array):
const numbers = [10, 20, 30];
for (let value of numbers) {
  console.log(value); // Output: 10, 20, 30
}

for...of
Arrays, strings, Maps, Sets जैसी iterable values पर iterate करता है।
Array के values सीधे access करता है।

// for will return oinly value of arrya adn object
const numbers = ['bhuvan', 'ram', 'syam', 'kalpana', 'geeta', 'sikha', 'kabir'];
for (let items of numbers) {
  console.log(items);
}

for (let value of Object.values(person)) {
  console.log(value);
}


12.Optional Chaining (?.) क्या करता है?

1️⃣ Simple Definition (सिंपल में)
Normally अगर आप किसी object की property access करते हो और वो undefined या null हो → error आएगा।
Optional Chaining ?. use करके आप error को avoid कर सकते हो और अगर value नहीं है तो undefined return होगा।

const user = {
  name: 'Bhuvan',
  address: {
    city: 'Delhi',
  },
};
// Normally
console.log(user.address.city); // "Delhi"
// console.log(user.contact.city); // Error: Cannot read property 'city' of undefined

// Optional chaining
console.log(user.contact?.city); // undefined, error नहीं आएगा
Optional Chaining (?.) JavaScript में एक safe way है किसी object, array, या function की deeply nested property को access करने का। इसका फायदा ये है कि अगर कोई intermediate value null या undefined हो तो error नहीं आएगा, बस undefined return होगा।


13. Arrow function और normal function में क्या अंतर है?
Arrow Function और Normal Function (Traditional Function) में मुख्य अंतर:
Normal function:

// this behavior
Normal function: अपने context के हिसाब से this decide करता है।

const obj = {
  name: "Bhuvan",
  greet: function() {
    console.log(this.name);
  }
};
obj.greet(); // Bhuvan

Arrow function: this lexical होता है, यानी outer scope का this use करता है।

Single expression के लिए {} और return optional है।
Multiple statements के लिए {} और return जरूरी।

onst obj = {
  name: "Bhuvan",
  greet: () => {
    console.log(this.name);
  }
};
obj.greet(); // undefined (arrow function अपने this को bind नहीं करता)


Arrow function: Short, inline callback, array methods (map, filter, reduce) में best।
Normal function: Methods, constructors, और dynamic this वाले cases में best।



14.this keyword कैसे काम करता है?

this keyword JavaScript में
this उस context को refer करता है जिसमें function या code execute हो रहा है। इसका behavior execution context पर depend करता है।

1️⃣ Global context में
Browser में global scope में this → window object को refer करता है।

Function context में
Normal function:
Non-strict mode → global object (window)
Strict mode → undefined

Arrow function:
this lexical होता है, मतलब outer scope का this।


3️⃣ Object के method में
Normal function: this object को refer करता है जिसमें function defined है।

Arrow function: outer scope का this लेता है।


15.Function currying क्या होती है?

Function currying क्या होती है?

Function currying एक तकनीक है जिसमें एक function जो multiple arguments लेता है, उसे एक-एक argument लेने वाले functions की श्रृंखला में बदल दिया जाता है।
मतलब: एक function को कई छोटे functions में तोड़ देना, हर function एक argument लेता है।

// Normal function
function add(a, b, c) {
  return a + b + c;
}
console.log(add(2, 3, 4)); // 9

// Curried function
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    }
  }
}

console.log(curriedAdd(2)(3)(4)); // 9

🎯 Currying का इस्तेमाल क्यों करते हैं
1. ✅ Reusability (बार-बार इस्तेमाल करने योग्य)
आप किसी function का एक हिस्सा “fix” कर सकते हैं।

Function Composition आसान बनाता है
Currying से functions को जोड़ना और chain करना आसान हो जाता है।

Readable और Modular Code
हर function सिर्फ़ एक काम करता है — इससे कोड पढ़ने और टेस्ट करने में आसानी होती है।

एक ही function को बार-बार अलग तरह से इस्तेमाल कर सकते हैं
कुछ arguments को पहले से fix कर सकते हैं
Code modular और readable बनता है
Functional programming में आसानी होती है





16.Memoization क्या है? 🧠

Simple Definition (सरल शब्दों में):
Memoization एक performance optimization technique है जिसमें किसी function का result cache (memory) में store किया जाता है ताकि जब वही input दोबारा आए तो function को दोबारा execute न करना पड़े — बल्कि पहले से stored result को सीधे return कर दिया जाए।
मतलब:
👉 एक बार calculation करो, result याद रखो (cache में),
👉 अगली बार वही input आए तो दोबारा calculation मत करो।


React में Memoization कैसे Helpful है?
React में Memoization का इस्तेमाल unnecessary re-rendering रोकने के लिए किया जाता है।
React हर बार component render करता है जब props या state बदलती है।
लेकिन अगर values वही हैं, तो दोबारा render करना waste of performance है।

इसलिए React हमें कुछ built-in hooks और methods देता है 👇

17.Pure Function (शुद्ध फ़ंक्शन) वो function होते हैं जो हमेशा एक जैसे input पर एक जैसा output देते हैं और उनका किसी भी बाहरी चीज़ पर कोई प्रभाव (side effect) नहीं होता।
🧠 Pure Function की दो main conditions होती हैं:
Same input → Same output
अगर तुम किसी function को बार-बार एक ही input दोगे, तो वो हमेशा एक जैसा result 
देगा।
No side effects
Function किसी external variable, file, API, या DOM को change नहीं करता।
यानी वो सिर्फ अपने अंदर के data पर काम करता है।


✅ Example (Pure Function):
function add(a, b) {
  return a + b;
}


अगर तुम add(2, 3) लिखो तो हमेशा output 5 मिलेगा।
ये function बाहर कुछ भी change नहीं करता → इसलिए ये pure है।


let count = 0;

function increase() {
  count = count + 1;
  return count;
}

यह function हर बार different result देगा (1, फिर 2, फिर 3...)
क्योंकि ये बाहर के variable count को modify कर रहा है → इसलिए ये impure है।



18. map, filter, reduce , for in and for of ?



💡 map() method क्या करता है:
map() JavaScript का array method है
जो array के हर element पर कोई function चलाता है
और नया array return करता है।

यानी: “एक array को दूसरे array में बदलने” के लिए इस्तेमाल होता है।

💡  filter() एक JavaScript array method है
जो array के elements को check करता है और
सिर्फ वही elements रखता है जो condition पास करते हैं।
अगर condition true है → element नए array में जाएगा
अगर false है → वो element हटा दिया जाएगा

const numbers = [1, 2, 3, 4, 5, 6];
const even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4, 6]
🔹 यहाँ filter() ने सिर्फ वो numbers रखे जो even हैं
🔹 बाकी सारे elements remove हो गए (लेकिन original array safe है)


💡 reduce() क्या है?
reduce() JavaScript का एक array method है, जो array के सारे elements को एक single value में बदल देता है।
मतलब — “पूरे arra
1️⃣ for...in
यह object के keys (properties) के ऊपर iterate करता है।
Mostly objects में use होता है।
Array में भी use हो सकता है, लेकिन वो index देता है, value नहीं।
Syntax
for (let key in object) {
  console.log(key); // key (name of property)
}


const person = { name: 'Bhuvan', age: 25 };
for (let items in person) {
  console.log(items, person[items]);
}


2️⃣ for...of
यह iterable objects (जैसे arrays, strings, maps, sets) के values के ऊपर iterate करता है।
Array के लिए ज्यादा natural और readable है।
Syntax:
for (let value of iterable) {
  console.log(value);
}

19.💡 Optional Chaining क्या है?

JavaScript में ?. operator आपको object के nested properties को access करने की अनुमति देता है बिना error के, अगर कोई property undefined या null हो।
मतलब — अगर property exist नहीं करती, तो error नहीं आएगा, बस undefined return होगा।
const user = { name: 'Bhuvan', address: { city: 'Hyderabad' } };
// contact property नहीं है, तो undefined return होगा, error नहीं
console.log(user.contact?.city); // undefined



⚡ Benefits of Optional Chaining
Error से बचाता है (TypeError)
Code को concise और readable बनाता है
Nested object और array access safe बनाता है

"?. operator check करता है कि property या method exist करती है या नहीं, अगर नहीं करती तो बस undefined return कर देता है, और program crash नहीं होता।"


20.💡 this क्या है?

this JavaScript में एक special object reference है, जो उस context को point करता है जहां function call हुआ है।
मतलब — this हमेशा उसी चीज़ को refer करता है जो function के current execution context में है।
💡 Arrow Function में this की खास बात
Arrow function का this lexical scope follow करता है।
यानि arrow function खुद का this नहीं बनाता, वो outer scope का this लेता है।
Arrow function apna खुद का this नहीं बनाता।
यह अपने parent (lexical) scope का this लेता है।
मतलब function के बाहर जो this है, वही arrow function में भी रहेगा।
Arrow function में this dynamic नहीं, हमेशा lexical (defined by surrounding scope) होता है।






21.1️⃣ Closure (JS)
Definition (Simple)
Closure एक function है जो अपनी outer function की variables को yaad रख सकता है, भले ही outer function execution complete हो गया हो।

Example
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  }
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


Explanation:
inner function outer function के count variable को याद रखता है।



2️⃣ Callback Function (JS)
Definition (Simple)

Callback function वह function है जिसे किसी दूसरे function के argument में pass किया जाता है और बाद में उस function के अंदर call किया जाता है।

Example
function greet(name, callback) {
  console.log('Hello ' + name);
  callback();
}

function sayGoodbye() {
  console.log('Goodbye!');
}

greet('Bhuvan', sayGoodbye);
// Output:
// Hello Bhuvan
// Goodbye!


Explanation:

sayGoodbye function callback के रूप में pass हुआ और greet function के अंदर execute हुआ।

Closure, Callback Function, और HOC (Higher-Order Function in JS) ?

3️⃣ Higher-Order Function (HOC in JS)
Definition (Simple)

Higher-Order Function एक function है जो किसी function को argument में लेता है या function return करता है।

Example 1 — Function as argument
function square(x) {
  return x * x;
}

function operate(x, func) {
  return func(x);
}

console.log(operate(5, square)); // 25

Example 2 — Function returning function
function multiplyBy(n) {
  return function(x) {
    return x * n;
  }
}

const multiplyBy2 = multiplyBy(2);
console.log(multiplyBy2(5)); // 10

Explanation:
multiplyBy function ने ek function return किया।
यह Higher-Order Function का classic example है।


22.Optional Chaining (?.) क्या करता है?

23.Call, Apply, Bind में क्या अंतर है?

💡 call, apply, और bind क्या हैं?
मान लो हमारे पास एक object है जिसमें method है, और हम उसी method को किसी दूसरे object में use करना चाहते हैं।
यानी हम function/method borrow कर रहे हैं।
इसके लिए JavaScript में call, apply, और bind methods का use किया जाता है।


examples :  

// examples

let obj = {
  name: 'bhuvan chander',
  age: 23,
  details: function (state, country) {
    console.log(
      `name is : ${this.age}  and age is : ${this.age} state is : ${state} and counter is: ${country} `
    );
  },
};

obj.details('Goa', 'India');

let obj2 = {
  name: 'Rahul',
  age: 30,
};

obj.details.call(obj2, 'Delhi', 'India');
obj.details.apply(obj2, ['HYD', 'India']);

let funResult = obj.details.call(obj2, 'Bihar', 'India');



1️⃣ call
Function को तुरंत execute करता है।
Arguments comma separated style में पास करते हैं।

2️⃣ apply
Function को तुरंत execute करता है।
Arguments array में पास किए जाते हैं।
बस difference: arguments array में pass करते हैं।


bind
Function immediately execute नहीं होता।
एक new function बनाता है जिसे बाद में call किया जा सकता है।

const greetPerson = greet.bind(person2, 'Hey');
greetPerson('!!'); // Hey, Priya!!

bind से function copy बन जाता है और this person2 को point करता है।
बाद में call किया जा सकता है।

24.Event delegation क्या है?
Event Delegation एक technique है जिसमें आप parent element पर event listener लगाते हैं, और child elements के events को handle करते हैं, बजाय कि हर child element पर अलग listener लगाने के।
मतलब: आप event को parent तक "delegate" करते हैं, और event bubbling का फायदा उठाते हैं।

✅ क्यों use करते हैं?
DOM में कम event listeners लगते हैं → performance better होती है।
अगर future में new child elements add होते हैं, उन्हें भी automatically handle किया जा सकता है।
Code clean और maintainable रहता है।


let list = document.getElementById('myList');
// console.log(list);

list.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    console.log(e.target.textContent);
  }
});

Temporal Dead Zone (TDZ) वह समय होता है जहाँ कोई variable exist तो करता है, 
लेकिन उसे access नहीं किया जा सकता।
👉 अगर access किया → ReferenceError आएगा।

🔥 TDZ किन variables पर लागू होता है?
✅ let
✅ const
❌ var पर TDZ लागू नहीं होता





























