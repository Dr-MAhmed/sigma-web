//Chapter No - 03 Practice Set;
//Types of loops in JS.
let a = 0;

//01 - Classical For Loop. 
// Loop a block of code No of Times.
for (let i = 0; i < 100; i++) {
    console.log(a + i);
}

//Creating an object for better understanding the for in-of loops.
let obj = {
    name: 'Hunny',
    role: 'Programmer'
}

//02 - For in Loop. 
// Loop through the keys of an object.
for (const key in obj) {
    console.log(key);
}

//03 - For of loop. 
//Loop through the value of an object
for (const i of obj.name) {
    console.log(i);
}

//04 - While Loop.
//Loops a block based on a specific condition
while (a<100) {
    console.log(a);
    a++;
}

//05 - Do While Loop.
//While loop varient which runs atleast once.
let j = 10;
do {
    console.log(j);
    j++;
} while (j<10);


//Functions in JavaSript.

//...Arrow Function.
let arrow = (c, d)=>{
    return c + d;
}
console.log(arrow(1, 2));

//...Simple Function.
console.log(sum(7, 8)); //It is also called hoisting function.
function sum (a, b){
    return a + b;
}
console.log(sum(7, 8));