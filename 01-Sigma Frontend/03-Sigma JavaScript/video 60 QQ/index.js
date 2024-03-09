// Strings are used to store and maniplate text.

let str = 'Ahmed';
let b = 'Mutahir';
//That's how we access an individual character of a string.
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);
//Template literals in Js.
console.log(str + " is a friend of " + b);
console.log(`${str} is a friend of ${b}`); //This is also called string interpolation.
//Escape sequence character.
console.log("Saad is a shazil\"s friend"); // Add a quote in between Char.
console.log("Saad is a shazil\ns friend"); // Add new line.
console.log("Saad is a shazil\ts friend"); // Add a space.
console.log("Saad is a shazil\rs friend"); // Carriage return.
//Strings Methods and Properties.
let a = 'Dr Ahmed';
console.log(a.length);
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.slice(1, 4));
console.log(a.slice(1));
console.log(a.trim());
console.log(a.replace("Dr", "Muhammad"));
console.log(a.concat(b));
console.log(a.concat(" ", b, " Ahmed"));
console.log(a.charAt(0));
console.log(a.startsWith('Dr'));
console.log(a.endsWith('ed'));

