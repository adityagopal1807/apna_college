// =====================================================
// 28. INTRODUCTION TO JAVASCRIPT
// =====================================================

// console.log() prints output in console

console.log("Hello JavaScript");

// Output:
// Hello JavaScript



// =====================================================
// 29. VARIABLES & DATA TYPES
// =====================================================

// var -> old keyword
var age = 20;

// let -> value can change
let name = "Aditya";

// const -> fixed value
const pi = 3.14;

console.log(age);
console.log(name);
console.log(pi);

// Output:
// 20
// Aditya
// 3.14



// Primitive Data Types

let str = "Hello";      // string
let num = 10;           // number
let isStudent = true;   // boolean
let x;                  // undefined
let y = null;           // null

console.log(typeof str);
console.log(typeof num);
console.log(typeof isStudent);

// Output:
// string
// number
// boolean



// Non Primitive Data Types

let arr = [1,2,3];

let user = {
  name: "Aditya"
};

function greet(){
  console.log("Hi");
}

console.log(typeof arr);
console.log(typeof user);
console.log(typeof greet);

// Output:
// object
// object
// function



// =====================================================
// 30. OPERATORS
// =====================================================

let a = 10;
let b = 2;

// Arithmetic Operators
console.log(a + b);
console.log(a - b);
console.log(a * b);

// Output:
// 12
// 8
// 20



// Assignment Operator
a += 5;

console.log(a);

// Output:
// 15



// Comparison Operators
console.log(10 > 5);
console.log(10 == "10");
console.log(10 === "10");

// Output:
// true
// true
// false



// Logical Operators
console.log(true && false);
console.log(true || false);
console.log(!true);

// Output:
// false
// true
// false



// Ternary Operator
let age2 = 18;

let result = age2 >= 18 ? "Adult" : "Minor";

console.log(result);

// Output:
// Adult



// Increment / Decrement
let count = 5;

count++;
console.log(count);

count--;
console.log(count);

// Output:
// 6
// 5



// =====================================================
// 31. CONDITIONAL STATEMENTS
// =====================================================

let marks = 85;

// if else
if(marks >= 40){
  console.log("Pass");
}
else{
  console.log("Fail");
}

// Output:
// Pass



// else if
if(marks >= 90){
  console.log("A");
}
else if(marks >= 70){
  console.log("B");
}
else{
  console.log("C");
}

// Output:
// B



// switch
let day = 1;

switch(day){

  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  default:
    console.log("Invalid");
}

// Output:
// Monday



// =====================================================
// 32. LOOPS
// =====================================================

// for loop
for(let i=1; i<=3; i++){
  console.log(i);
}

// Output:
// 1
// 2
// 3



// while loop
let i = 1;

while(i <= 2){
  console.log(i);
  i++;
}

// Output:
// 1
// 2



// do while
let j = 1;

do{
  console.log(j);
  j++;
}
while(j <= 2);

// Output:
// 1
// 2



// Nested Loop
for(let i=1; i<=2; i++){

  for(let j=1; j<=2; j++){
    console.log(i,j);
  }
}

// Output:
// 1 1
// 1 2
// 2 1
// 2 2



// break
for(let i=1; i<=5; i++){

  if(i == 3){
    break;
  }

  console.log(i);
}

// Output:
// 1
// 2



// continue
for(let i=1; i<=5; i++){

  if(i == 3){
    continue;
  }

  console.log(i);
}

// Output:
// 1
// 2
// 4
// 5



// =====================================================
// 33. STRINGS
// =====================================================

let text = "hello";

// String Methods
console.log(text.toUpperCase());
console.log(text.length);

// Output:
// HELLO
// 5



// Template Literals
let userName = "Aditya";

console.log(`Hello ${userName}`);

// Output:
// Hello Aditya



// Escape Characters
console.log("Hello\nWorld");

// Output:
// Hello
// World



// =====================================================
// 34. ARRAYS
// =====================================================

let nums = [1,2,3];

// push()
nums.push(4);

console.log(nums);

// Output:
// [1,2,3,4]



// pop()
nums.pop();

console.log(nums);

// Output:
// [1,2,3]



// shift()
nums.shift();

console.log(nums);

// Output:
// [2,3]



// unshift()
nums.unshift(0);

console.log(nums);

// Output:
// [0,2,3]



// slice()
console.log(nums.slice(0,2));

// Output:
// [0,2]



// splice()
nums.splice(1,1);

console.log(nums);

// Output:
// [0,3]



// forEach()
nums.forEach((el)=>{
  console.log(el);
});

// Output:
// 0
// 3



// map()
let ans = nums.map((el)=> el*2);

console.log(ans);

// Output:
// [0,6]



// filter()
let filtered = nums.filter((el)=> el > 0);

console.log(filtered);

// Output:
// [3]



// reduce()
let total = nums.reduce((res,el)=> res+el);

console.log(total);

// Output:
// 3



// =====================================================
// 35. OBJECTS
// =====================================================

// Object Creation
let student = {

  name: "Aditya",
  age: 20,

  greet(){
    console.log("Hello");
  }
};

console.log(student.name);

// Output:
// Aditya



// Nested Object
let user2 = {

  name: "Rahul",

  marks: {
    math: 90
  }
};

console.log(user2.marks.math);

// Output:
// 90



// this keyword
let person = {

  name: "Aditya",

  greet(){
    console.log(this.name);
  }
};

person.greet();

// Output:
// Aditya



// =====================================================
// 36. FUNCTIONS
// =====================================================

// Function Declaration
function add(a,b){
  return a+b;
}

console.log(add(2,3));

// Output:
// 5



// Function Expression
const hello = function(){
  console.log("Hi");
};

hello();

// Output:
// Hi



// Arrow Function
const square = (n) => n*n;

console.log(square(4));

// Output:
// 16



// Callback Function
function greet2(name){
  console.log(name);
}

function test(callback){
  callback("Aditya");
}

test(greet2);

// Output:
// Aditya



// Higher Order Function
function multiple(func){
  func();
}



// Scope
let globalVar = 10;

function demo(){
  let localVar = 20;

  console.log(globalVar);
  console.log(localVar);
}

demo();

// Output:
// 10
// 20



// Hoisting
console.log(num2);

var num2 = 10;

// Output:
// undefined



// =====================================================
// 37. ADVANCED JAVASCRIPT CONCEPTS
// =====================================================

// Call Stack
function one(){
  two();
}

function two(){
  console.log("Inside Two");
}

one();

// Output:
// Inside Two



// Lexical Scope
function outer(){

  let a = 10;

  function inner(){
    console.log(a);
  }

  inner();
}

outer();

// Output:
// 10



// Closure
function counter(){

  let count = 0;

  return function(){

    count++;
    console.log(count);
  };
}

let fun = counter();

fun();
fun();

// Output:
// 1
// 2



// Memory Allocation
let value = 100;



// Garbage Collection
let obj = {
  name: "Aditya"
};

obj = null;



// =====================================================
// 38. DOM MANIPULATION
// =====================================================

// HTML Needed:
// <h1 id="heading">Hello</h1>

let heading = document.getElementById("heading");

console.log(heading.innerText);

// Output:
// Hello



// querySelector()
document.querySelector("h1");



// innerHTML
heading.innerHTML = "<i>JS</i>";



// textContent
console.log(heading.textContent);



// Changing Styles
heading.style.color = "red";



// Creating Element
let btn = document.createElement("button");

btn.innerText = "Click";

document.body.append(btn);



// Removing Element
// btn.remove();



// =====================================================
// 39. EVENTS
// =====================================================

// HTML Needed:
// <button id="btn">Click</button>

let button = document.getElementById("btn");



// onclick
button.onclick = function(){
  console.log("Clicked");
};



// addEventListener
button.addEventListener("click", ()=>{
  console.log("Button Clicked");
});



// More Events
button.addEventListener("mouseover", ()=>{
  console.log("Mouse Over");
});



// Keyboard Event
document.addEventListener("keydown", ()=>{
  console.log("Key Pressed");
});



// Form Event
// form.addEventListener("submit", ()=>{});



// Event Object
button.addEventListener("click",(event)=>{

  console.log(event.type);
});



// this in Event Listener
button.addEventListener("click", function(){

  console.log(this);
});



// Extracting Data
// HTML Needed:
// <input id="inp">

let inp = document.getElementById("inp");

inp.addEventListener("input",(e)=>{

  console.log(e.target.value);
});



// =====================================================
// 40. EVENT BUBBLING & DELEGATION
// =====================================================

// HTML Needed:
// <div id="box">
//   <button id="child">Click</button>
// </div>

let box = document.getElementById("box");
let child = document.getElementById("child");



// Bubbling
box.addEventListener("click", ()=>{
  console.log("Div");
});

child.addEventListener("click", ()=>{
  console.log("Button");
});

// Output:
// Button
// Div



// stopPropagation()
child.addEventListener("click",(e)=>{

  e.stopPropagation();
});



// Event Delegation
const list = document.querySelector('#myList');

list.addEventListener('click', (event) => {
  // Check if the clicked element is an LI
  if (event.target.tagName === 'LI') {
    console.log('You clicked item:', event.target.textContent);
  }
});



// =====================================================
// 41. BROWSER APIs
// =====================================================

// setTimeout()
setTimeout(()=>{

  console.log("Hello");
},2000);



// setInterval()
let id = setInterval(()=>{

  console.log("Running");
},1000);



// clearInterval(id);



// Local Storage
localStorage.setItem("name","Aditya");

console.log(localStorage.getItem("name"));

// Output:
// Aditya



// Session Storage
sessionStorage.setItem("user","Rahul");



// =====================================================
// 42. OOP
// =====================================================

// Class
class Student{

  constructor(name){

    this.name = name;
  }

  greet(){

    console.log(this.name);
  }
}



// Object
let s1 = new Student("Aditya");

s1.greet();

// Output:
// Aditya

// Inheritance
class Person{

  greet(){
    console.log("Hello");
  }
}

class Child extends Person{

}

let c1 = new Child();

c1.greet();

// Output:
// Hello



// Prototype
let arr2 = [1,2];

console.log(arr2.__proto__);



// =====================================================
// 43. ES6+ FEATURES
// =====================================================

// Destructuring
let arr3 = [1,2];

let [p,q] = arr3;

console.log(p);

// Output:
// 1



// Spread Operator
let arr4 = [1,2];

let arr5 = [...arr4,3];

console.log(arr5);

// Output:
// [1,2,3]



// Rest Operator
function sum(...nums){

  console.log(nums);
}

sum(1,2,3);

// Output:
// [1,2,3]



// Default Parameter
function greet3(name="User"){

  console.log(name);
}

greet3();

// Output:
// User



// Optional Chaining
let user3 = {

  address: {
    city: "Delhi"
  }
};

console.log(user3.address?.city);

// Output:
// Delhi



// Export
// export const name = "Aditya";



// Import
// import {name} from "./app.js";


// ================================
// CALLBACK HELL
// Nested callbacks
// ================================

h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {

  setTimeout(() => {

    h1.style.color = color;

    if(nextColorChange){
      nextColorChange();
    }

  }, delay);

}

changeColor("red", 1000, () => {

  changeColor("orange", 1000, () => {

    changeColor("green", 1000, () => {

      changeColor("yellow", 1000, () => {

        changeColor("blue", 1000);

      });

    });

  });

});


// ================================
// PROMISE CREATION
// ================================

function saveToDb(data){

  return new Promise((resolve, reject) => {

    let internetSpeed =
      Math.floor(Math.random() * 10) + 1;

    if(internetSpeed > 4){
      resolve("success : data was saved");
    } else {
      reject("failure : weak connection");
    }

  });

}


// ================================
// THEN & CATCH
// ================================

saveToDb("apna college")

.then(() => {
  console.log("promise was resolved");
})

.catch(() => {
  console.log("promise was rejected");
});


// ================================
// PROMISE CHAINING
// ================================

saveToDb("apna college")

.then(() => {

  console.log("data1 saved");

  return saveToDb("helloworld");

})

.then(() => {

  console.log("data2 saved");

  return saveToDb("shradha");

})

.then(() => {

  console.log("data3 saved");

})

.catch(() => {

  console.log("promise was rejected");

});


// ================================
// PROMISE WITH RESULT & ERROR
// ================================

saveToDb("apna college")

.then((result) => {

  console.log("data1 saved");
  console.log(result);

  return saveToDb("helloworld");

})

.then((result) => {

  console.log("data2 saved");
  console.log(result);

})

.catch((error) => {

  console.log("promise rejected");
  console.log(error);

});


// ================================
// PROMISE EXAMPLE
// ================================

function changeColorPromise(color, delay){

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      h1.style.color = color;

      resolve("color changed");

    }, delay);

  });

}


// ================================
// PROMISE CHAINING WITH COLORS
// ================================

changeColorPromise("red",1000)

.then(() => {

  console.log("red completed");

  return changeColorPromise("orange",1000);

})

.then(() => {

  console.log("orange completed");

  return changeColorPromise("green",1000);

})

.then(() => {

  console.log("green completed");

  return changeColorPromise("blue",1000);

})

.then(() => {

  console.log("blue completed");

});


// ================================
// PROMISE REJECT EXAMPLE
// ================================

function randomColor(color, delay){

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      let num =
        Math.floor(Math.random() * 5) + 1;

      if(num > 3){
        reject("promise rejected");
      }

      h1.style.color = color;

      resolve("color changed");

    }, delay);

  });

}


// ================================
// ASYNC FUNCTION
// ================================

async function greet(){
  return "hello!";
}


// ================================
// ASYNC WITH ERROR
// ================================

async function greetError(){

  throw "some random error";

}


// ================================
// ASYNC THEN & CATCH
// ================================

greet()

.then((result) => {

  console.log("promise resolved");
  console.log(result);

})

.catch((err) => {

  console.log("promise rejected");
  console.log(err);

});


// ================================
// AWAIT
// ================================

async function demo(){

  await changeColorPromise("red",1000);

  await changeColorPromise("orange",1000);

  await changeColorPromise("green",1000);

  await changeColorPromise("blue",1000);

}


// ================================
// TRY CATCH WITH AWAIT
// ================================

async function demo2(){

  try{

    await randomColor("red",1000);

    await randomColor("orange",1000);

    await randomColor("green",1000);

    await randomColor("blue",1000);

  }

  catch(err){

    console.log("error caught");
    console.log(err);

  }

}


// ================================
// AWAIT NUMBER EXAMPLE
// ================================

function getNum(){

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      let num =
        Math.floor(Math.random() * 10) + 1;

      console.log(num);

      resolve();

    },1000);

  });

}

async function demo3(){

  await getNum();

  await getNum();

  await getNum();

  await getNum();

}

// ======================================
// 45. APIs & AJAX
// ======================================


// ======================================
// JSON
// JSON String
// ======================================

let jsonRes =
'{"fact":"Approximately 1/3 of cat owners think their pets can read minds.","length":78}';


// ======================================
// JSON.parse()
// JSON String -> JS Object
// ======================================

let validRes = JSON.parse(jsonRes);

console.log(validRes.fact);


// ======================================
// JSON.stringify()
// JS Object -> JSON String
// ======================================

let student = {
  name: "shradha",
  marks: 95,
};

let data = JSON.stringify(student);

console.log(data);



// ======================================
// FETCH API
// Basic fetch request
// ======================================

let url = "https://catfact.ninja/fact";

fetch(url)

.then((res) => {

  console.log(res);

  return res.json();

})

.then((data) => {

  console.log(data.fact);

})

.catch((err) => {

  console.log("ERROR - ", err);

});



// ======================================
// FETCH CHAINING
// Multiple fetch requests
// ======================================

fetch(url)

.then((res) => {

  return res.json();

})

.then((data) => {

  console.log(data.fact);

  return fetch(url);

})

.then((res) => {

  return res.json();

})

.then((data2) => {

  console.log(data2.fact);

})

.catch((err) => {

  console.log("ERROR - ", err);

});



// ======================================
// ASYNC AWAIT WITH FETCH
// Cleaner async code
// ======================================

async function getFacts() {

  try {

    let res = await fetch(url);

    let data = await res.json();

    console.log(data.fact);

  }

  catch (e) {

    console.log("error - ", e);

  }

}



// ======================================
// MULTIPLE FETCH CALLS
// ======================================

async function getFacts2() {

  try {

    let res = await fetch(url);

    let data = await res.json();

    console.log(data.fact);

    let res2 = await fetch(url);

    let data2 = await res2.json();

    console.log(data2.fact);

  }

  catch (e) {

    console.log("error - ", e);

  }

  console.log("bye");

}



// ======================================
// AXIOS
// GET request using axios
// ======================================

async function getFactsAxios() {

  try {

    let res = await axios.get(url);

    console.log(res.data.fact);

  }

  catch (e) {

    console.log("error - ", e);

  }

}



// ======================================
// AXIOS WITH HEADERS
// Joke API example
// ======================================

const jokeUrl = "https://icanhazdadjoke.com/";

async function getJokes() {

  try {

    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    let res = await axios.get(jokeUrl, config);

    console.log(res.data);

  }

  catch (err) {

    console.log(err);

  }

}



// ======================================
// COLLEGE SEARCH API
// Fetch colleges using country name
// ======================================

let collegeUrl =
"http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {

  let country =
    document.querySelector("input").value;

  console.log(country);

  let colArr = await getColleges(country);

  console.log(colArr);

  show(colArr);

});



async function getColleges(country) {

  try {

    let res =
      await axios.get(collegeUrl + country);

    return res.data;

  }

  catch (e) {

    console.log("error : ", e);

    return [];

  }

}



// ======================================
// SHOW DATA ON PAGE
// Display colleges in list
// ======================================

function show(colArr) {

  let list = document.querySelector("#list");

  list.innerText = "";

  for (col of colArr) {

    console.log(col.name);

    let li = document.createElement("li");

    li.innerText = col.name;

    list.appendChild(li);

  }

}



// ======================================
// RANDOM DOG IMAGE API
// Display image on button click
// ======================================

let imgBtn = document.querySelector("#dogBtn");

let dogUrl =
"https://dog.ceo/api/breeds/image/random";

imgBtn.addEventListener("click", async () => {

  let link = await getImage();

  let img = document.querySelector("#result");

  img.setAttribute("src", link);

});



async function getImage() {

  try {

    let res = await axios.get(dogUrl);

    return res.data.message;

  }

  catch (e) {

    console.log("error - ", e);

    return "/";

  }

}



// ======================================
// HTTP METHODS
// ======================================

// GET    -> Fetch data
// POST   -> Send data
// PUT    -> Update data
// DELETE -> Delete data



// ======================================
// REST APIs
// APIs following REST rules
// Uses HTTP methods
// ======================================



// ======================================
// HANDLING RESPONSES
// ======================================

// Fetch
// let data = await res.json();

// Axios
// console.log(res.data);



// ======================================
// ERROR HANDLING
// ======================================

try {

  console.log("API CALL");

}

catch (err) {

  console.log(err);

}