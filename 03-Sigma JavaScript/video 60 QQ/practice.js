// 01: What will the following print in JS?
// console.log("har\"".length)
console.log("har\"".length); //04

// 02: Explore the includes, startsWith & endsWith function of a string.
let a = "Edify college of IT";
console.log(a.startsWith('Ed'));    //true;
console.log(a.endsWith('IT'));      //true;
console.log(a.includes('college')); //true;

// 03: Write a program to convert a given string to lowerCase.
console.log(a.toLowerCase());
console.log(a.toUpperCase());

// 04: Extract the amount out of this string.
let rs = 'Please give Rs 1000.'
console.log(rs.slice(12));

// 05: Try to change 4th character of a given string.
let c = 'Edity group of companies';
console.log(c.replace('t', 'f'));
