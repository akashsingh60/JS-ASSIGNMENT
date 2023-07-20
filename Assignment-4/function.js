// regular function or function decalartion 
function add(a, b) {
    return a + b;
  }
  
  const result = add(3, 5);
  console.log(result);


// Arrow function: have shorter syntax than regular function

const multiply = (a, b) => a * b;

const result1 = multiply(3, 4);
console.log(result1);

// high order function 
// function takes argument as ffunction and also returns also a function.
function multiplier(factor) {
    return function (number) {
      return number * factor;
    };
  }
  
  const double = multiplier(2);
  console.log(double(5));

//   recursive function 
// A function call itself again and again .

function fact(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * fact(n - 1);
  }
console.log(fact(5));
  
// promise constructor : good way to handle asynchronous operations
// a synchronus operations means  a proecss that operates independently othr oprations.
// synchronous operation means that the process runs only as a result of some other process being completed or handed off.

const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);