// Chapter 03 Practice Set

//01 - Write a program to print the marks of a students in an object using for loop.
let marks = {
    'saad': 70,
    'arqam': 76,
    'shazil': 87,
    'ahmed': 70,
    'mohsin': 58,
    'zargham': 81,
    'bilal': 89
}
let studentNames = Object.keys(marks);
for (let i = 0; i < studentNames.length; i++) {
    const name1 = studentNames[i];
    const stdMarks = marks[name1];
    console.log(`${name1}: ${stdMarks}`);
}

//02 - Write a program to print the marks of a students in an object using for-in loop.
for (const num in marks) {
        const element = `${num}: ${marks[num]}`; 
        console.log(element);  
    } 

//03 - Write a program to print 'try again' until the user enters the correct number
const random = Math.floor(Math.random() * 10) + 1;
let userInput = parseInt(prompt('Guess the number between 1 and 10'));
while(userInput !== random){
    alert('Try Again');
    userInput = parseInt(prompt('Guess the number between 1 and 10'));
}
    alert(`Congratulations! You guessed the correct number`);

    
//04 - Write a function to find mean of 5 numbers.
const mean = (a, b, c, d, e)=>{
    return (a + b + c + d + e)/5
}
console.log(mean(1,2,3,4,5));