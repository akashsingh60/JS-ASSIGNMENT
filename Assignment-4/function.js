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
  
