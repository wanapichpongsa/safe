// Add all of this to TS.md file

/* JS in 100s Mocha, ES3, ES5, ES6, TS
console.log('Hello, world!') Is logger with built-in debugger
document.querySelector('.text-scramble') // Retrieves the DOM element
var (original flavor, but avoided), const(immutable), let(mutable)
btn.onclick = function() {
}
// Arrow is first-hand function (for functional programming) <- concision, doesn't need return?
btn.onclick = () => 'Clicked!'

Single-threaded, but async with Promise API
Deno is built on V8 and Rust
*/

/*
Deno can use TS with SQLite? (Or is SQLite within TS already?)
const db = new Database('test.sqlite')
db.exec(`
  DROP TABLE IF EXISTS horses;
  CREATE TABLE horses (
    id INTEGER PRIMARY KEY INCREMENT,
    name TEXT,
    age INTEGER,
    permalink TEXT
  );
`)
*/

// string[] = [] equivalent to std::vector<string> = [] <- as if [] can be used instead of a str named variable

/* { $ } Cross-platform 'bash-like' shell with seamless JS interop
e.g. const response = await fetch(https://example.com);
// use Response as stdin
await $`cat < ${response} | wc -c`; // 1256
*/
/*
Ternary operators: you can let name = age > 10 ? 'John' : 'Jane' (else is ':')
Can also do:
const nameDiv = () => {
  return age > 10? <div>John</div> : <div>Jack</div>
}
*/

// takes Lisp dialect scheme, self (prototype-based), Java class, Indirect C/C++ influence
// JS: Dynamically typed (not read-only?), prototyped-based inheritance, first-class functions
// ^ Meaning no typecasting P.S. { a: 1 } <- This is object!

/* OBJECTS! (dicts in pythons, or hashmaps in C++)
  const person = {
    name: 'John',
    age: 30,
    city: 'New York'
  }

  KV Pair! (Deepsource debugging)
  const name = 'John'

  const person = { name, age, city }

  const person2 = { ...person, name: 'Jane' }

  const names = ['Jack', 'Pedro', 'Jane'];
  const names2 = [...names, 'John']

  .map()
  .filter()
  .reduce()


*/

// Prototype-based inheritance vs. Class-based inheritance (C++) e.g., const animal = { makeSound() {console.log('Some sound')}} const dog = Object.create(animal)\ndog.makeSound()
// ^ Prototype is when you Object.create(const) to inherit its functionality
// class Dog extends Animal { } for C++ (extension of Animal to define hierarchy)

/* 'First-class functions' 

1. Can be assigned to const

2. Passsed as arguments
array.map(x => x * 2) // Map is 'for loop' going through every value 1:1
Strange:

3. Returned from other functions
'Can be returned from nested functions defined in function' (Like what we're doing right now)
function createMultiplier(factor) {
  return function(x) {
    return x * factor
  }
}
// Instance of 'prototype'?
const double = createMultiplier(2)
double(5)

4. Stored in objects/arrays
const math = {
  add: (a, b) => a + b
  subtract: (a, b) => a - b
}
*/
