//Practice set chapter 02

// 01: Use logical operators to find whether the age of a person lies between 10 and 20.
let age = 21;
if(age>10 && age<=20){
    console.log(`Yes your age is lies between 10 and 20`);
}else{
    console.log(`No your age is not lies between 10 and 20`);
}


// 02: Demonstrate the use of switch case statement is JS.
let day = 5;
let dayName;
switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}
console.log("Today is " + dayName);



// 03: Write a JS program to find whether the number is divisible by 2 and 3.
let num1 = prompt('What is your number');
num1 = Number.parseInt(num1);
if(num1 % 2 == 0 && num1 % 3 == 0){
    console.log(`your num is divisible by both 2 and 3`);
}
else{
    console.log(`your num is not divisible by both 2 and 3`);
}


// 04: Write a JS program to find whether the number is either divisible by 2 or 3.
let num = prompt('What is your number');
num = Number.parseInt(num);
if(num % 2 == 0){
    console.log(`your num is divisible by 2`);
}else if(num % 3 == 0){
    console.log(`your num is divisible by 3`)
}
else{
    console.log(`your num is not divisible by both 2 and 3`);
}


// 05: Print 'You can drive' or 'you cannot drive' based on age being greater than 18 Using T.O
let age1 = prompt('What is your age?');
console.log(age1 >= 18 ? "You can drive" : "You cannot drive");



//End of Practice Set Chapter 02 - Thanks!