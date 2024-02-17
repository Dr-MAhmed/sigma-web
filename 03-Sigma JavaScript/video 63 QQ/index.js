// Arrays in JavaScript....
// Arrays are variables which can store more than one value...
let arr = [1, 2, 3, 4, 5, 6];
// Accessing the values of an array...
console.log(arr[0]); //output ->  1
console.log(arr[1]); //output ->  2
console.log(arr[2]); //output ->  3
console.log(arr[3]); //output ->  4
console.log(arr[4]); //output ->  5
console.log(arr[5]); //output ->  6
// Finding the length of an array...
console.log(arr.length); //output ->  6
// Changing the value of an array...
console.log((arr[2] = 13)); //output -> 13
// Typeof operator on an array...
console.log(typeof arr); //output -> object.
// Array methods in JavaScript...
// 01: toString() -> converts an array to a string.
console.log(arr.toString()); //output -> '123456'
// 02: join() -> Joins all the array elements using a separator.
console.log(arr.join(" and ")); //output -> 1 and 2 and 3 and 4 and 5 and 6
console.log(arr.join(" _ ")); //output -> 1 _ 2 _ 3 _ 4 _ 5 _ 6
console.log(arr.join(" , ")); //output -> 1 , 2 , 3 , 4 , 5 , 6
// 03: pop() -> Removes last element from the array and returns poped value..
console.log(arr.pop()); //output -> 6
console.log(arr); //output -> [1,2,3,4,5]
// 04: push() -> Add new element at the end of an array..
console.log(arr.push(7)); // -> Returns the new array length..
console.log(arr);
// 05: shift() -> Removes the first element and returns it back..
console.log(arr.shift());
console.log(arr);
// 06: unshift() -> Adds the element at the beginning of an array..
console.log(arr.unshift("Ahmed")); // Returns the new array length..
console.log(arr);
// 07: delete -> Array element can be deleted using delete operator..
console.log(delete arr[2]); // Returns boolean value..
console.log(arr);
// 08: concat() -> Used to join array to given array..
let a = [8, 9, 10];
console.log(arr.concat(a, 1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(arr + " " + a); // + operator can also used to concatinate the array..
// 09: sort() -> Sort an array alphabetically..
let b = [1, 21, 3, 4, 9, 8];
console.log(b.sort());
// 10: splice() ->
let c = [1, 2, 3, 4, 5];
console.log(c.splice(1, 3, "Dr", "Ahmed")); // Returns deleted value.
console.log(c);
// 11: slice() -> Slices out a piece from an array..
console.log(c);
console.log(c.slice(1));
console.log(c.slice(1, 3));
// 12: reverse() -> Reverse the elements in the source array..
let d = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(d.reverse());

// Looping Through Arrays...
// 01: forEach Loop -> Calls a function once for each array element.
let array = [1, 2, 3, 4, 5];
array.forEach((a, b) => {
  console.log(a + b);
});

// 02: map() -> Creates a new array by performing some operations on each array elements
let v = array.map((value, index, array) => {
  // console.log(value, index, array)
  return value + value;
});
console.log(v);

// 03: filter() -> Filters an array with values that passes a test. Creates a new array.
let arr2 = [1, 2, 3, 14, 5, 26];
const greaterThanSeven = (e) => {
  if (e > 7) {
    return true;
  }
  return false;
};
console.log(arr2.filter(greaterThanSeven));
//Another Way...
let z = arr2.filter((value) => {
  if (value > 7) {
    return true;
  }
  return false;
});
console.log(z);

// 04: Reduce() -> Reduces an array to a single value...
let arr1 = [1, 2, 3, 14, 5, 26];
let red = arr1.reduce((e, b)=>{
    return e + b;
})
console.log(red);

// 05: Array.from -> Used to create an array from any other object.
let createAnArray = Array.from("DRAHMED");
console.log(createAnArray);

// 06: Forof loop -> can be used to get the values from an array.
for (const iterator of createAnArray) {
    console.log(iterator);
} 

// 07: Forin loop -> can be used to get the keys from an array.
let obj = {
    a: 1,
    b: 2,
    c: 3,
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key]; 
        console.log(key, element)
    }
}

// Arrays Methods List..
/*
1-toString()    Converts an array to a string.
2-join()        Joins all the array elements using operator.
3-pop()         Removes the last array element.
4-push()        Add new element at the end of an array.
5-shift()       Removes the element at the start of an array.
6-unshift()     Add new element at the beginning of an array.
7-splice()      Splice can be used to add new item to an array.
8-slice()       Slice can be used to remove item from an array.
9-sort()        Sort method can be used to sort an array alphabetically.
10-reverse()    Reverse method can be used to reverse an array.
11-concat()     Concat method used to join array to a given array.
12-delete       Array element can be deleted using delete operator.
*/