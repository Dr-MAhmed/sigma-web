// Practice set Chapter 05

//Problem No 01
// Create an array of numbers and take input from user to add number to this array.
let arr = [1,2,3];
let a = prompt('Enter a number');
a = Number.parseInt(a);
arr.push(a);
console.log(arr);

// Problem No 02
//Keep adding number to the array in Q-1 until 0 is added to the array.
let arr1 = [1,2,3];
let a1;
do {
    a1 = prompt('Enter a number');
    a = Number.parseInt(a);
    arr1.push(a1);
} while (a1!=0);
console.log(arr1);

// Problem No 03
//Filters for numbers divisible by 10 from a given array.
let arr2 = [1,2,3,4,20,5,23,55,60,9,70,90,760]
let veri = arr2.filter((e)=>{
    return e % 10 == 0;
})
console.log(veri);

//Problem No 04
//Create an array of square of given numbers...
let arr3 = [1,2,3,4];
let verian = arr3.map((x)=>{
    return x * x;
});
console.log(verian);

//Problem No 05
//Use reduce to calculate fectorial of a given numbers from an array of first natural numbers.
let arr4 = [1,2,3,4,5];
let reduce = arr4.reduce((val, val2)=> val * val2);
console.log(reduce);