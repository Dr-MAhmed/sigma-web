// Quick Quiz: Write a js program to store a name, phone no and marks of a students using objects.
let obj = {
  name: "Hunny",
  phone: "0313-7751829",
  marks: {
    eng: 89,
    urdu: 78,
    maths: 98,
    physics: 85,
    computer: 99,
  },
};
// Converting the string to a number.
let num = Number(obj.phone);
console.log(typeof num);
console.log(obj.marks.computer)

// Chapter 01 practice set
// 01: Create a variable of type string and try to add a number to it.
let str = "Hunny";
let result = str + 4;
console.log(result);

// 02: Use typeof operator to find the datatype of string in the last question.
let str1 = "hunny";
let result1 = str1 + 4;
console.log(typeof result1);

// 03: Create a const object in JS. Can you change it to hold a number later?
const obj1 = {
  value: "Hello Jaan",
};
obj1.value = 123;
console.table(obj1);

// 04: Try to add a new key to the const object in problem 3. Were you able to do it?
const object = {
  value: "Hello Jaan",
};
object.name = "Harry";
console.table(object);

// 05: Write a JS program to create a word-meaning dictionary of 5 words.
const dic = {
  Eloquent: "Speaking or writing smoothly and persuasively.",
  Ubiquitous: "Found everywhere or existing all around.",
  Surreptitious: "Secretive or sneaky, done in a way to avoid being noticed.",
  Ephemeral: "Lasting for a very short time, like a brief moment.",
  Pernicious: "Harmful or damaging, especially over time or in a subtle way.",
};
console.table(dic);