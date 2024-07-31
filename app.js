// Define a variable 'myAge' and assign it the value of your current age in human years
let myAge = 21; 

// Define a variable 'earlyYears' and assign it the value 2
let earlyYears = 2;

// Multiply 'earlyYears' by 10.5, because the first two years of a dog's life count as 10.5 dog years each
earlyYears *= 10.5; // earlyYears is now 21

// Define a variable 'laterYears' and assign it the value of 'myAge' minus 2, 
// because we have already accounted for the first two years
let laterYears = myAge - 2; // laterYears is now 19

// Multiply 'laterYears' by 4, because each following year counts as 4 dog years
laterYears *= 4; // laterYears is now 76

// Calculate 'myAgeInDogYears' by adding 'earlyYears' and 'laterYears'
let myAgeInDogYears = earlyYears + laterYears; // myAgeInDogYears is now 97

// Define a variable 'myName' and assign it the value of your name in lowercase
let myName = 'Pippal'.toLowerCase(); // myName is now 'pippal'

// Log a message to the console, using template literals to include 'myName', 'myAge', and 'myAgeInDogYears'
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
// Output: My name is pippal. I am 21 years old in human years which is 97 years old in dog years.
