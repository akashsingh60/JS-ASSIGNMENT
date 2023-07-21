const text = 'Hello, World!';

console.log(text.length); // 13


console.log(text.charAt(0));         // Output: "H"

console.log(text.slice(7, 12));      // Output: "World"

console.log(text.indexOf('o'));      // Output: 4

console.log(text.toUpperCase());     // Output: "HELLO, WORLD!"

console.log(text.toLowerCase());     // Output: "hello, world!"

console.log(text.split(', '));       // Output: ["Hello", "World!"]

console.log(text.replace('World', 'Universe')); // Output: "Hello, Universe!"
