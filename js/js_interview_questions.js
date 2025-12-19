Pratical questions ======================================================>>>>>

1 .  find uniq values for array  
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

2.Find the loges words from here " bhuvan chander joshi javascript on web dev ? 

3.add hass tag and remove white spece output should be  > #MyNmeIsBhuvanChanderJsohi ? 

4. how to convert fist letter to upper case form array ?
 4. how to convert fist letter and last letter  to upper case form array ? 
6. let name = "bhuvan chander joshi"
let words = name.split(" ")
  let result = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  })
// join( " ") =>
  console.log(result.join(""))t)

function uppercase(str){
  let words = str.split(" ")
  let result = words.map((items) => {
    return items.charAt(0).toUpperCase() + items.slice(1)
  })
  return result
}
   console.log(uppercase("rahul kumar sharma"))
   
  Es feauture ? 
🔹 1. let and const
🔹 2. Arrow Functions
🔹 3. Template Literals
🔹 4. Default Parameters
🔹 5. Destructuring
🔹 6. Spread and Rest Operators (...)
🔹 7. Classes
🔹 8. Promises
🔹 9. Modules (import / export)
🔹 10. for...of Loop
   
   

reverse the number 
let num = 2413;
let restult = num.toString().split('');
let number = '';
for (let i = restult.length - 1; i >= 0; i--) {
  number += restult[i];
}
restult = Number(number);
console.log(typeof restult);

////////

let num = 2413;
let strnum = num.toString();
let result = '';

for (let i = strnum.length - 1; i >= 0; i--) {
  result += strnum[i];
}

result = Number(result);

console.log(typeof result);


 Q2 > add hass tag and remove white spece output should be  > #MyNmeIsBhuvanChanderJsohi ?
 

=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>JS Practical questions ============>
1.find the character count ?
let str = 'assssssdfdfdfdf';
let obj = {};

for (let i = 0; i < str.length; i++) {
  let ch = str[i];

  if (obj[ch]) {
    obj[ch]++;
  } else {
    obj[ch] = 1;
  }
}

console.log(obj);

2 .Print only the prime numbers from the array [1,2,3,4,5,6].
एक prime number वो number होता है जो 1 और खुद number के अलावा किसी और number से divisible न हो।
Example: 2, 3, 5, 7, 11 आदि।


function isPrime(num) {
  if (num <= 1) return false; // 0 और 1 prime नहीं → यहीं function खत्म हो जाएगा

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false; // divisible → prime नहीं → function यहाँ खत्म
  }

  return true; // अगर loop पूरी तरह चला और divisible नहीं मिला → prime → return true
}

हम तो function में सिर्फ़ एक ही return कर सकते हैं, फिर ऊपर वाले function में multiple return कैसे हैं?
🔹 जवाब:
एक function में कई return statements हो सकते हैं, लेकिन एक ही समय में सिर्फ़ एक return execute होता है।
जब function return statement तक पहुँचता है, function वहीं turant खत्म हो जाता है और value return कर देता है।
🔹 आपके function को step by step समझें:

Flow Example:
अगर num = 1 → पहली line return false execute होगी → function खत्म
अगर num = 4 → loop में i = 2 → 4 % 2 === 0 → return false → function खत्म
अगर num = 5 → loop में कोई divisible नहीं मिला → last line return true execute




3. Reverse the string "hello" → "olleh". ?
var result = '';
var str = 'hellooooo';
for (let i = str.length - 1; i >= 0; i--) {
  result += str[i];
}

console.log(result);

4.Palindrome check करो (जैसे "madam" → palindrome).
function check(str) {
  let result = str.split('').reverse().join('');
  // console.log(result);
  return result === str;
}
console.log(check('madam'));

5. Reverse an array without using the .reverse() method.
const arr = [1, 2, 3, 4, 5, 6];
const result = [];
for (let i = arr.length - 1; i >= 0; i--) {
  result.push(arr[i]);
}
console.log(result);

6.Find the loges words from here " bhuvan chander joshi javascript on web dev ?

let str = 'bhuvan chander joshi javascript';
const result = str.split(' ');
const resultSort = result.sort((a, b) => b.length - a.length);
console.log(resultSort);
console.log(resultSort[0]);
console.log(resultSort[resultSort.length - 1]);

7.convert "bhuvan chander joshi" fist word of each letter to uppercase ?

let str = 'bhuvan chander joshi';
str = str.split(' ');
let result = str
  .map((curr) => curr.replace(curr[0], curr[0].toUpperCase()))
  .join('');
console.log(`#${result}`);

let fullname = 'bhuvan chander joshi';
let result = fullname.split(' ');
result = result.map((word) => word[0].toUpperCase() + word.slice(1));

console.log(result);

8. find the max number ?
let str = [8, 9, 10, 1, 2, 4, 20, 20, 30, 10, 15, 50, 60, 90, 4];

function checkMax(num) {
  let result = num.sort((a, b) => b - a);

  console.log(result[0]);
}
checkMax(str);

function maxNum(arr) {
  return Math.max(...arr);
}

console.log('resule by Match.max', maxNum(str));

9. give the factorial ?

फैक्टोरियल (Factorial) का मतलब होता है —
किसी भी संख्या को उससे छोटी सभी प्राकृतिक संख्याओं से गुणा करना।
🔹 उदाहरण:
अगर संख्या 5 है,
तो उसका फैक्टोरियल (5!) इस तरह निकाला जाता है 👇
5! = 5 × 4 × 3 × 2 × 1 = 120

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    // console.log(i);
    result *= i;
  }
  return result;
}

console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(5));

10. get the averae from array ? 
let arr = [10, 20, 30, 40];
function getave(num) {
  let sum = num.reduce((pre, curr) => pre + +curr);
  let result = sum / num.length;
  return result;
}
console.log(getave(arr));

11. find two array are equal or not ?
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];

let result =
  arr1.length === arr2.length &&
  arr1.every((val, index) => val === arr2[index]);
console.log(result);

12. get some of this number value 123456123456 ?
function calculate(num) {
// you can't split number you should convet in string first by using toString()

  let result = num.toString().split('');  // first convert it to array now it will sting 
  result = result.map(Number);

  result = result.reduce((prv, curr) => prv + curr);

  return result;
}

console.log(calculate(123456123456));

13. find unique value form array ?

let arr = [1, 2, 1, 2, 3, 4, 5, 4, 5, 6, 8, 9, 8, 11, 3, 12, 13, 14];
function getUni(num) {
  let result = num.filter((val, index) => num.indexOf(val) === index);

  return result;
}

console.log(getUni(arr));

14 . find vovles form string ?
let str = 'bhuvan chander joshi';
let result = str.split('').filter((char) => 'aeiouAEIOU'.includes(char));
console.log(result);

15 do first letter capital form the array ?

let str = 'bhuvan chander joshi';
function getSr(word) {
  let result = word.split(' ');
  result = result.map((curVal) => curVal[0].toUpperCase() + curVal.slice(1));
  console.log(result);
}
getSr(str);

16. convert str to camlecase ? 
let str = 'bhuvan chander joshi';

function docapt(getStr) {
  let result = getStr.split(' ');
  // console.log(result);
  result = result.map((curval, index) => {
    if (index === 0) {
      return curval;
    } else {
      return curval.charAt(0).toUpperCase() + curval.slice(1);
    }
  });

  return result.join('');
}
console.log(docapt(str));

17. check first string starts with second strings ?
function checkStr(namefist, namesecond) {
  let result = namefist.toLowerCase().startsWith(namesecond.toLowerCase());
  console.log(result);
}

checkStr('Hello bhuvan', 'hello bhuvan');

18. how to find prime number ?
function getNum(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
    return ' Yes number is prime ';
  }
}

console.log(getNum(7));
console.log(getNum(13));
console.log(getNum(9));
console.log(getNum(10));


19. how can we merge nested array ?

const nested = [1, [2, [3, [4, 5]]], 6];
console.log(flatten(nested)); // [1, 2, 3, 4, 5, 6]

function test(num) {
  let result = [];

  for (let item of num) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(test(nested));

20. factorial of num ? 
5
4
3
 

function fac(num) {
  let result = 1; // factorial हमेशा 1 से शुरू होता है

  for (let i = 1; i <= num; i++) {
    result *= i; // हर बार multiply करना होता है
  }

  console.log(result);
}

fac(5); // Output: 120

21. repeate the string in according to num  ?
function repeatNum(str, num) {
  return num >= 1 ? str.repeat(num) : str;
}
console.log(repeatNum('a', 5));

22. check string is palindrome by not use inbuild methods ?
function checkPalidrom(str) {
  let strs = str.split('');
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += strs[i];
  }

  return str === result;
}
console.log(checkPalidrom('bhuvan'));
console.log(checkPalidrom('ram'));
console.log(checkPalidrom('madam'));

23. Array को flatten कैसे करेंगे (nested array)?

Array को flatten कैसे करेंगे (nested array)?

const numbers = [1, [2, 3], [4, [5, 6]], 7];
function test(num) {
  let result = [];

  for (let itesm of num) {
    if (Array.isArray(itesm)) {
      result = result.concat(test(itesm));
    } else {
      result.push(itesm);
    }
  }

  return result;
}

console.log(test(numbers));

24. what is deounce in js ?


function serach(query) {
  console.log('seachng...', query);
}

function debounce(callback, dealy) {
  let timer;

  return function (...ars) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...ars);
    }, dealy);
  };
}

const getRestult = debounce(serach, 1000);
let inputtext = document.getElementById('custom-search');
const handleinput = (e) => {
  let value = e.target.value;
  getRestult(value);
};

inputtext.addEventListener('input', handleinput);

25. let str = "133456455" convert it on number ?

let str = '123456';
let num = Number(str);

console.log(num); // 123456
console.log(typeof num); // number

26. get last index of array ?
  
onst arr = [10, 20, 30, 40, 50];
// Last index
const lastIndex = arr.length - 1;
 
 27. exchange the value by using third var a = 20, b =30 ?
var a = 20;
var b = 'bhhvakdfk';

[a, b] = [b, a];

console.log('a', a);
console.log('b', b);

28. print a loop 1 to 10 and every number will be excuted after a second ?

for (let i = 0; i <= 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

29 what is the debaounce and throtlling ?

debaounce in js 


debaounce with custom hook in react


import { useEffect, useMemo, useState } from 'react';

import { useDebounce } from '../custom-hooks/useDebounce';

const CustomSearch = () => {
  const [text, setText] = useState('');

  function search(val) {
    console.log('sarching....', val);
  }

  const callDebounce = useMemo(() => useDebounce(search, 1000), [search]);

  useEffect(() => {
    return callDebounce.cancel && callDebounce.cancel();
  });

  return (
    <>
      <input
        type="text"
        name="firstname"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          callDebounce(e.target.value);
        }}
      />
    </>
  );
};
export default CustomSearch;

function search(query) {
  console.log('searching ...', query);
}

function debounce(callback, delay) {
  let timer;

  return function (...args) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

let calldebounce = debounce(search, 1000);
let inputtext = document.getElementById('custom-search');

const handleinput = (e) => {
  let val = e.target.value;
  calldebounce(val);
};

inputtext.addEventListener('input', handleinput);


throttling....

function throttle(fnction, delay) {
  let lastcall = 0;

  return function (...ars) {
    let now = Date.now();
    if (now - lastcall < delay) {
      return;
    }
    lastcall = now;
    return fnction(...ars);
  };
}

function sendchatmesg(msg) {
  console.log('sending...', msg);
}

const sendchatmsgslowmode = throttle(sendchatmesg, 2 * 1000);

sendchatmsgslowmode('first message');

setTimeout(() => {
  sendchatmsgslowmode('first second');
}, 2 * 2000);

30. How can we sort alphabetically ??

const fruits = ['Banana', 'apple', 'Mango', 'cherry'];

let result = fruits.sort((a, b) =>
  a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase())
);

console.log(result);


31. sort a array with alphabarically 
import { useState } from 'react';
import { users } from '../list';

const Listing = () => {
  const [data, setDtaa] = useState(users);

  const sortData = () => {
    const sorted = [...data].sort((a, b) => a.name.localeCompare(b.name));
    setDtaa(sorted);
  };

  return (
    <>
      <div>
        <button onClick={sortData} style={{ border: '1px solid ' }}>
          filter
        </button>
      </div>
      <ul>
        {data.map((data) => {
          return (
            <li key={data.id}>
              {data.name} - {data.age}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Listing;


// Sort data alphabetically by name **before setting state**
  const [data] = useState(
    [...users].sort((a, b) => a.name.localeCompare(b.name))
  );



32.How to print numbers 1 to 5 with a delay using setTimeout (common closure question)

for (var i = 1; i <= 5; i++) {
  setTimeout(() => console.log(i), i * 1000);
}


33. first find the tech how many times in the arra ?
const arr = [
  { tech: 'React', vulnerability: false },
  { tech: 'Angular', vulnerability: true },
  { tech: 'React', vulnerability: true },
  { tech: 'Vue', vulnerability: true },
  { tech: 'Angular', vulnerability: true },
];

let result = {};
for (let i = 0; i < arr.length; i++) {
    let obj = arr[i].tech;
    if (result[obj]) {
      result[obj]++;
    } else {
      result[obj] = 1;
    }
}

console.log(result);


34 find ony true tech form the array ?
const arr = [
  { tech: 'React', vulnerability: false },
  { tech: 'Angular', vulnerability: true },
  { tech: 'React', vulnerability: true },
  { tech: 'Vue', vulnerability: true },
  { tech: 'Angular', vulnerability: true },
];

let result = {};
for (let i = 0; i < arr.length; i++) {
  if (arr[i].vulnerability === true) {
    let obj = arr[i].tech;
    if (result[obj]) {
      result[obj]++;
    } else {
      result[obj] = 1;
    }
  }
}
console.log(result);

35 create a Debounce function by using custom hook ?

import { useState, useEffect } from 'react';
const useDebouncing = (val, delay) => {
  const [debounceVal, setDebounceVal] = useState(val);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceVal(val);
    }, delay);
    return () => clearTimeout(timer);
  }, [val, delay]);

  return debounceVal;
};

export default useDebouncing;


// custom searching input
import { useState, useEffect } from 'react';
import useDebouncing from '../custom-hook/useDebouncing';

const CustomSearch = () => {
  const [inputval, setInputval] = useState('');
  const deVal = useDebouncing(inputval, 1000);
  useEffect(() => {
    if (deVal) {
      console.log(`searching data is ${deVal}`);
    }
  }, [deVal]);

  return (
    <>
      <form action="">
        <input
          type="text"
          name={inputval}
          value={inputval}
          onChange={(e) => setInputval(e.target.value)}
        />
      </form>
    </>
  );
};

export default CustomSearch;

36. find the common number form three ?
let arr1 = [1, 7, 10, 20, 30];
let arr2 = [7, 13, 15, 20];
let arr3 = [7, 15, 20];

let arr1 = [1, 7, 10, 20, 30];
let arr2 = [7, 13, 15, 20];
let arr3 = [7, 15, 20];

let result = arr1.filter((val) => arr2.includes(val) && arr2.includes(val));

console.log(result);

37.
const students = [
  {
    name: 'Rahul',
    rollNum: 101,
    marks: 49,
    result: 'failed',
  },
  {
    name: 'Amit',
    rollNum: 102,
    marks: 72,
    result: 'passed',
  },
  {
    name: 'Neha',
    rollNum: 103,
    marks: 45,
    result: 'failed',
  },
  {
    name: 'Priya',
    rollNum: 104,
    marks: 65,
    result: 'passed',
  },
  {
    name: 'Ankit',
    rollNum: 99,
    marks: 100,
    result: 'passed',
  },
  {
    name: 'Soniya',
    rollNum: 79,
    marks: 196,
    result: 'passed',
  },
];


Find students who have passed the exam
Find students who have marks above 100
Get the total marks of all students
Find the names of students who scored 80+ marks
Find the names of students who failed
Give 20 grace marks to students who scored less than 50, then get the updated total marks of all students


// ouput based questions 

1.oupu ?

var x = 40;
function getresult() {
  console.log(x);
  var x = 50;
}
getresult();

2.output ?

const x = 1;
{
  console.log(x); // ReferenceError
  const x = 2;
}

यह JavaScript का TDZ (Temporal Dead Zone) वाला case है 👍
मैं इसे step-by-step Hindi (Hinglish) में समझाता हूँ।
यहाँ error क्यों आ रहा है?
इस block के अंदर एक नया x declare किया गया है।
Block के अंदर वाला x

बाहर वाले x = 1 को shadow कर देता है
लेकिन…
👉 const x = 2 declare होने से पहले access किया गया

let और const variables:
scope की शुरुआत से
declaration तक
TDZ में रहते हैं

3.
let count = 0;
(function printCount() {
  if (count === 0) {
    count++;
  }
  console.log(`count value is ${count}`);
})();

Output: 1 ➡️ क्योंकि count पहले ही 1 हो चुका है


let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1;
    console.log(`count is inside of if ${count}`);
  }
  console.log(`count from outside of if  value is ${count}`);
})();

count is inside of if 1
count from outside of if value is 0

⚠️ let count = 1, यह नया block-scoped variable है
👉 यह global count को shadow करता है

4.What will be the output and how can you resolve this issue ?
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  });
}

answer is : You can use let instant of let and another you can do with the help of clouser here:
for (var i = 0; i < 10; i++) {
  (function (x) {
    setTimeout(() => {
      console.log(x);
    }, x * 100);
  })(i);
}

for (var i = 0; i < 10; i++) {
  function inner(i) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }

  inner(i);
}

// how can we delete property from object
let obj = {
  name: 'Bhuvan Chander Joshi',
  age: 32,
  weight: '40kg',
};

delete obj.name;
console.log(obj.age);

let fun = (function (a) {
  delete a;
  return a;
})(20);

console.log(fun);

how can we get the keys only from the obj
const user = {
  name: 'rss paul',
  age: 32,
  result: true,
};

for (let objkey in user) {
  console.log(objkey);
}

// find the value as well
for (let keys in user) {
  console.log(user[keys]);
}

let obj = {
  a: 'fisttitle',
  b: 'second title',
  a: 'third title',
};

console.log(obj);


const user = {
  name: "Bhuvan",
  age: 25,
};
const jsonString = JSON.stringify(user);
console.log(jsonString);
// {"name":"Bhuvan","age":25}
localStorage.setItem("user", JSON.stringify(user));

const storedUser = '{"name":"Bhuvan","age":25}';
const userObj = JSON.parse(storedUser);
console.log(userObj.name);
// Bhuvan
const data = JSON.parse(localStorage.getItem("user"));
console.log(data.age);

rever each word > ?
// Hi My Name is John
// iH yM emaN si nhoJ

let str = 'Hi My Name is John';
function reverseit(reverseStr) {
  let result = reverseStr
    .split(' ')
    .map((val) => val.split().reverse())
    .join(' ');

  return result;
}
console.log(reverseit(str));

// Hi My Name is John
// iH yM emaN si nhoJ

let str = 'Hi My Name is John';
str = str.split(' ');

let result = [];
for (let i = 0; i <= str.length - 1; i++) {
  result.push(str[i].split('').reverse().join(''));
}
console.log(result.join(' '));

// now i reverse the str by using for loop as well












